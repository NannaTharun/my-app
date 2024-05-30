import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {


  public radius:number=0;
  public result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result=Math.PI*(this.radius*this.radius);
  }

  perimeter(){
    this.result=2*Math.PI*(this.radius);
  }

}
