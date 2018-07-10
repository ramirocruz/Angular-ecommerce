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
  amount=0;
  checksum;
  pid=[];
  constructor(private dataservice:DataService,private router:Router) {

}
  ngOnInit() {

  this.dataservice.getcurrentuser().subscribe( user => {this.userid = user[0].id

  this.dataservice.getCart(this.userid).subscribe( product => {this.productid = product

     for(product of this.productid)
     {
      this.pid.push(product.productid);
     }
  if(this.pid.length!=0){


  this.dataservice.getDataofId(this.pid).subscribe( result => { this.Cart = result 
    this.amount=0;
     for(let elem of this.Cart)
     {
        this.amount += +elem.price;
     }
  });}
  });
  });


  }

  emptyCart(){
    this.dataservice.deleteCart(this.userid).subscribe( res => {
      if(res){
      alert("cart empty");
      this.router.navigate(['main']);}
    });
    this.Cart=[];

  }


  checkout(){
    this.amount=0;
    alert("Items buying.....");
    for(let elem of this.Cart){
      let message= "Book "+elem.name+" of price : "+elem.price+" /- is requested by the user";
      let sender=this.userid;
      let userid=elem.userId;
      this.dataservice.addToMessage({
        'sender':+sender,
        'product':message,
        'userid':+userid
      }).subscribe( result => {

        if(result)
        alert("Owner is notified....");
        else
        alert("Error notifying the owner...");
      })
    }
    this.dataservice.deleteCart(this.userid).subscribe( res => {
      if(res){
      alert("Success");
      this.router.navigate(['main']);}
    });
    this.Cart=[];

  }

}
