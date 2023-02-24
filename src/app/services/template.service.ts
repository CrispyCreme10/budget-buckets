import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private apiUrl = 'http://localhost:5000/template';

  constructor(private http: HttpClient) {}

  getTemplates(): Observable<Template[]> {
    return this.http.get<Template[]>(this.apiUrl);
  }

  addTemplate(template: Template): Observable<Template> {
    return this.http.post<Template>(this.apiUrl, template);
  }
}
