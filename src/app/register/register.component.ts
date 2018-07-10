import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
forms;
elem;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
this.forms= document.getElementById('contact_form');
this.elem=document.getElementById('success_message');
  }
  submit(){
    let form=this.forms;
          let name = form["name"].value;
          let user_name=form["user_name"].value;
          let user_password=form["user_password"].value;
          let confirm_password=form["confirm_password"].value;
          let email=form["email"].value;
          let contact_no=form["contact_no"].value;
          let address=form["address"].value;
          let college=form["college"].value;
          // let image=form["image"].value;
    if(this.formvalidate()){

    this.auth.registerUser({
      'status':2,
      'item':{
        'email':email
      }
    }).subscribe(data => {
      if(data[0])
      alert('email already exits');
      else
      {this.elem.style.display="block";
        this.auth.registerUser({'status':1,
         'item':
         {'name':name,
        'user_name':user_name,
        'user_password':user_password,
        'email':email,
        'contact':contact_no,
        'address':address,
        'college':college}
          }).subscribe( data => {
       this.router.navigate(['main']);
        });
      }
    })
 }else{
   this.elem.parentNode.parentNode.reset();
 }

  }



  formvalidate(){
    //let errors=this.errors;
    let form=this.forms;
          let name = form["name"].value;
          let user_name=form["user_name"].value;
          let user_password=form["user_password"].value;
          let confirm_password=form["confirm_password"].value;
          let email=form["email"].value;
          let contact_no=form["contact_no"].value;
          let address=form["address"].value;
          let college=form["address"].value;
          // let image=form["image"].value;

        //console.log(form['image']);

        if (name == "") {
            alert("Name must be filled out");
            return false;
        }
        if (user_name==""){
          alert("Username must be filled out");
          return false;
        }
        if(user_password ==""){
          alert("Password must be filled out");
          return false;
        }
        if(user_password !== confirm_password){
          alert("Password do not match");
          return false;
        }
        if(email==""){
          alert("Email must be filled out");
          return false;
        }
        // if(email)
        if(contact_no == ""){
          alert("Contact no. must be filled out");
          return false;
        }
        if(+contact_no == NaN){
          alert("Contact no. must be a number");
          return false;
        }
        if(address==""){
          alert("Address must be filled out");
          return false;
        }
        if(college==""){
          alert("College must be filled out");
          return false;
        }
        // if(image==""){
        //   alert("Please select an image");
        //   return false;
        // }
        return true;
      }




}
