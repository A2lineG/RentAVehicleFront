import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ModelListComponent } from './model-list/model-list.component';
import { ModelAddComponent } from './model-add/model-add.component';

const routes: Routes = [

  { path: 'list', component: ModelListComponent },
  { path: 'add', component: ModelAddComponent },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }