import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth.service';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
forms;
currentuser;
elem;
  constructor(private auth:AuthService,private dataservice:DataService,private router:Router) { }

  ngOnInit() {
  this.forms= document.getElementById('contact_form');
  this.currentuser= this.dataservice.getcurrentuser().subscribe(
    result => { this.currentuser = result
    }
  )
  this.elem=document.getElementById('success_message');

  }
  submit(){
    let form=this.forms;
          let name = form["name"].value;
          let author=form["author"].value;
          let condition=form["condition"].value;
          let price= +form["price"].value;
          let seller= this.currentuser[0].name;
          let userid = this.currentuser[0].id;


    if(this.validate()){
this.elem.style.display="block";
  this.auth.addBooks(
  {'name':name,
  'author':author,
  'condition':condition,
  'price':price,
  'seller':seller,
  'userid':userid
   }).subscribe( data => {
     if(data)
     {
       if(!confirm('Want to add more ?'))
            this.router.navigate(['main']);
            else{
              this.elem.parentNode.parentNode.reset();
              this.elem.style.display="none";
               }
          }
     else
     alert("Something went wrong....");

  });

}

  }



  validate(){
    //let errors=this.errors;
    let form=this.forms;
    let name = form["name"].value;
    let author=form["author"].value;
    let condition=form["condition"].value;
    let price= +form["price"].value;
          // let image=form["image"].value;

        //console.log(form['image']);

        if (name == "") {
            alert("Name must be filled out");
            return false;
        }
        if (author==""){
          alert("Author name must be filled out");
          return false;
        }
        if(condition ==""){
          alert("Condition must be selected");
          return false;
        }
        if(price==NaN || price <= 0){
          alert("Invalid price");
          return false;
        }

        // if(image==""){
        //   alert("Please select an image");
        //   return false;
        // }
        return true;
      }





}
