import { Component, OnInit } from '@angular/core';
import { ReservationserviceService } from 'src/app/services/reservationservice.service';

@Component({
  selector: 'app-listereservation-resto',
  templateUrl: './listereservation-resto.component.html',
  styleUrls: ['./listereservation-resto.component.css']
})
export class ListereservationRestoComponent implements OnInit {
  allreserv:any ; 
  currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private reservationservice:ReservationserviceService) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
   }

  ngOnInit(): void {
    this.getall() ; 
  }

getall(){
  this.reservationservice.listereservresto(this.currentuser.id).subscribe((data)=>{
    this.allreserv = data ; 
  })
}
}
