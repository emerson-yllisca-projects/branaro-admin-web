import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {path: 'dashboard' , component: PagesComponent ,

  //canActivate:[AuthGuard], 
  children:[
    { path: '', component: DashboardComponent , data: {titulo: 'Dashboard'} },
  ]
}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
