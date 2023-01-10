import { Injectable } from '@angular/core';
import { Habit } from "../models/habit";

const mockHabits: Habit[] = [
  {
    key: '1',
    title: 'Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet.',
    markedDays: new Set<string>(['2023-01-01', '2023-01-03', '2023-01-06'])
  },
  {
    key: '2',
    title: 'Lorem.',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    markedDays: new Set<string>(['2022-12-31', '2023-01-02', '2023-01-07'])
  },
  {
    key: '3',
    title: 'Lorem ipsum.',
    description: 'Lorem ipsum dolor.',
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
