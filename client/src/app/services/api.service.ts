import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
};