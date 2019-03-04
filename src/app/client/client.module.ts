import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientRoutingModule } from './client-routing.module';
import { DesignModule } from '../design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientClient } from '../../api/Api';

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientDetailComponent, 
    ClientAddComponent, 
    ClientUpdateComponent, 
    ClientDeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesignModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
