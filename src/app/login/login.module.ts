import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { NavComponent } from './nav/nav.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[
    NavComponent ]
})
export class LoginModule { 
}