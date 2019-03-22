import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsModule } from './brands/brands.module';
import { ClientModule } from './client/client.module';
import { VehicleModule } from './vehicles/vehicle.module';
import { DepotModule } from './depot/depot.module'; 
import { ModelModule } from './model/model.module';
import { BookingModule } from './booking/booking.module';
import { ContactFormComponent } from './layout/contact-form/contact-form.component';

const routes: Routes = [
  { path: 'brands', loadChildren: () => BrandsModule },
  { path: 'clients', loadChildren: () => ClientModule },
  { path: 'vehicles', loadChildren: () => VehicleModule },
  { path: 'depots', loadChildren: () => DepotModule },
  { path: 'models', loadChildren: () => ModelModule },
  { path: 'bookings', loadChildren: () => BookingModule },
  { path: 'contacts', component: ContactFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
