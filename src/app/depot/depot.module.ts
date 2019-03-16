import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotListComponent } from './depot-list/depot-list.component';
import { DepotRoutingModule } from './depot-routing.module';
import { DesignModule } from '../design.module';


@NgModule({
  declarations: [
    DepotListComponent
  ],

  imports: [
    CommonModule, 
    DepotRoutingModule,      
    DesignModule 
  ]
})
export class DepotModule { }
