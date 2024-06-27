import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelserviceService } from 'src/app/services/hotelservice.service';

@Component({
  selector: 'app-hotelbyregion',
  templateUrl: './hotelbyregion.component.html',
  styleUrls: ['./hotelbyregion.component.css']
})
export class HotelbyregionComponent implements OnInit {
  ambiance :any;
  allhotels:any ;
  imagetable:any ;
  constructor(private route:ActivatedRoute , private hotelservice:HotelserviceService) {
    this.route.queryParams.subscribe(params => {
      this.ambiance = params['ambiance'];
      this.findbyambiance() ;
    });
  }

  ngOnInit(): void {
  }
  findbyambiance() {
    this.hotelservice.getbyadresse(this.ambiance).subscribe((data) => {
      this.allhotels = data;


      this.allhotels.forEach((hotel:any) => {
        this.hotelservice.getoneimage(hotel.id).subscribe((imageData) => {
          this.imagetable = imageData;

          console.log(this.imagetable.image)
        });
      });
    });
  }



}
