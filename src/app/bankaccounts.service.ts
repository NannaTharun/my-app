import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankaccountsService {

  constructor(private _httplClient:HttpClient) {}

  getAccounts():Observable<any>{
     return this._httplClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  getfilteredAccounts(term:string):Observable<any>{
    return this._httplClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals="+term);
  }
  

  getpagedAccoungts(page:number):Observable<any>{
    return this._httplClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals="+page);
  }

  getsortedAccounts(column:string,order:string):Observable<any>{
     return this._httplClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order"+order);
  }

  createaccounts(data:any){
    return this._httplClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
  }

  deleteaccounts(id:string){

     return this._httplClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
}
