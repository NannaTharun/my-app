import { Component, Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventComponent } from './event/event.component';
import { StudentComponent } from './student/student.component';
import { CarComponent } from './car/car.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShoopingComponent } from './shooping/shooping.component';
import { VechileComponent } from './vechile/vechile.component';
import { CreateVechileComponent } from './create-vechile/create-vechile.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { CreateBankaccountsComponent } from './create-bankaccounts/create-bankaccounts.component';
import { AuthenticationGuard } from './authentication.guard';
// import { FilpkartComponent } from './filpkart/filpkart.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'datab',component:DatabindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'circle',component:CircleComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'BMI',component:BmiComponent},
    {path:'Directives',component:DirectivesComponent},
    {path:'event',component:EventComponent},
    {path:'student',component:StudentComponent},
    {path:'car',component:CarComponent},
    {path:'pipes',component:PipesComponent},
    {path:'shopping',component:ShoopingComponent},
    {path:'vechile',component:VechileComponent},
    {path:'createvechile',component:CreateVechileComponent},
    {path:'bankaccounts',component:BankaccountsComponent},
    {path:'createbankaccount',component:CreateBankaccountsComponent}
    //{path:'Filpkart',component:FilpkartComponent}
  ]},
  {path:'', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
