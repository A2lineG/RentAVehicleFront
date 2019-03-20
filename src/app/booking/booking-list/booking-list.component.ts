import { Component, OnInit } from '@angular/core';
import { BookingDTO, BookingClient } from '../../../api/Api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookingList: Array<BookingDTO> = new Array<BookingDTO>();
  displayedColumns: string[] = ['number', 'startDate', 'endDate', 'totalPrice'];

  constructor(
    private BookingService: BookingClient,
    private router: Router) {    
   }

  ngOnInit() {
    this.BookingService.getBookingList().subscribe(
      value => {
        this.bookingList = value;
      }
    )
  }

}
