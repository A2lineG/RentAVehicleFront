import { Component, OnInit } from '@angular/core';
import { DepotDTO, DepotClient } from '../../../api/Api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot-list',
  templateUrl: './depot-list.component.html',
  styleUrls: ['./depot-list.component.css']
})
export class DepotListComponent implements OnInit {
  
  depotList: Array<DepotDTO> = new Array<DepotDTO>();

  displayedColumns: string[] = ['name', 'city', 'address'];

  constructor(private DepotService: DepotClient, private router: Router) {

   }  

  ngOnInit() {
    this.DepotService.getDepotList().subscribe(
      value => {
        this.depotList = value;
      }
    )
  }

  getdepotList() {
    this.router.navigate(['depots', 'list']);
  }

}
