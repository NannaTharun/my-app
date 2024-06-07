import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public names:string[] = [];
  public name:string ="";

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    this.names.push(this.name);
    this.name = "";
  }

  delete(i:number){
    this.names.splice(i,1);
  }

  deleteLast(){
    this.names.pop();
  }

  ascendingorder(){
    this.names=this.names.sort();
  }

  discendingorder(){
    this.names=this.names.sort().reverse();
  }

  salutation(){
    this.names=this.names.map(name=>"mr."+name);
  }

}
