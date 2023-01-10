import { Component } from '@angular/core';
import { MockHabitService } from "../../services/mock-habit.service";
import { Habit } from "../../models/habit";

@Component({
  selector: 'app-habits-list',
  templateUrl: './habits-list.component.html',
  styleUrls: ['./habits-list.component.css']
})
export class HabitsListComponent {
  habits: Habit[];

  constructor(private habitService: MockHabitService) {
    this.habits = habitService.getAll();
  }

}
