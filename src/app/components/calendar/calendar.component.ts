import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const daysInWeek = 7;
interface CalendarDate {
  date: Date,
  dateStr: string,
  isInCurrMonth: boolean
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  currDate = new Date(Date.now());
  weeks: number = 6;
  calendarDates: CalendarDate[] = [];
  dateTextStyles = {};

  // title icons
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  ngOnInit() {
    this.buildCalendarMonth();
  }

  // find the most recent Sunday from the first of the month
  // append the next 35 dates from the previously found Sunday date (INCLUSIVE) to calendarDates
  buildCalendarMonth() {
    this.calendarDates = [];
    const dateYear = this.currDate.getFullYear();
    const dateMonth = this.currDate.getMonth();
    const firstOfMonth = new Date(dateYear, dateMonth, 1)
    const calendarDate = new Date(firstOfMonth);
    calendarDate.setDate(calendarDate.getDate() - firstOfMonth.getDay());
    for (let count = 0; count < daysInWeek * this.weeks; count++) {
      const calendarMonth = calendarDate.getMonth();
      let formattedDate = calendarDate.getDate().toString();
      if (calendarMonth !== dateMonth) {
        const options: Intl.DateTimeFormatOptions = {
          month: "short"
        }
        formattedDate = `${new Intl.DateTimeFormat("en-US", options).format(calendarDate)} ${formattedDate}`;
      }
      this.calendarDates.push({
        date: new Date(calendarDate),
        dateStr: formattedDate,
        isInCurrMonth: calendarMonth === dateMonth && calendarDate.getFullYear() === dateYear
      })
      calendarDate.setDate(calendarDate.getDate() + 1);
    }
  }

  buildCalendarWeek() {

  }

  buildCalendarDay() {

  }

  isDateToday(dateToCompare: Date): boolean {
    const todaysDate = new Date(Date.now());
    console.log({dateToCompare, todaysDate});
    return dateToCompare.getFullYear() === todaysDate.getFullYear() &&
          dateToCompare.getMonth() === todaysDate.getMonth() &&
          dateToCompare.getDate() === todaysDate.getDate();
  }

  getFormattedTitleDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric"
    }
    return new Intl.DateTimeFormat("en-US", options).format(this.currDate);
  }

  shiftMonth(shiftVal: number) {
    if (shiftVal === 1 || shiftVal === -1) {
      this.currDate.setMonth(this.currDate.getMonth() + shiftVal);
      this.buildCalendarMonth()
    }
  }
}
