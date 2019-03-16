import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelRoutingModule } from './model-routing.module';
import { DesignModule } from '../design.module';
import { ModelAddComponent } from './model-add/model-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModelListComponent,
    ModelAddComponent
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    DesignModule
  ]
})
export class ModelModule { }
