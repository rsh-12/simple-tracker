import { Injectable } from '@angular/core';
import { Habit } from '../models/habit';
import { CommonService } from './common.service';

const mockHabits: Habit[] = [
  {
    key: '1',
    title: '1. Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet.',
    markedDays: new Set<string>(['2023-01-01', '2023-01-03', '2023-01-06'])
  },
  {
    key: '2',
    title: '2. Lorem.',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    markedDays: new Set<string>(['2022-12-31', '2023-01-02', '2023-01-07'])
  },
  {
    key: '3',
    title: '3. Lorem ipsum.',
    description: 'Lorem ipsum dolor.',
    markedDays: new Set<string>(['2022-12-01', '2023-01-05', '2023-01-10'])
  },
  {
    key: '4',
    title: '4. Lorem ipsum. Dolor color.',
    description: 'Lorem ipsum dolor. Dolor.',
    markedDays: new Set<string>(['2022-12-09', '2023-01-15', '2023-01-21'])
  },
  {
    key: '5',
    title: '5. Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam, asperiores assumenda dolorum ' +
      'enim ex excepturi expedita illum in iste iure maiores molestiae omnis pariatur placeat praesentium quaerat ' +
      'quidem quos recusandae rem sequi sit tempore temporibus vel veniam veritatis vitae, voluptatem. ' +
      'Ex magnam magni odit possimus repudiandae, similique tempora ut?',
    markedDays: new Set<string>(['2023-01-20', '2023-01-19', '2023-01-22'])
  },
];

@Injectable({
  providedIn: 'root'
})
export class MockHabitService implements CommonService<Habit> {
  habits: Habit[] = mockHabits;

  save(t: Habit): void | Habit | undefined {
    throw new Error('Method not implemented.');
  }

  getAll(): Habit[] {
    return this.habits;
  }

  deleteByKey(key: string) {
    this.habits = this.habits.filter(habit => habit.key != key);
  }

  update(habit: Habit) {
    console.log(`Save changes: ${habit.key}`);
  }

  deleteById(id: string | number): void {
    throw new Error('Not implemented');
  }

  getOne(): Habit {
    throw new Error('Not implemented');
  }

}
