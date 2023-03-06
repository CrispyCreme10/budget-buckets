import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight, faCalendarDay, faCalendarDays, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

interface CalendarDate {
  date: Date,
  dateStr: string,
  isInCurrMonth: boolean
}

const monthYearOptions: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric"
}

const monthOptions: Intl.DateTimeFormatOptions = {
  month: "short"
}

const dayOptions: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric"
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  // consts
  DAYS_IN_WEEK = 7;
  MONTH = 'month';
  WEEK = 'week';
  DAY = 'day';

  // properties
  currDate = new Date(Date.now());
  monthViewWeeks: number = 6;
  calendarDates: CalendarDate[] = [];
  dateTextStyles = {};
  currentView = '';
  calendarViewTitle = '';

  // calendar view icons
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faCalendarMonth = faCalendarDays;
  faCalendarWeek = faCalendarWeek;
  faCalendarDay = faCalendarDay;

  ngOnInit() {
    this.setCalendarView(this.WEEK);
  }

  // find the most recent Sunday from the first of the month
  // append the next 35 dates from the previously found Sunday date (INCLUSIVE) to calendarDates
  buildCalendarMonth() {
    // setup
    this.calendarDates = [];
    const dateYear = this.currDate.getFullYear();
    const dateMonth = this.currDate.getMonth();
    const firstOfMonth = new Date(dateYear, dateMonth, 1)
    const calendarDate = new Date(firstOfMonth);
    // set first calendar date to the first day in the 6-week calendar (can creep into previous month)
    calendarDate.setDate(calendarDate.getDate() - firstOfMonth.getDay());

    // execution
    for (let count = 0; count < this.DAYS_IN_WEEK * this.monthViewWeeks; count++) {
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
    
    // set view title
    this.calendarViewTitle = new Intl.DateTimeFormat("en-US", monthYearOptions).format(this.currDate);
  }

  buildCalendarWeek() {
    // setup
    const longMonthYear: Intl.DateTimeFormatOptions = {
      month: "long",
      year: "numeric"
    };
    const shortMonthYear: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric"
    };
    const shortMonth: Intl.DateTimeFormatOptions = {
      month: "short"
    };
    this.calendarDates = [];
    const dateYear = this.currDate.getFullYear();
    const dateMonth = this.currDate.getMonth();
    console.log(this.currDate);
    const calendarDate = new Date(this.currDate);
    // set first calendar date to the first day of the current week
    calendarDate.setDate(calendarDate.getDate() - calendarDate.getDay());
    let followingMonthFormatted = null;

    // execution
    const startMonth = calendarDate.getMonth();
    const startYear = calendarDate.getFullYear();
    for (let count = 0; count < this.DAYS_IN_WEEK; count++) {
      const calendarMonth = calendarDate.getMonth();
      if (calendarMonth !== dateMonth) {
        followingMonthFormatted = new Intl.DateTimeFormat("en-US", monthYearOptions).format(calendarDate);
        console.log(followingMonthFormatted);
      }
      this.calendarDates.push({
        date: new Date(calendarDate),
        dateStr: calendarDate.getDate().toString(),
        isInCurrMonth: calendarDate.getMonth() === dateMonth && calendarDate.getFullYear() === dateYear
      })
      if (count < this.DAYS_IN_WEEK - 1) {
        calendarDate.setDate(calendarDate.getDate() + 1);
      }
    }

    // set view title
    if (startMonth === calendarDate.getMonth() && startYear === calendarDate.getFullYear()) {
      // March 2023 (Single Month, Same Year)
      this.calendarViewTitle = new Intl.DateTimeFormat("en-US", longMonthYear).format(calendarDate);
    } else if (startMonth !== calendarDate.getMonth() && startYear === calendarDate.getFullYear()) {
      // Feb - Mar 2023 (Multi Month, Same Year)
      const prevShortMonth = new Intl.DateTimeFormat("en-US", shortMonth).format(new Date(startYear, startMonth, 1));
      const currShortMonthYear = new Intl.DateTimeFormat("en-US", shortMonthYear).format(calendarDate);
      this.calendarViewTitle = `${prevShortMonth} - ${currShortMonthYear}`;
    } else if (startMonth !== calendarDate.getMonth() && startYear !== calendarDate.getFullYear()) {
      // Dec 2022 - Jan 2023 (Multi Month, Diff Year)
      const prevShortMonthYear = new Intl.DateTimeFormat("en-US", shortMonthYear).format(new Date(startYear, startMonth, 1));
      const currShortMonthYear = new Intl.DateTimeFormat("en-US", shortMonthYear).format(calendarDate);
      this.calendarViewTitle = `${prevShortMonthYear} - ${currShortMonthYear}`;
    } else {
      throw new Error('Unknown Month/Year configuration');
    }
  }

  buildCalendarDay() {

  }

  getCalendarViewStyles(view: string): any {
    return this.currentView === view ? { 'background-color': '#04395e'} : {};
  }

  setCalendarView(view: string) {
    if (this.currentView !== view) {
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

  setViewToToday() {
    this.currDate = new Date(Date.now());
    switch (this.currentView) {
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

  shiftView(shiftVal: number) {
    if (shiftVal === 1 || shiftVal === -1) {
      switch (this.currentView) {
        case this.MONTH:
          this.currDate.setMonth(this.currDate.getMonth() + shiftVal);
          this.buildCalendarMonth();
          break;
        case this.WEEK:
          this.currDate.setDate(this.currDate.getDate() + shiftVal * 7);
          this.buildCalendarWeek();
          break;
        case this.DAY:
          this.currDate.setDate(this.currDate.getDate() + shiftVal);
          this.buildCalendarDay();
          break;
        default:
          throw new Error("Error shifting Calendar");
      }      
    }
  }
}
