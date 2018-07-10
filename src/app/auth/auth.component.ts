import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
email:any;
pass:any;
  constructor(private auth:AuthService,private dataservice:DataService,private router:Router) { }

  ngOnInit() {
    this.email=document.getElementById('email');
    this.pass=document.getElementById('pwd');

  }
  login() {

  this.auth.registerUser({"status":0,
                             "item":{
                               "email":this.email.value,
                               "password":this.pass.value,
                             }}).subscribe(data =>{
                               
                               if(data[0]==false)
                               alert("Wrong Password or  Email");
                               else {
                               this.auth.setlogin(true);
                               this.router.navigate(['main']);


                               }
                             })





}
}
