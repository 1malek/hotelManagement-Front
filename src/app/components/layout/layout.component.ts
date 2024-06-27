import { Router } from '@angular/router';
import { RestoserviceService } from './../../services/restoservice.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;
status = JSON.parse(  localStorage.getItem('status')) ;
allresto:any ;

  constructor(private restoservice:RestoserviceService , private router:Router) {
    this.status = JSON.parse(this.status) ;
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;

   }

  ngOnInit(): void {
    this.findall() ;
  }

  findall(){
    this.restoservice.findall().subscribe((data)=>{
this.allresto = data ;
    })  }


    Logout(){
      localStorage.removeItem('currentuser')  ;
      localStorage.setItem('status' , '0') ;
      this.router.navigateByUrl('/login') ;

    }
}
