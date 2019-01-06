import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsModule } from './brands/brands.module';

const routes: Routes = [

  { path: 'brands', loadChildren: () => BrandsModule }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
