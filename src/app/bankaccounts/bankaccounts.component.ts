import { Component, OnInit } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent implements OnInit {

  public accounts: any=[];
  public term:string="";
  public page:string="number=1";
  public column:string="";
  public order:string="";
ngOnInit(): void {
  
}

  constructor(private _AccountsService:BankaccountsService) { 
    _AccountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("serve error");
      });
    }

    filter(){
      this._AccountsService.getfilteredAccounts(this.term).subscribe(
        (data:any)=>{
          this.accounts=data;
        },
        (err:any)=>{
          console.log("internal serve error")
        });
      
    }
    pagination(){
      this.accounts.getpagedAccoungts(this.page).subscribe(
        (data:any)=>{
          this.accounts=data;
        },
        (err:any)=>{
          console.log("internal serve error")
        });

  
      
    }
    sort(){
      this.accounts.getsortedAccounts(this.sort).subscribe(
        (data:any)=>{
          this.accounts=data;
        },
        (err:any)=>{
          console.log("internal server error");
        }
      )
    }

    delete(id:string){
      this. _AccountsService.deleteaccounts(id).subscribe(
        (data:any)=>{
          alert("deleted siccessfully!!!");
        },
        (err:any)=>{
          alert("internal server error");
        },
        
      )
    }

}
