import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientClient, ClientDTO } from '../../../api/Api';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  id: string;
  client: ClientDTO = new ClientDTO();

   displayedColumns: string[] = ['surname', 'firstname', 'driverLicenseNumber', 'birthDate', 'email'];

  constructor(private route: ActivatedRoute, private clientService: ClientClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id) {

        this.clientService.getClientDetail(this.id).subscribe(
          result => {
            this.client = result;
          }
        )

      }

    });
  }

}
