import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { DepotComponent } from './depot/depot.component';
import { DepotListComponent } from './depot/depot-list/depot-list.component';

@NgModule({
  declarations: [
    VehicleListComponent,
    DepotComponent,
    DepotListComponent],
    
  imports: [
    CommonModule
  ]
})
export class VehicleModule { }
