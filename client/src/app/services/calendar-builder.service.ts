import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarBuilderService {
  DAYS_IN_WEEK = 7;
  weeksInMonth: number = 6;

  constructor() { }

  generateCalendarMonthDates(startDate: Date): Date[] {
    // setup
    const dateYear = startDate.getFullYear();
    const dateMonth = startDate.getMonth();
    const firstOfMonth = new Date(dateYear, dateMonth, 1)
    const calendarDate = new Date(firstOfMonth);
    calendarDate.setDate(calendarDate.getDate() - firstOfMonth.getDay());
    
    // execution
    const dates: Date[] = [calendarDate];
    for (let count = 1; count < this.DAYS_IN_WEEK * this.weeksInMonth; count++) {
      calendarDate.setDate(calendarDate.getDate() + 1)
      dates.push(new Date(calendarDate));
    }

    return dates;
  }
  
  daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }
}
