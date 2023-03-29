import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Habit } from "../../models/habit";
import { KeyValue } from "@angular/common";
import { UtilService } from "../../services/util.service";
import { Cell } from "../../models/cell";

interface Data {
  cell: KeyValue<string, boolean>,
  habit: Habit
}

@Component({
  selector: 'app-mark-cell-dialog',
  templateUrl: './mark-cell-dialog.component.html',
  styleUrls: ['./mark-cell-dialog.component.css']
})
export class MarkCellDialogComponent {
  minDate: Date;
  maxDate: Date;
  currentHabit: Habit;
  cell: Cell;

  constructor(public dialogRef: MatDialogRef<MarkCellDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Data) {
    this.currentHabit = data.habit;
    this.cell = {date: this.data.cell.key, isMarked: this.data.cell.value};

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, -5, 1);
    this.maxDate = new Date();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onDateChanged() {
    // input from the DatePicker must be formatted
    if (this.cell.date instanceof Date) {
      this.cell.date = UtilService.toFormattedUTCDate(new Date(this.cell.date));
    }
    this.cell.isMarked = this.currentHabit.markedDays.has(this.cell.date);

    if (this.cell.isMarked) {
      this.currentHabit.markedDays.add(this.cell.date);
    } else {
      this.currentHabit.markedDays.delete(this.cell.date);
    }
  }
}
