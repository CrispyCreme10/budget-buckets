import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight, faCalendarDay, faCalendarDays, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

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
  daysInWeek = 7;
  MONTH = 'month';
  WEEK = 'week';
  DAY = 'day';

  currDate = new Date(Date.now());
  weeks: number = 6;
  calendarDates: CalendarDate[] = [];
  dateTextStyles = {};
  currentView = this.MONTH;

  // title icons
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  // calendar view icons
  faCalendarMonth = faCalendarDays;
  faCalendarWeek = faCalendarWeek;
  faCalendarDay = faCalendarDay;

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
    for (let count = 0; count < this.daysInWeek * this.weeks; count++) {
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
    this.calendarDates = [];
    const dateYear = this.currDate.getFullYear();
    const dateMonth = this.currDate.getMonth();
    const firstOfMonth = new Date(dateYear, dateMonth, 1)
    const calendarDate = new Date(firstOfMonth);
    calendarDate.setDate(calendarDate.getDate() - firstOfMonth.getDay());
    for (let count = 0; count < this.daysInWeek; count++) {
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

  buildCalendarDay() {

  }

  getCalendarViewStyles(view: string): any {
    return this.currentView === view ? { 'background-color': '#04395e'} : {};
  }

  setCalendarView(view: string) {
    if (this.currentView !== view) {
      console.log(view);
      switch (view) {
        case this.MONTH:
          this.buildCalendarMonth();
          break;
        case this.WEEK:
          this.buildCalendarWeek();
          break;
        case this.DAY:
          this.buildCalendarDay();
          break;
        default:
          throw new Error("Error setting Calendar data");
      }

      this.currentView = view;
    }
  }

  isMonthView(): boolean {
    return this.currentView === this.MONTH;
  }

  isWeekView(): boolean {
    return this.currentView === this.WEEK;
  }

  isDayView(): boolean {
    return this.currentView === this.DAY;
  }


  isDateToday(dateToCompare: Date): boolean {
    const todaysDate = new Date(Date.now());
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
