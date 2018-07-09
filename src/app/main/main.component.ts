import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // Products = [{ "id": 1, "name": "Pixel", "type": "mobile", "price": 20000,}, { "id": 2, "name": "Linen Jeans", "type": "clothes", "price": 2000}, { "id": 3, "name": "Mixer", "type": "electronic", "price": 1000,}, { "id": 4, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 5, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 6, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 7, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 8, "name": "Lenovo", "type": "computer", "price": 45000,}, { "id": 9, "name": "Lenovo", "type": "computer", "price": 45000, }, { "id": 10, "name": "Lenovo", "type": "computer", "price": 45000,}];
Products;
  constructor(private dataservice:DataService) {

}
  ngOnInit() {
    this.dataservice.getData().subscribe( data =>{ this.Products = data});
    this.dataservice.getcurrentuser().subscribe( data => {console.log(data) });
  }

}
