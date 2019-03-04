import { Component, OnInit } from '@angular/core';
import { BrandClient, BrandDTO } from '../../../api/Api';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css']
})
export class BrandlistComponent implements OnInit {

  
  brandList : BrandDTO[];

  constructor(private brandClient: BrandClient) { }
  
  ngOnInit() {

    // this.brandList = this.brandClient.getBrandList()

    this.brandClient.getBrandList().subscribe(
      // Récupération des données
      list => {
        console.log(list);
        this.brandList = list;
      },
      // En cas d'erreur 
      () => { 
        console.log("Erreur ! API getBrandList");
      },
      // Une fois l'opération terminée
      () => {
        console.log("API getBrandList complètement récupérée");
      }
    )

  } 

}
