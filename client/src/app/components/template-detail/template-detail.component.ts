import { BucketService } from './../../services/bucket.service';
import { Component, Input } from '@angular/core';
import { Template } from 'src/app/types';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent {
  @Input() template!: Template;

  constructor(private bucketService: BucketService) {}

  ngOnInit() {
    this.bucketService.getBuckets().subscribe(buckets => this.template.buckets = buckets.filter(bucket => bucket.templateId === this.template.id))
  }
}
