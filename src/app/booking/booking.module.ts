import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookinAddComponent } from './bookin-add/bookin-add.component';
import { DesignModule } from '../design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';

@NgModule({
  declarations: [
    BookingListComponent,
    BookinAddComponent
  ],
  
  imports: [
    CommonModule,
    BookingRoutingModule,
    DesignModule
  ]
})
export class BookingModule { }
