import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup = new FormGroup({
    email: new FormControl(),
    password:new FormControl()
  })

  constructor(private _loginService:LoginService, private _router: Router) {

   }

  ngOnInit(): void {
  }

  login(){
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login successfully!!!")
        //token store
        sessionStorage.setItem("my-app-token",data.token);
        //got to dashboard
        this._router.navigateByUrl('/dashboard')
      },
      (data:any)=>{
        alert("invalid credentails!!!");
      }
    )
  }

}
