import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoLocationService {
  constructor(private http: HttpClient) { } 
  getLocation(): Observable<any> { 
    return this.http.get('https://ipapi.co/json/'); 
  }
}
