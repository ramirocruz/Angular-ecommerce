import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {AuthService} from '../auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

Products;
currentuser;
  constructor(private dataservice:DataService,private auth:AuthService) {

}
  ngOnInit() {
    this.dataservice.getData().subscribe( data =>{ this.Products = data});
    this.dataservice.getcurrentuser().subscribe( user => {this.currentuser=user});
  }
  buy(event){
    let id=event.currentTarget.parentNode.parentNode.parentNode.id;
    this.dataservice.addToCart({productid:id,userid:this.currentuser[0].id}).subscribe(
      result => {
        console.log(result);
      }
    )
  }
  addToWishlist(event){
    let id=event.currentTarget.parentNode.parentNode.parentNode.id;
    this.dataservice.addToWishlist({productid:id,userid:this.currentuser[0].id}).subscribe(
      result => {
        console.log(result);
      }
    )
  }
logout(){
  this.auth.setlogin(false);
  this.auth.logOut().subscribe(result => { alert("logged out")});
}

}
