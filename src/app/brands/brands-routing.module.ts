import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandlistComponent } from './brandlist/brandlist.component';

const routes: Routes = [

  { path: 'list', component: BrandlistComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
