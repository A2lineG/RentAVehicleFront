import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookinAddComponent } from './bookin-add/bookin-add.component';
import { DesignModule } from '../design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { ArraySortPipe } from '../pipes/sort-pipe';

@NgModule({
  declarations: [
    BookingListComponent,
    BookinAddComponent,
    BookingDetailComponent,
    ArraySortPipe
  ],
  
  imports: [
    CommonModule,
    BookingRoutingModule,
    DesignModule
  ]
})
export class BookingModule { }
