import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DepotDTO, BookingClient, VehicleDTO, OptionBookingDTO, OptionVehicleDTO, BookingDTO, DepotClient, VehicleClient, OptionBookingClient, OptionBookingBookingDTO, OptionVehicleVehicleDTO } from '../../../api/Api';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatStepper, MatStepperNext } from '@angular/material/stepper';
import { error } from '@angular/compiler/src/util';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookin-add',
  templateUrl: './bookin-add.component.html',
  styleUrls: ['./bookin-add.component.css']
})
export class BookinAddComponent implements OnInit {

  bookingDtoToSend: BookingDTO = new BookingDTO();
  isLinear = true;
  formAddDate: FormGroup;
  vehicleList: Array<VehicleDTO>;   
  optionBookingList: Array<OptionBookingDTO>;
  depotList: Array<DepotDTO>;
   

  constructor(
    private bookingService: BookingClient,
    private vehicleService: VehicleClient,   
    private optionBookingService: OptionBookingClient,
    private depotService: DepotClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {     
  }

  ngOnInit() {    
    this.formAddDate = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      depot: ['', Validators.required],      
    },
     {validator: this.checkDates('startDate', 'endDate')});    
    
    this.depotService.getDepotList().subscribe(
      value => {
        this.depotList = value.sort((a,b) => a.name.localeCompare(b.name) );
      }
    )

    this.optionBookingService.getOptionBookingList().subscribe(     
      value => {
        this.optionBookingList = value;        
      }
    )
  }

  getTotalPrice() {
    if(!this.bookingDtoToSend.vehicle) return 0;

    var totalPrice = this.bookingDtoToSend.vehicle.model.price;

    if(!this.bookingDtoToSend.optionBookingBookings) return totalPrice;

    this.bookingDtoToSend.optionBookingBookings.forEach(booking => {
      if(booking.optionBooking.isFixedPrice) {
        totalPrice += booking.optionBooking.priceValue;
      } else {
        totalPrice += booking.optionBooking.priceValue * this.bookingDtoToSend.vehicle.model.price;
      }
    });

    return totalPrice;
  }

  getVehicleAvailable() {
    this.vehicleService.getVehicleListByDate(this.formAddDate.value['startDate'], this.formAddDate.value['endDate']).subscribe(
      value => {
        this.vehicleList = value.sort();
      }
    ) 
  }

  //*******************************************************************************
  selectVehicle(vehicle: VehicleDTO, stepper: MatStepper) {     
    this.bookingDtoToSend.vehicle = vehicle;

    stepper.next();
  } 

  validate(optionBookingList) {
    this.selectOptionBooking(optionBookingList.map(x => x.value));
    
    this.addBooking();
  }

  selectOptionBooking(optionList: Array<OptionBookingDTO>){
    this.bookingDtoToSend.optionBookingBookings = new Array<OptionBookingBookingDTO>();

    optionList.forEach(element => {
      var optionBookingBooking = new OptionBookingBookingDTO();
      optionBookingBooking.optionBooking = element;

      this.bookingDtoToSend.optionBookingBookings.push(optionBookingBooking);
    });
  }

  //PUSH*******************************************************************************
  public addBooking(){

    this.bookingDtoToSend.startDate = this.formAddDate.value['startDate'];
    this.bookingDtoToSend.endDate = this.formAddDate.value['endDate'];  
    this.bookingDtoToSend.depot = this.formAddDate.value['depot'];  
    
    this.bookingService.addBooking(this.bookingDtoToSend).subscribe(
      success => {
        this.toastr.success("La réservation a bien été enregistrée", ":D !");
        this.router.navigate(['/bookings/list']);
      },
      error => {
        console.log(error);
        this.toastr.error(error.message, ":/ !");
      } 
    );
  }

  // ***************************************************************************************
  checkDates(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value  ) {
        return {
          dates: "La date de départ doit être inferieur à la date d'arrivée."
        };
      }
      return {};
    }
}

}
