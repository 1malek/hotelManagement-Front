import { HotelbyregionComponent } from './components/hotelbyregion/hotelbyregion.component';
import { RestobyComponent } from './components/restoby/restoby.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RestobyambianceComponent } from './components/restobyambiance/restobyambiance.component';
import { ListetablerestoComponent } from './components/listetableresto/listetableresto.component';
import { HotelbyambianceComponent } from './components/hotelbyambiance/hotelbyambiance.component';
import { HotelbyetoileComponent } from './components/hotelbyetoile/hotelbyetoile.component';
import { DetaillehotelComponent } from './components/detaillehotel/detaillehotel.component';
import { FacturereservationComponent } from './components/facturereservation/facturereservation.component';
import { PaiementinterfaceComponent } from './components/paiementinterface/paiementinterface.component';
import { RestobyadresseComponent } from './components/restobyadresse/restobyadresse.component';
import { ListereservationComponent } from './components/listereservation/listereservation.component';
import { ListereservationRestoComponent } from './components/listereservation-resto/listereservation-resto.component';

const routes: Routes = [
  {path:'',component:LayoutComponent , children:[
    {path:'' , component:HomeComponent} ,
    {path:'login' , component:LoginComponent} ,
    {path:'restobycuisine' , component:RestobyComponent} ,
    {path:'restobyambiance' , component:RestobyambianceComponent} ,
    {path:'listetable/:id' , component:ListetablerestoComponent} ,
    {path:'hotelbyambiance' , component:HotelbyambianceComponent} ,
    {path:'hotelbyetoile' , component:HotelbyetoileComponent} ,
    {path:'byadresse' , component:HotelbyregionComponent}  ,
    {path:'detaillehotel/:id' , component:DetaillehotelComponent} ,
    {path:'facture/:id' , component:FacturereservationComponent} ,
    {path:'paiement' , component:PaiementinterfaceComponent} ,
    {path:'listereservationH', component:ListereservationComponent} , 
    {path:'restobyadresse' , component:RestobyadresseComponent} , 
    {path:'listereservresto' , component:ListereservationRestoComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
