import { Directive, NgModule } from '@angular/core';
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

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'datab',component:DatabindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'circle',component:CircleComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'BMI',component:BmiComponent},
    {path:'Directives',component:DirectivesComponent,}
  ]},
  {path:'', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
