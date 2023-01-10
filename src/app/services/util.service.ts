import { Injectable } from '@angular/core';

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Optimal number of days for CSS cell styles
const LAST_147_DAYS = 147;

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private static cachedLastFiveMonths: string[];
  private static cachedCells: Map<string, boolean>;

  static lastFiveMonths(): string[] {
    if (this.cachedLastFiveMonths) {
      return this.cachedLastFiveMonths;
    }

    const months = [];
    let month = new Date().getMonth();

    for (let i = 0; i < 5; i++) {
      months.push(monthNames[month]);
      month -= 1;
      if (month < 0) {
        month = 11;
      }
    }

    this.cachedLastFiveMonths = months;

    return months;
  }

  // Create empty cells for the last 147 days
  static emptyCells(): Map<string, boolean> {
    if (this.cachedCells) {
      return new Map(this.cachedCells);
    }

    const currentDate = new Date();
    const cells = new Map<string, boolean>();
    const UNMARKED = false;
    for (let i = 1; i <= LAST_147_DAYS; i++) {
      const date = this.toFormattedDate(currentDate);
      cells.set(date, UNMARKED);
      this.stepBackOneDay(currentDate);
    }
    this.cachedCells = cells;

    return this.cachedCells;
  }

  static toFormattedDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  private static stepBackOneDay(currentDate: Date) {
    currentDate.setDate(currentDate.getDate() - 1);
  }
}
