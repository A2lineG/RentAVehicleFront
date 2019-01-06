import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandlistComponent } from './brandlist/brandlist.component';
import { BrandsRoutingModule } from './brands-routing.module';
import { BrandClient } from '../../api/Api';

@NgModule({
  declarations: [BrandlistComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule
  ],
  providers: [
    BrandClient
  ]
})
export class BrandsModule { }
