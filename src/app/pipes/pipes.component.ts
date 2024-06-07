import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string = 'aaaa';
  public city:string = 'BBBB';

  public today:any = new Date();

  public user:any = {name:"tharun",age:20};

  public amount:number = 200;

  constructor() { }

  ngOnInit(): void {
  }

}
