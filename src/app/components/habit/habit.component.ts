import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habit } from "../../models/habit";
import { UtilService } from "../../services/util.service";
import { MockHabitService } from "../../services/mock-habit.service";

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit {
  @Input() habit!: Habit;
  @Output() habitDeleted = new EventEmitter<Habit>();

  months: string[];
  cells: Map<string, boolean>;
  date?: Date;

  constructor(private habitService: MockHabitService) {
    this.months = UtilService.lastFiveMonths();
    this.cells = UtilService.emptyCells();
  }

  ngOnInit(): void {
    this.fillCells();
  }

  private fillCells() {
    this.habit.markedDays?.forEach(markedDay => this.cells.set(markedDay, true));
  }

  delete($event: MouseEvent, habit: Habit) {
    if (!habit.key) {
      return;
    }
    this.habitDeleted.emit(habit);
  }

  onDatePickerClose() {
    if (!this.date || this.date > new Date()) {
      return;
    }

    const confirmed = confirm(`Are you sure you want to mark this day: ${this.date.toLocaleDateString()}?`);
    if (!confirmed) {
      return;
    }

    const localDate = new Date(this.date + " UTC");
    const formattedDate = UtilService.toFormattedDate(localDate);
    this.habit.markedDays?.add(formattedDate);
    this.cells.set(formattedDate, true);
    this.habitService.update(this.habit);
  }
}
