import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsModule } from './brands/brands.module';
import { ClientModule } from './client/client.module';
import { VehicleModule } from './vehicles/vehicle.module';

const routes: Routes = [

  { path: 'brands', loadChildren: () => BrandsModule },
  { path: 'clients', loadChildren: () => ClientModule },
  { path: 'vehicles', loadChildren: () => VehicleModule }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
