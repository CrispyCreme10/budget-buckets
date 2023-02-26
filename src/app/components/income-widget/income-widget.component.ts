import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-income-widget',
  templateUrl: './income-widget.component.html',
  styleUrls: ['./income-widget.component.css']
})
export class IncomeWidgetComponent {
  faCaretDown = faAngleDown;
}
