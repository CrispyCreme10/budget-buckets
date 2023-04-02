import { Component, Input } from '@angular/core';
import { TemplateService } from 'src/app/services/template.service';
import { Template } from 'src/app/types';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent {
  templates: Template[] = [];

  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
    this.templateService.getTemplates().subscribe((templates) => this.templates = templates);
  }
  
  addTemplate() {
    this.templateService.createTemplate().subscribe(template => this.templates.push(template));
  }
}
