import { Injectable } from '@angular/core';
import { Habit } from "../models/habit";

const mockHabits: Habit[] = [
  {
    key: '1',
    title: 'Workout',
    description: 'Do something',
    markedDays: new Set<string>(['2023-01-01', '2023-01-03', '2023-01-06'])
  },
  {
    key: '2',
    title: 'Read books',
    description: 'I want to read more and more books every fucking day',
    markedDays: new Set<string>(['2022-12-31', '2023-01-02', '2023-01-07'])
  },
  {
    key: '3',
    title: 'Complete some tasks',
    description: 'I don"t want to get fired',
    markedDays: new Set<string>(['2022-12-01', '2023-01-05', '2023-01-10'])
  }
]

@Injectable({
  providedIn: 'root'
})
export class MockHabitService {
  habits: Habit[] = mockHabits;

  getAll(): Habit[] {
    return this.habits;
  }
}
