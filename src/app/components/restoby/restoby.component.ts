import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-restoby',
  templateUrl: './restoby.component.html',
  styleUrls: ['./restoby.component.css']
})
export class RestobyComponent implements OnInit {
  id = this.route.snapshot.params['id'] ;

  currentuser : any  ;
  currentuseItem = localStorage.getItem('currentuser') ;
  status = localStorage.getItem('status') ;
  restaurantlist:any ;
  cuisine:any ;
  constructor(private route:ActivatedRoute , private restoservice:RestoserviceService) {
         this.status = JSON.parse(this.status) ;
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;


    this.route.queryParams.subscribe(params => {
      this.cuisine = params['cuisine'];
this.findbycuisine() ;
    });
  }

  ngOnInit(): void {


  }

findbycuisine(){
  this.restoservice.getbycuisine(this.cuisine).subscribe((data)=>{
    this.restaurantlist = data ;

  })
}
}
