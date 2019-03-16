import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DepotListComponent } from './depot-list/depot-list.component';

const routes: Routes = [

  { path: 'list', component: DepotListComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepotRoutingModule { }