import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router'
import {DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentuser;
  constructor(private auth:AuthService,private router:Router,private dataservice:DataService){
    this.dataservice.getcurrentuser().subscribe( user => this.currentuser = user);
  }
  logout(){
    this.auth.setlogin(false);
    this.auth.logOut().subscribe( result =>{
      if(result)
      {
        alert("Logged out");
      }
    });
    window.location.href="/";  
  }
}
