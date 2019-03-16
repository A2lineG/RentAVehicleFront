import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DepotDTO, BookingClient, VehicleDTO, OptionBookingDTO, OptionVehicleDTO, BookingDTO, VehicleClient } from '../../../api/Api';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-bookin-add',
  templateUrl: './bookin-add.component.html',
  styleUrls: ['./bookin-add.component.css']
})
export class BookinAddComponent implements OnInit {

  isLinear = false;
  formAddDate: FormGroup;
  vehicleList: Array<VehicleDTO>; 

  formAddOptions: FormGroup;
  OptionBookingList: Array<OptionBookingDTO>; 
  OptionVehicleList: Array<OptionVehicleDTO>;

  constructor(
    private bookingService: BookingClient,
    private vehicleService: VehicleClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {     
  }

  ngOnInit() {
    // Create form date
    this.formAddDate = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    // Create form option
    this.formAddOptions = this.formBuilder.group({

    })

    // Get model list
    this.vehicleService.getVehicleList().subscribe(
      value => {
        this.vehicleList = value;
      }
    )
  }

  public addBooking(){
    if(this.formAddDate.valid && this.formAddOptions.valid){
      var booking = new BookingDTO({
        startDate: this.formAddDate.value['startDate'],
        endDate: this.formAddDate.value['endDate'],
      })
    }
  }

}
