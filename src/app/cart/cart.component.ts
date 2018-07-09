import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Cart;
  userid;
  productid;
  constructor(private dataservice:DataService,private router:Router) {

}
  ngOnInit() {

  this.dataservice.getcurrentuser().subscribe( user => {this.userid = user[0].id

  this.dataservice.getCart(this.userid).subscribe( product => {this.productid = product
    let pid=[];
     for(product of this.productid)
     {
      pid.push(product.productid);
     }
  if(pid.length!=0){


  this.dataservice.getDataofId(pid).subscribe( result => { this.Cart = result


  });}
  });
  });


  }

  emptyCart(){
    this.dataservice.deleteCart(this.userid).subscribe( res => {
      if(res)
      alert("cart empty");
    });
    this.Cart=[];
  }

}
