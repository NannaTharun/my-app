import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-create-vechile',
  templateUrl: './create-vechile.component.html',
  styleUrls: ['./create-vechile.component.css']
})
export class CreateVechileComponent implements OnInit {

  public vechileForm:FormGroup = new FormGroup({
    vechile: new FormControl(),
    manufacture: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl()
  })

  constructor(private _vechileService:VechileService) { }

  ngOnInit(): void {
  }

  create(){
    console.log(this.vechileForm);
    this._vechileService.createVehicle(this.vechileForm.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!")
      },
      (err:any)=>{
        alert("creation failed");
      }
    )
  }

}
