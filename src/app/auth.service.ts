import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
// private loggedinstatus=JSON.parse(sessionStorage.getItem('loginstatus') || 'false');
private loggedinstatus=false;
  constructor(private http:HttpClient) { }

  registerUser(formdata){
    console.log(formdata);
    return this.http.post('/api/users',formdata);
  }
  addBooks(bookdata:FormData){
    return this.http.post('/api/listings',bookdata);
  }
  setlogin(status:boolean){
    this.loggedinstatus=status;
    // sessionStorage.setItem('loginstatus',status);
  }
  get isLoggedin(){
  // return (this.loggedinstatus || JSON.parse(sessionStorage.getItem('loginstatus')));
  return this.loggedinstatus;
  }
  getloginstatus(){
    return this.http.get('api/isLoggedin');
  }
  logOut(){
    return this.http.get('api/logout');
  }

}
