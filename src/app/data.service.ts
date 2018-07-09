import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('/api/listings');
  }
  getcurrentuser(){
    return this.http.get('api/currentuser');
  }
  getDataDetails(id:string){
    return this.http.get('/api/listings/'+id);
  }
  getDataofId(userids:Array<number>){
    return this.http.post('/api/listings/var',userids);
  }
  getCart(userid:string){
    return this.http.get('api/cart/'+userid);
  }
  getWishlist(userid:string){
    return this.http.get('api/wishlist/'+userid);
  }
  deleteCart(userid:string){
    return this.http.get('api/cart/delete/'+userid);
  }
  deleteWishlist(userid:string){
    return this.http.get('api/wishlist/delete/'+userid);
  }
  addToCart(data){
    return this.http.post('api/cart',data);
  }
  addToWishlist(data){
    return this.http.post('api/wishlist',data);
  }
}
