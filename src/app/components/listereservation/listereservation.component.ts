import { Component, OnInit } from '@angular/core';
import { ReservationserviceService } from 'src/app/services/reservationservice.service';

@Component({
  selector: 'app-listereservation',
  templateUrl: './listereservation.component.html',
  styleUrls: ['./listereservation.component.css']
})
export class ListereservationComponent implements OnInit {
  allhotels:any ; 
  currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private reservationservice:ReservationserviceService) { 
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }

  ngOnInit(): void {
    this.getall() ; 
  }
getall(){
  this.reservationservice.listereservhotel(this.currentuser.id).subscribe((data)=>{
    this.allhotels = data ; 
  })
}
}
