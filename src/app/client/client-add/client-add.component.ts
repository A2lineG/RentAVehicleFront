import { Component, OnInit } from '@angular/core';
import { ClientClient, Client } from '../../../api/Api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  form: FormGroup;
  newClient: Client = new Client();

  constructor(private clientServe: ClientClient, private formBuilder : FormBuilder) { 
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: [''],
      driverLicenseNumber: [''],      
      email: ['', Validators.email],
      password: ['']
    })
  }

  ngOnInit() {

  }

  public addClient() {
    console.log("add client !");
  }

}
