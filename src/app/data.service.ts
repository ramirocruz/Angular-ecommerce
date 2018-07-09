import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('/api/listings');
  }
  isLoggedin(){
    return this.http.get('api/isLoggedin');
  }
  getcurrentuser(){
    return this.http.get('api/currentuser');
  }
}
