import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookinAddComponent } from './bookin-add/bookin-add.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

const routes: Routes = [

  { path: 'list', component: BookingListComponent },
  { path: 'add', component: BookinAddComponent },
  { path: 'detail', component: BookinAddComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }