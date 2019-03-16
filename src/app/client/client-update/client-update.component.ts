import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientClient, ClientDTO } from '../../../api/Api';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  
  id: string;
  client: ClientDTO;
  form: FormGroup;
  
  constructor(
    private clientService: ClientClient, 
    private formBuilder : FormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    private toastr: ToastrService
  ) 
    { 
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      birthDate: [''],
      driverLicenseNumber: [''],      
      email: ['', Validators.email],
      password: ['']
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id) {

        this.clientService.getClientDetail(this.id).subscribe(
          result => {
            
            this.client = result;

            this.form.patchValue({
              firstName: result.firstName,
              surname: result.surname,
              birthDate: result.birthDate,
              driverLicenseNumber: result.driverLicenseNumber,
              email: result.email,
              password: result.password
            })

          }
        )

      }

    });
  }

  public updateClient() {
    if(this.form.valid) {
      
      this.client.firstName = this.form.value['firstName'],
      this.client.surname = this.form.value['surname'],
      this.client.birthDate= this.form.value['birthDate'],
      this.client.driverLicenseNumber= this.form.value['driverLicenseNumber'],
      this.client.email= this.form.value['email'],
      this.client.password= this.form.value['password']

      this.clientService.upDateClient(this.client).subscribe(
        result => {
          this.toastr.success("L'utilisateur a correctement été modifié","Success !")
          this.router.navigate(['clients', 'list']);
        },
        error => {
          this.toastr.error("update n'a pas fonctionné","erreur")
        }
        
      );
    }
    else {
      console.log("add client invalid !!");
    }
  }

}
