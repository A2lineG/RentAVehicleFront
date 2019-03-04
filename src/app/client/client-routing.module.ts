import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

const routes: Routes = [

  { path: 'list', component: ClientsListComponent },
  { path: 'detail', component: ClientDetailComponent },
  { path: 'add', component: ClientAddComponent },
  { path: 'update', component: ClientUpdateComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
