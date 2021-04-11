import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideabrComponent } from './sideabr/sideabr.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SideabrComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    SideabrComponent,
    RouterModule
  ]
})
export class SharedModule { }
