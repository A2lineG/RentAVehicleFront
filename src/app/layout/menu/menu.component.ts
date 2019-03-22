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
        items: [
          {
            label: 'Véhicule',            
            items: [
              {
                label: 'Liste des véhicules',
                routerLink: ['/vehicles/list']
              },

              {
                label: 'Créer un véhicule',
                routerLink: ['']
              },
            ]                         
          }, 

          {
            label: 'Marque',            
            items: [
              {
                label: 'Liste des marques',
                routerLink: ['/brands/list']
              },

              {
                label: 'Créer une marque',
                routerLink: ['']
              },
            ]                      
          },  

          {
            label: 'Modèle',            
            items: [
              {
                label: 'Liste des modèles',
                routerLink: ['']
              },

              {
                label: 'Créer un modèle',
                routerLink: ['']
              },
            ]                  
          },                     
        ],    
      },      
      {
        label: 'Client',
        items: [{
            label: 'Liste des clients',
            routerLink: ['/clients/list']
          },
          {
            label: 'Créer un client',
            routerLink: ['/clients/add']
          }]
      },


      {
        label: 'Dépôt',
        items: [{
          label: 'Liste des dépôts',
          routerLink: ['/depots/list']
        },  
        {
          label: 'Créer un dépôt',
          routerLink: ['']
        }]        
      },

      {
        label: 'Réservation',
        items: [{
          label: 'Liste des réservations',
          routerLink: ['/bookings/list']
        },
        {
          label: 'Nouvelle réservation',
          routerLink: ['/bookings/add']
        }]
      },    
      
      {
        label: 'Modèle',
        items: [{
          label: 'Liste des modèles',
          routerLink: ['/models/list']
        }]
                       
      },

      {
        label: 'Contact',  
        routerLink: ['/contacts']             
      },
     
      {
        label: 'Connexion',
      },
    ];
  }

}
