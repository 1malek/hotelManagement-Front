import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AllrestoComponent } from './components/allresto/allresto.component';
import { RestobyComponent } from './components/restoby/restoby.component';
import { RestobyambianceComponent } from './components/restobyambiance/restobyambiance.component';
import { ListetablerestoComponent } from './components/listetableresto/listetableresto.component';
import { HotelbyambianceComponent } from './components/hotelbyambiance/hotelbyambiance.component';
import { HotelbyetoileComponent } from './components/hotelbyetoile/hotelbyetoile.component';
import { HotelbyregionComponent } from './components/hotelbyregion/hotelbyregion.component';
import { DetaillehotelComponent } from './components/detaillehotel/detaillehotel.component';
import { FacturereservationComponent } from './components/facturereservation/facturereservation.component';
import { PaiementinterfaceComponent } from './components/paiementinterface/paiementinterface.component';
import { RestobyadresseComponent } from './components/restobyadresse/restobyadresse.component';
import { ListereservationComponent } from './components/listereservation/listereservation.component';
import { ListereservationRestoComponent } from './components/listereservation-resto/listereservation-resto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    AllrestoComponent,
    RestobyComponent,
    RestobyambianceComponent,
    ListetablerestoComponent,
    HotelbyambianceComponent,
    HotelbyetoileComponent,
    HotelbyregionComponent,
    DetaillehotelComponent,
    FacturereservationComponent,
    PaiementinterfaceComponent,
    RestobyadresseComponent,
    ListereservationComponent,
    ListereservationRestoComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule ,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
