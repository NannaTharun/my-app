import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public name:string = '';
  public marks:number =0;
  public fee:number =0;

  public students:any = [
    {name:'keerthi',marks:'95',fee:'50000'},
    {name:'tharun',marks:'99',fee:'70000'},
    {name:'lavanya',marks:'35',fee:'90000'},
    
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    let student:any = {
      name:this.name,
      marks:this.marks,
      fee:this.fee,
    }

    this.students.push(student);
    this.name='';
    this.marks=0;
    this.fee=0 ;
  }

}
