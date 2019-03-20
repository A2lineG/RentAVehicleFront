import { Component, OnInit } from '@angular/core';
import { ClientClient, ClientDTO } from '../../../api/Api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  formulaireAddClient: FormGroup;
  formAddOptions: FormGroup;
  
  constructor(
    private clientService: ClientClient, 
    private formBuilder : FormBuilder,
    private router : Router) 
    {}

  ngOnInit() {
    this.formulaireAddClient = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      birthDate: [''],
      driverLicenseNumber: [''],      
      email: ['', Validators.email],
      password: ['']
    });

  
  }

  public addClient() {
    if(this.formulaireAddClient.valid) {
      var newClient = new ClientDTO({
        firstName: this.formulaireAddClient.value['firstName'],
        surname: this.formulaireAddClient.value['surname'],
        birthDate: this.formulaireAddClient.value['birthDate'],
        driverLicenseNumber: this.formulaireAddClient.value['driverLicenseNumber'],
        email: this.formulaireAddClient.value['email'],
        password: this.formulaireAddClient.value['password'],
      });

      this.clientService.addClient(newClient).subscribe(
        result => {
          this.router.navigate(['clients', 'list']);
        }
      );
    }
    else {
      console.log("add client invalid !!");
    }
  }

}
