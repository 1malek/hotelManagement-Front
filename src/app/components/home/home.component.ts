import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from 'src/app/services/hotelservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  currentuser : any  ;
  currentuseItem = localStorage.getItem('currentuser') ;
  status = localStorage.getItem('status') ;
  listehotels:any ;
  imagetable:any ;
  listevrai:any ;
  constructor(private hotelsservice:HotelserviceService) {
    this.status = JSON.parse(this.status!) ;
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
   }

  ngOnInit(): void {
    this.getallhotels() ;
  }

 

  getallhotels() {
    this.hotelsservice.getall().subscribe((data) => {
      this.listehotels = data;
      
      this.listevrai = this.listehotels.slice(0, 7);
  
      this.listevrai.forEach((hotel:any) => {
        this.hotelsservice.getoneimage(hotel.id).subscribe((imageData) => {
          hotel.imagetable = imageData;
  
          console.log(hotel.imagetable.image);
        });
      });
    });
  }
  

}
