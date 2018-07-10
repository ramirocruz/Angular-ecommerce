import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
element;
currentuser;
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) {
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
      
      if(this.currentuser){
      let id=event.currentTarget.parentNode.parentNode.parentNode.id;
      this.dataservice.addToCart({productid:id,userid:this.currentuser[0].id}).subscribe(
        result => {if(result)
          { alert("Item added to Cart");
           this.router.navigate(['cart']);
         }else{
           alert("Something went wrong");
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
