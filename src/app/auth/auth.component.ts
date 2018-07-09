import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
email:any;
pass:any;
  constructor(private auth:AuthService,private dataservice:DataService) { }

  ngOnInit() {
    this.email=document.getElementById('email');
    this.pass=document.getElementById('pwd');
    console.log(this.email);
    console.log(this.pass);
  }
  login() {

  this.auth.registerUser({"status":0,
                             "item":{
                               "email":this.email.value,
                               "password":this.pass.value,
                             }}).subscribe(data =>{
                               console.log(data);
                               if(data[0]==null)
                               alert("Wrong Password or  Username");
                               else {
                                 localStorage.setItem("admin",'1');
                                 console.log("logged in");
                                 this.dataservice.isLoggedin().subscribe(
                                   data => {console.log(data)})

                               }
                             })





}
}
