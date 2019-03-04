import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [      
      {
          label: 'Véhicule',
          routerLink: ['/brands/brandlist'],
      },
      
      {
        label: 'Client',
        items: [{
          label: 'Consulter la liste des clients',
          routerLink: ['/clients/list']
        },
        {
          label: 'Ajouter',
          routerLink: ['/clients/add']
        },
        {
          label: 'Modifier',
          routerLink: ['/clients/update']
        },        
        ]
      },

      {
        label: 'Réservation',
      },

      {
        label: 'Contact',               
      },
     
      {
        label: 'Connexion',
      },
    ];
  }

}
