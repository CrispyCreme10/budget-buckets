import { LineItemService } from './../../services/line-item.service';
import { LineItem } from './../../types';
import { Component } from '@angular/core';

@Component({
  selector: '.app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent {
  id!: number;
  total!: number;
  lineItems: LineItem[] = [];

  constructor(private lineItemService: LineItemService) {}

  ngOnInit() {
    this.lineItemService.getLineItems().subscribe(items => this.lineItems = items);
  }

  createLineItem() {
    this.lineItemService.addLineItem(1).subscribe(item => this.lineItems.push(item));
  }

  getTotalFormatted(): string {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return this.total !== undefined ? formatter.format(this.total) : "$0.00";
  }
}
