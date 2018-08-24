import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {AuthService} from '../auth.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

Products;
currentuser;
  constructor(private dataservice:DataService,private auth:AuthService,private router:Router) {

}
  ngOnInit() {
    this.dataservice.getData().subscribe( data =>{ this.Products = data; console.log(data)});
    this.dataservice.getcurrentuser().subscribe( user => {this.currentuser=user});
  }
  buy(event){
    
    if(this.currentuser){
    let id=event.currentTarget.parentNode.parentNode.parentNode.id;
    this.dataservice.addToCart({productid:id,userid:this.currentuser[0].id}).subscribe(
      result => {if(result)
        { alert("Item added to Cart");
         this.router.navigate(['cart']);
       }else{
         alert("Item already in cart");
       }

      }
    )
  }
  else{
    this.router.navigate(['auth']);
  }
}
  addToWishlist(event){
    if(this.currentuser){
    let id=event.currentTarget.parentNode.parentNode.parentNode.id;
    this.dataservice.addToWishlist({productid:id,userid:this.currentuser[0].id}).subscribe(
      result => {if(result)
        { alert("Item added to Wishlist");
         this.router.navigate(['wishlist']);
       }else{
         alert("Something went wrong");
       }

      }
    )
  }else{
    this.router.navigate(['auth']);
  }}


}
