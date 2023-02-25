import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../types';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private apiUrl = 'http://localhost:5000/buckets';

  constructor(private http: HttpClient) {}

  getBuckets(): Observable<Bucket[]> {
    return this.http.get<Bucket[]>(this.apiUrl);
  }
}
