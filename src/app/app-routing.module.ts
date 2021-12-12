import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  { path: 'orderStatus', component: OrderstatusComponent},
//  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
