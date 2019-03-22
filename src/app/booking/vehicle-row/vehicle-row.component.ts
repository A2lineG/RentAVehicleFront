import { Component, OnInit } from '@angular/core';
import { VehicleDTO } from '../../../api/Api';
import { Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-row',
  templateUrl: './vehicle-row.component.html',
  styleUrls: ['./vehicle-row.component.css']
})
export class VehicleRowComponent implements OnInit {

  @Input() vehicle: VehicleDTO;
  constructor() { }

  ngOnInit() {
  }

}
