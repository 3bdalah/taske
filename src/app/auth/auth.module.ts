import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {    } from '@angular/fire/auth';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    
ReactiveFormsModule,

  ]
})
export class AuthModule { }
