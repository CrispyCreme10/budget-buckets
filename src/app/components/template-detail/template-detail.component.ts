import { Component, Input } from '@angular/core';
import { Template } from 'src/app/types';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent {
  @Input() template!: Template;
}
