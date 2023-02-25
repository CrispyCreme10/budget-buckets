import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private apiUrl = 'http://localhost:5000/buckets';

  constructor(private http: HttpClient) {}

  getBuckets(): Observable<Bucket[]> {
    return this.http.get<Bucket[]>(this.apiUrl);
  }

  updateBucket(bucket: Bucket): Observable<Bucket> {
    const url = `${this.apiUrl}/${bucket.id}`;
    return this.http.put<Bucket>(url, bucket, httpOptions);
  }
}
