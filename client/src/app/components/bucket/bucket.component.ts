import { BucketService } from './../../services/bucket.service';
import { LineItemService } from './../../services/line-item.service';
import { LineItem, Bucket } from './../../types';
import { Component, Input } from '@angular/core';

@Component({
  selector: '.app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent {
  @Input() bucket!: Bucket;

  constructor(private lineItemService: LineItemService, private bucketService: BucketService) {}

  ngOnInit() {
    this.lineItemService.getLineItems().subscribe(items => this.bucket.items = items.filter(i => i.bucketId === this.bucket.id));
  }

  createLineItem() {
    this.lineItemService.addLineItem(this.bucket.id).subscribe(item => this.bucket.items.push(item));
  }

  onNameChange(event: Event) {
    this.bucket.name = (event.target as HTMLDivElement).innerText;
    this.bucketService.updateBucket(this.bucket).subscribe();
  }

  getTotalFormatted(): string {
    if (this.bucket.items !== undefined && this.bucket.items.length > 0) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      const total = this.bucket.items.reduce((sum, a) => sum + a.amount, 0);
      return formatter.format(total);
    }

    return "$0.00";
  }
}
