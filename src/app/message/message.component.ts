import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
Messages:Array<Object>;
 // currentuser;
  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit() {
    // this.dataservice.getcurrentuser().subscribe( user => {this.currentuser =user[0].id});
    this.dataservice.getMessage().subscribe( result => {this.Messages=result

      if(result){
     this.Messages.sort(function (a:Object,b:Object) {
       return (b.createdAt > a.createdAt)
     })}else{
       alert("Messages Empty");
     }

    })
  }

emptyMessage(){
  this.dataservice.deleteMessages().subscribe(
    result=>{
      if(result){
        alert('Messages cleared');
        this.router.navigate(['main']);
      }
    }
  )
  this.Messages=[];
}
}
