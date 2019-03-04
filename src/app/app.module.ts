import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DesignModule } from './design.module';

import { AppRoutingModule } from './app-routing.module';
import { BrandsModule } from './brands/brands.module';
import { ClientModule } from './client/client.module';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleModule } from './vehicles/vehicle.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,    
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DesignModule,
    BrandsModule,
    ClientModule,
    VehicleModule
  ],

  exports: [
    DesignModule,
    ReactiveFormsModule
  ],

  providers: [
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
