import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  Wishlist;
  products;
  currentuser;
  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit() {
    this.dataservice.getcurrentuser().subscribe( user => {this.currentuser = user[0].id

    this.dataservice.getWishlist(this.currentuser).subscribe( product => {this.products = product
      let pid=[];
       for(product of this.products)
       {
        pid.push(product.productid);
       }
         if(pid.length != 0){

    this.dataservice.getDataofId(pid).subscribe( result => { this.Wishlist = result


    });}
    });
    });


  }
  emptyWishlist(){
    this.dataservice.deleteWishlist(this.currentuser).subscribe( res => {
      if(res)
      alert("wishlist empty");
    });
    this.Wishlist=[];
  }
  buy(event){

    if(this.currentuser){
    let id=event.currentTarget.parentNode.id;
    this.dataservice.addToCart({productid:id,userid:this.currentuser}).subscribe(
      result => {if(result)
        { alert("Item added to Cart");
         this.router.navigate(['cart']);
       }else{
         alert("Item already in Cart");
       }

      }
    )
  }
  else{
    this.router.navigate(['auth']);
  }
}

}
