import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.post<T>(url, body, options);
  }

  put<T>(url: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.put<T>(url, body, options);
  }

  delete<T>(url: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.delete<T>(url, options);
  }

  patch<T>(url: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.patch<T>(url, body, options);
  }
}
