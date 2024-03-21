import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  testit(): Observable<any> {
    const url = 'https://reqres.in/api/users/2';
    return this.http.get(url, { responseType: 'text' }); // Use 'text' to avoid JSON parsing issues
  }
}
