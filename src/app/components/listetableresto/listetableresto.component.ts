import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReservationserviceService } from 'src/app/services/reservationservice.service';
import { TableserviceService } from 'src/app/services/tableservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listetableresto',
  templateUrl: './listetableresto.component.html',
  styleUrls: ['./listetableresto.component.css']
})
export class ListetablerestoComponent implements OnInit {
  idresto = this.route.snapshot.params['id'] ;
  alltable:any ;
  idtable:any ;
  //createform:FormGroup  ;
  createform: FormGroup = new FormGroup({});
  currentuser : any  ;
  currentuseItem = localStorage.getItem('currentuser') ;
  nomtable:any ;
  constructor(private route:ActivatedRoute , private tableservice:TableserviceService , private reservtable:ReservationserviceService , private fb:FormBuilder) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
     this.getalltable() ;}

  ngOnInit(): void {
    this.getalltable() ;

    this.createform = this.fb.group({
      date:['', Validators.required] ,
      heurereserv:['',Validators.required] ,
      nbperssonne:['' , Validators.required] ,

    })
  }

  getalltable(
  ){
 this.tableservice.getavailable(this.idresto).subscribe((data)=>{
  this.alltable = data ;
 })
  }

  gettableid(f:any){
    this.idtable = f.id ;
    this.nomtable = f.nom  ;
  }
  createreserv(){
    let reservation = {
      date: this.createform.value.date ,
      heurereserv:this.createform.value.heurereserv ,
      nbperssonne: this.createform.value.nbperssonne,
      nbtable: this.nomtable
    }

    if(this.createform.invalid){
      Swal.fire({
        icon: 'error',
        title: 'error...',
        text: 'Remplire tous les champs!',

      })
      return ;
    } else {
      this.reservtable.createreservation(  this.currentuser.id , this.idtable , this.idresto , reservation).subscribe((data)=>{
        Swal.fire(
          'success!',
          'Enregistrer avec success!',
          'success'
        )
        this.createform.reset() ;
  this.getalltable() ;

      })
    }

  }


}
