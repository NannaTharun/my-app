  import { Component, OnInit } from '@angular/core';
  import { VechileService } from '../vechile.service';
  
  @Component({
    selector: 'app-vechiledata',
    templateUrl: './vechile.component.html',
    styleUrls: ['./vechile.component.css']
  })
  export class VechileComponent implements OnInit {
  
    public vehicles:any=[ ];
    public term:string='';
    public page:number=1;
    public column:string = "";
    public order:string = "";
  
    constructor( private _vehicleService:VechileService) {
  
      _vehicleService.getVehicles().subscribe(
        (data:any)=>{
          this.vehicles=data
    
        },
        (err:any)=>{
          alert('Internal server error')
        }
      )
  
     }
   

    ngOnInit(): void {
    }
   filter(){
    this._vehicleService.getfilterVehicles(this.term).subscribe(
      (data:any)=>{
         this.vehicles=data      
      },
      (err:any)=>{
        console.log("internal server error");
      }
    )
   }
   pagination(){
    this._vehicleService.getpageVehicles(this.page).subscribe(
      (data:any)=>{
        this.vehicles=data      
     },
     (err:any)=>{
       console.log("internal server error");
     }

    )
   }

   sort(){
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles=data      
     },
     (err:any)=>{
       console.log("internal server error");
     }

    )
   }

   delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully!!!");
        location.reload();
     },
     (err:any)=>{
       console.log("internal server error");
     }

    )
   }

  }

  