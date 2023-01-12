import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habit } from "../../models/habit";
import { UtilService } from "../../services/util.service";

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

  constructor() {
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

}
