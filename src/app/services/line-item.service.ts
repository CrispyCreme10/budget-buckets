import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LineItem } from '../types';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LineItemService {
  private apiUrl = 'http://localhost:5000/lineitems';

  constructor(private http: HttpClient) {}

  getLineItems(): Observable<LineItem[]> {
    return this.http.get<LineItem[]>(this.apiUrl);
  }

  addLineItem(bucketId: number): Observable<LineItem> {
    return this.http.post<LineItem>(this.apiUrl, {
      bucketId: bucketId,
      name: '',
      amount: 0
    }, httpOptions);
  }

  updateLineItem(lineItem: LineItem): Observable<LineItem> {
    const url = `${this.apiUrl}/${lineItem.id}`;
    return this.http.put<LineItem>(url, lineItem, httpOptions);
  }
}
