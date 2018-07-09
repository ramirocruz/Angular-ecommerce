import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerUser(formdata){
    console.log(formdata);
    return this.http.post('/api/users',formdata);
  }
  addBooks(bookdata){
    return this.http.post('/api/listings',bookdata);
  }
}
