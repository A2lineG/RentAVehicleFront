import { Component, OnInit } from '@angular/core';
import { ClientClient, ClientDTO } from '../../../api/Api';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  
  clientList: Array<ClientDTO> = new Array<ClientDTO>();  
  
  displayedColumns: string[] = ['surname', 'firstName', 'birthDate', 'detail', 'update','delete'];

  //je voulais boucler dans getClientList ? mais rale cette pute
  dataSource = new MatTableDataSource(this.clientList);
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();    
  } 

  constructor(private clientService: ClientClient, private router: Router) {    
   }

  ngOnInit() {
    this.clientService.getClientList().subscribe(
      value => {
        this.clientList = value;
      }
    )
  }

  getClientList() {
    this.router.navigate(['clients', 'list']);
  }

  getDetail(id: string) {
    this.router.navigate(['clients', 'detail', id]);
  }

  delete(id: string) {
    this.clientService.deleteClient(id).subscribe(
      result => {
        
      }
    )

    this.router.navigate(['clients', 'list']);
  }

  update(id: string) {
    this.router.navigate(['clients', 'update', id]);
  }

}
