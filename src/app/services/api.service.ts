import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const API_AUTH = 'https://api.trakto.io/auth/signin';
const API_LIST_10_DESIGNS = 'https://api.trakto.io/document?total_per_page=10&order_orientation=desc&order_by=created_at';
const API_LIST_ALL_DESIGNS = 'https://api.trakto.io/document?total_per_page=9999&order_orientation=desc&order_by=created_at';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const body = {"email": email, "password": password};

    return this.http.post(API_AUTH, body, {headers: headers});
  }

  list10Designs() {
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + sessionStorage.getItem('accessToken'));

    return this.http.get(API_LIST_10_DESIGNS, {headers: headers});
  }

  listAllDesigns() {
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + sessionStorage.getItem('accessToken'));

    return this.http.get(API_LIST_ALL_DESIGNS, {headers: headers});
  }
}