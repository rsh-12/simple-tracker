import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireModule } from "@angular/fire/compat";
import { HabitsListComponent } from './components/habits-list/habits-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { HabitComponent } from './components/habit/habit.component';
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    HabitsListComponent,
    HabitComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    {provide: MatNativeDateModule, useValue: {useUtc: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
