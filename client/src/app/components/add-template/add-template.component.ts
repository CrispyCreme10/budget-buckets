import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent {
  @Output() onAddTemplate: EventEmitter<any> = new EventEmitter();

  constructor() {}

  addTemplate() {
    this.onAddTemplate.emit(null)
  }
}
