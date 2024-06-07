import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventComponent } from './event/event.component';
import { StudentComponent } from './student/student.component';
import { CarComponent } from './car/car.component';
import { DiesComponent } from './dies/dies.component';
import { PipesComponent } from './pipes/pipes.component';
import { BalancePipe } from './balance.pipe';
import { ShoopingComponent } from './shooping/shooping.component';
import { VechileComponent } from './vechile/vechile.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateVechileComponent } from './create-vechile/create-vechile.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { CreateBankaccountsComponent } from './create-bankaccounts/create-bankaccounts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DatabindingComponent,
    HomeComponent,
    CalculatorComponent,
    CircleComponent,
    RectangleComponent,
    BmiComponent,
    DirectivesComponent,
    EventComponent,
    StudentComponent,
    CarComponent,
    DiesComponent,
    PipesComponent,
    BalancePipe,
    ShoopingComponent,
    VechileComponent,
    CreateVechileComponent,
    BankaccountsComponent,
    CreateBankaccountsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
