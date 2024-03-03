import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAllProducts() : Observable<any> {
    const url = `${this.url}/products`;
    return this.http.get(url);
  }

  public getFeatured() : Observable<any> {
    const url = `${this.url}/products/featured`;
    return this.http.get(url);
  }

  public getSearch(type?: string, startDate?: string, endDate?: string) : Observable<any> {
    let params = new HttpParams();

    if (type) {
      params = params.set('type', type);
    }
    if (startDate && endDate) {
      params = params.set('startDate', startDate).set('endDate', endDate);
    }

    return this.http.get(`${this.url}/products/search`, { params });
  }
};