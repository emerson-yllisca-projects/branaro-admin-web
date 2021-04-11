import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';

 

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    AppRoutingModule
  ],exports:[
    DashboardComponent,
    PagesComponent,
  ]
})
export class PagesModule { }
