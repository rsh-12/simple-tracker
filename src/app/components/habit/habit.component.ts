import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habit } from "../../models/habit";
import { UtilService } from "../../services/util.service";
import { KeyValue } from "@angular/common";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MarkCellDialogComponent } from "../mark-cell-dialog/mark-cell-dialog.component";
import { Cell } from "../../models/cell";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit {
  @Input() currentHabit!: Habit;
  @Output() habitDeleted = new EventEmitter<Habit>();

  months: string[];
  cells: Map<string, boolean>;
  date?: Date;

  constructor(public dialogRef: MatDialog,
              private snackBar: MatSnackBar) {
    this.months = UtilService.lastFiveMonths();
    this.cells = UtilService.emptyCells();
  }

  ngOnInit(): void {
    this.fillCells();
  }

  private fillCells() {
    this.currentHabit.markedDays.forEach(markedDay => this.cells.set(markedDay, true));
  }

  delete($event: MouseEvent, habit: Habit) {
    if (!habit.key) {
      return;
    }
    this.habitDeleted.emit(habit);
  }

  onCellClicked($event: MouseEvent, cell: KeyValue<string, boolean>) {
    const dialogRef = this.handleDialogOpenEvent(cell);
    this.handleDialogCloseEvent(dialogRef);
  }

  private handleDialogOpenEvent(cell: KeyValue<string, boolean>) {
    return this.dialogRef.open(MarkCellDialogComponent, {
        data: {cell, habit: this.currentHabit}
      }
    );
  }

  private handleDialogCloseEvent(dialogRef: MatDialogRef<MarkCellDialogComponent>) {
    dialogRef.afterClosed().subscribe((cell: Cell) => {
      if (cell) {
        this.updateCell(cell);
      }
    });
  }

  private updateCell(cell: Cell) {
    if (cell.date instanceof Date) {
      this.snackBar.open('Date format error');
      return;
    }

    this.cells.set(cell.date, !cell.isMarked);
    if (!cell.isMarked) {
      this.snackBar.open('Hooray!', 'Close');
    }
  }

  isCurrentDateMarked() {
    return this.cells.get(UtilService.NOW) === true;
  }

  onCheckboxChange(isChecked: boolean) {
    isChecked
      ? this.markDate(UtilService.NOW)
      : this.unmarkDate(UtilService.NOW);
  }

  private unmarkDate(dateAsKey: string) {
    this.currentHabit.markedDays.delete(dateAsKey);
    this.cells.set(dateAsKey, false);
  }

  private markDate(dateAsKey: string) {
    this.currentHabit.markedDays.add(dateAsKey);
    this.cells.set(dateAsKey, true);
    this.snackBar.open('Hooray!', 'Close');
  }

}
