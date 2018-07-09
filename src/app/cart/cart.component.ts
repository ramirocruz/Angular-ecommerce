import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Cart = [{ "id": 1, "name": "Pixel", "type": "mobile", "price": 20000,}, { "id": 2, "name": "Linen Jeans", "type": "clothes", "price": 2000}, { "id": 3, "name": "Mixer", "type": "electronic", "price": 1000,}, { "id": 4, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 5, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 6, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 7, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 8, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 9, "name": "Lenovo", "type": "computer", "price": 45000, }, { "id": 10, "name": "Lenovo", "type": "computer", "price": 45000,}];

  constructor() {
    // this.
}
  ngOnInit() {

  }

}
