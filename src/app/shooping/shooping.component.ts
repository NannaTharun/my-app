import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooping',
  templateUrl: './shooping.component.html',
  styleUrls: ['./shooping.component.css']
})
export class ShoopingComponent implements OnInit {

  public name:string="";
  public price:number=0;
  public rating: number=0;
  public sno:number=0;
  public freedelivery: boolean | undefined;



  public products:any=[
    {sno:'1', name:'pen', price:'20',rating:'3', freedelivery:'true', } ,
    {sno:'2', name:'pencil', price:'10',rating:'4', freedelivery:'true', } ,
    {sno:'3', name:'shirt', price:'500',rating:'5', freedelivery:'false', } ,
    {sno:'4', name:'phone', price:'6000',rating:'4', freedelivery:'true', } ,
    {sno:'5', name:'laptop', price:'20000',rating:'2', freedelivery:'false', } ,
    {sno:'6', name:'cap', price:'100',rating:'3', freedelivery:'true', } 
  ]


  constructor() { }

  ngOnInit(): void {
  }
  addcart(){
    let product:any={
      sno:this.sno,
      name:this.name,
      price:this.price,
      rating:this.rating,
      freedelivery:this.freedelivery,

    }
    this.products.push(product);
    this.name="";
    this.price=0;
    this.rating=0;

  }
  delete(i:number){
    this.products.splice(i,1);
  }

}
