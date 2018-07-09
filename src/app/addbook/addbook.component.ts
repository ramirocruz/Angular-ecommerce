import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
forms;
  constructor(private auth:AuthService) { }

  ngOnInit() {
  this.forms= document.getElementById('contact_form');
  console.log(this.forms);
  }
  submit(){
    let form=this.forms;
          let name = form["name"].value;
          let author=form["author"].value;
          let condition=form["condition"].value;
          let price= +form["price"].value;
          console.log(name,author,condition,price);
    if(this.validate()){
    console.log("Done");
  this.auth.addBooks(
  {'name':name,
  'author':author,
  'condition':condition,
  'price':price
   }).subscribe( data => {
console.log(data);
  });}
    else{
  console.log("Haha");
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
