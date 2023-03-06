import { CalendarBuilderService } from './../../services/calendar-builder.service';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  // header icons
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  @Input() title = 'Unknown';
  @Input() startDate: Date = new Date(Date.now());

  constructor(
    private calendarService: CalendarBuilderService
  ) { }

  buildCalendarMonth(): string[] {
    const dates = this.calendarService.generateCalendarMonthDates(this.startDate);
    const calendarContentCells: string[] = []
    for (const date of dates) {
      if (date.getMonth() === this.startDate.getMonth()) {
        calendarContentCells.push(date.getDate().toString());
      } else {
        // push empty string to cells arr for dates outside of the startDate month
        calendarContentCells.push('');
      }
    }

    return calendarContentCells;
  }

}
