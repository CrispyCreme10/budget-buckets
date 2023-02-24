import { TemplateService } from './services/template.service';
import { Component } from '@angular/core';
import { Template } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  templates: Template[] = [];

  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
    this.templateService.getTemplates().subscribe((templates) => this.templates = templates);
  }

  addTemplate(template: Template) {
    this.templateService.addTemplate(template);
  }
}
