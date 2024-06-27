import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestoserviceService } from 'src/app/services/restoservice.service';

@Component({
  selector: 'app-restobyadresse',
  templateUrl: './restobyadresse.component.html',
  styleUrls: ['./restobyadresse.component.css']
})
export class RestobyadresseComponent implements OnInit {
  cuisine:any ;
  listresto:any ;
  currentuser : any  ;
  currentuseItem = localStorage.getItem('currentuser') ;
  status = localStorage.getItem('status') ;
  constructor(private route:ActivatedRoute ,private restoservice:RestoserviceService  ) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;


    this.route.queryParams.subscribe(params => {
      this.cuisine = params['ambiance'];
this.findbyadresse() ;
    });
  }

  ngOnInit(): void {
  }

  findbyadresse(){
this.restoservice.getbyadresse(this.cuisine).subscribe((data)=>{
  this.listresto =data ;
})
  }

}
