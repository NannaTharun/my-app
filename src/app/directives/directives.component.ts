import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public ages:number[] = [10,20,30,40,50];

  public states: string []=['Ts','Ap','Kerala','Mp']

  public products:any = [
    {name:'pen', price:'20', rating:'3'},
    {name:'phone', price:'25000', rating:'2'},
    {name:'shirt', price:'2000', rating:'4'},
    {name:'pencil', price:'50', rating:'5'},

  ]

  public companies: any = [
    {name:'a' , company:'tcs',experience:'3'}, 
    {name:'b' , company:'dell',experience:'4'}, 
    {name:'c' , company:'wipro',experience:'5'}, 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
