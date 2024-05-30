import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public age:number=20;
  public name:string="tharun";
  public isIndian:boolean=true;
  public isvalid:boolean=true;

  upload(){
    alert('uploaded sucessfully');

  }
  send(){
    alert('sent sucessfully');

  }
  change(){
    alert('sucessful');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
