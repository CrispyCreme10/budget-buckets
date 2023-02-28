import { Component } from '@angular/core';

const daysInWeek = 7;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  currDate = new Date(Date.now());
  weeks: number = 5;
  calendarDates: string[] = [];

  ngOnInit() {
    this.buildCalendarMonth(this.currDate);
  }

  buildCalendarMonth(calDate: Date) {
    // find the most recent Sunday from the first of the month
    // append the next 35 dates from the previously found Sunday date (INCLUSIVE) to calendarDates

    const firstOfMonth = new Date(calDate.getFullYear(), calDate.getMonth(), 1)
    const calendarDate = new Date(firstOfMonth);
    calendarDate.setDate(calendarDate.getDate() - firstOfMonth.getDay());
    for (let count = 0; count < daysInWeek * this.weeks; count++) {
      const formattedDate = (calendarDate.getMonth() + 1).toString() + "/" + calendarDate.getDate();
      this.calendarDates.push(formattedDate)
      calendarDate.setDate(calendarDate.getDate() + 1);
    }
  }

  getFormattedTitleDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric"
    }
    return new Intl.DateTimeFormat("en-US", options).format(this.currDate);
  }
}
