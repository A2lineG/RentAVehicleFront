import { Component, OnInit } from '@angular/core';
import { ModelClient, Model, ModelDTO, BrandDTO, ClientClient, BrandClient } from '../../../api/Api';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {

formAddModel: FormGroup;
brandList: Array<BrandDTO>;

  constructor(
    private modelService: ModelClient,
    private brandService: BrandClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ){}

  ngOnInit() {
    this.formAddModel = this.formBuilder.group({
      name: [''],
      displacement: [''],
      weight: [''],
      price: [''],
      increasePrice: [''],
      distanceMax: [''],
      brand: [''],
    });

    this.getBrand();
  }

  public addModel(){
    if(this.formAddModel.valid){
      var model = new ModelDTO({
        name: this.formAddModel.value['name'],
        displacement: this.formAddModel.value['displacement'],
        weight: this.formAddModel.value['weight'],
        price: this.formAddModel.value['price'],
        increasePrice: this.formAddModel.value['increasePrice'],
        distanceMax: this.formAddModel.value['distanceMax'],
        brand: this.formAddModel.value['brand']
      });

      console.log(model);
      this.modelService.insertModel(model).subscribe(
        success => {
          this.toastr.success("Le modèle a bien été enregistrée", "YEAAAH !");
        },
        error => {
          this.toastr.error("Oups, une erreur est survenue ...", "Erreur ...");
        }
      );
    }

  }

  public getBrand(){
    this.brandService.getBrandList().subscribe(
      value => {
        this.brandList = value;
      }
    )
  }


}
