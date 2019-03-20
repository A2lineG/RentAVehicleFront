import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelClient, ModelDTO } from '../../../api/Api';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'displacement', 'price', 'brand'];
  modelList: Array<ModelDTO> = new Array<ModelDTO>();

  constructor(
    private ModelService: ModelClient,
    private router: Router) {
   }

  ngOnInit() {
    this.ModelService.getModelList().subscribe(
      value => {
        this.modelList = value;        
      }
    )
  }

}
