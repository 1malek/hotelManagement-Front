import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-restobyambiance',
  templateUrl: './restobyambiance.component.html',
  styleUrls: ['./restobyambiance.component.css']
})
export class RestobyambianceComponent implements OnInit {
  id = this.route.snapshot.params['id'] ;
  restaurantlist:any ;
  ambiance :any;
  currentuser : any  ;
  currentuseItem = localStorage.getItem('currentuser') ;
  status = localStorage.getItem('status') ;
  constructor(private route:ActivatedRoute
     , private restoservice:RestoserviceService) {
      this.status = JSON.parse(this.status) ;
      this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;

      this.route.queryParams.subscribe(params => {
        this.ambiance = params['ambiance'];
       this.findbyambiance() ;
      });
      }

  ngOnInit(): void {
    this.findbyambiance() ;
  }
  findbyambiance(){
     this.restoservice.getbyambiance(this.ambiance).subscribe((data)=>{
      this.restaurantlist = data ;
     })
  }

}
