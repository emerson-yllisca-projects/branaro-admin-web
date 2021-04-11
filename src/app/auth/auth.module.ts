import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    FormsModule,
    HttpClientModule
  ],exports:[
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
