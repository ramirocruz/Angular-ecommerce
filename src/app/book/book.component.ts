import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
element;
currentuser;
  constructor(private dataservice:DataService,private route:ActivatedRoute) {
  this.route.params.subscribe( params => this.element = params.id );
  }

  ngOnInit() {
 this.dataservice.getDataDetails(this.element).subscribe(
   result => { this.element = result[0]
this.dataservice.getcurrentuser().subscribe( user => {this.currentuser=user});
   }
 )
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


}
