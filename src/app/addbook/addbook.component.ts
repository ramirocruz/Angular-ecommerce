import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth.service';
import {DataService} from '../data.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
forms;
currentuser;
  constructor(private auth:AuthService,private dataservice:DataService) { }

  ngOnInit() {
  this.forms= document.getElementById('contact_form');
  this.currentuser= this.dataservice.getcurrentuser().subscribe(
    result => { this.currentuser = result
    }
  )
document.getElementById('success_message').setAttribute('display','block');
  }
  submit(){
    let form=this.forms;
          let name = form["name"].value;
          let author=form["author"].value;
          let condition=form["condition"].value;
          let price= +form["price"].value;
          let seller= this.currentuser[0].name;
          let userid = this.currentuser[0].id;
console.log(seller);

    if(this.validate()){

  this.auth.addBooks(
  {'name':name,
  'author':author,
  'condition':condition,
  'price':price,
  'seller':seller,
  'userid':userid
   }).subscribe( data => {
     console.log(data);
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
