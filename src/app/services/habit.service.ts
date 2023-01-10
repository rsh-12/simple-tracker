import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { Habit } from "../models/habit";

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private collection = environment.collections.habits;
  habitsRef: AngularFireList<Habit>;

  constructor(private db: AngularFireDatabase) {
    this.habitsRef = db.list(this.collection);
  }

  getAll(): AngularFireList<Habit> {
    return this.habitsRef;
  }
}
