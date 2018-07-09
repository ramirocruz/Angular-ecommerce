import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
Books;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(data => {
      this.Books = data;
      console.log(data);
    })
  }

}
