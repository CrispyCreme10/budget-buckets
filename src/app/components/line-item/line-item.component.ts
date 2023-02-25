import { LineItem } from './../../types';
import { Component, Input } from '@angular/core';
import { LineItemService } from 'src/app/services/line-item.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent {
  @Input() lineItem!: LineItem;
  faTimes = faTimes;

  constructor(private lineItemService: LineItemService) {}

  setName(event: Event) {
    this.lineItem.name = (<HTMLInputElement>event.target).value;
    this.lineItemService.updateLineItem(this.lineItem).subscribe();
  }

  setAmount(event: Event) {
    this.lineItem.amount = parseFloat((<HTMLInputElement>event.target).value);
    this.lineItemService.updateLineItem(this.lineItem).subscribe();
  }
}
