import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreserviceService } from 'src/app/services/chambreservice.service';
import { HotelserviceService } from 'src/app/services/hotelservice.service';
import { ReservationserviceService } from 'src/app/services/reservationservice.service';

@Component({
  selector: 'app-detaillehotel',
  templateUrl: './detaillehotel.component.html',
  styleUrls: ['./detaillehotel.component.css']
})
export class DetaillehotelComponent implements OnInit {
allimages:any ;
id = this.route.snapshot.params['id'] ;
hotel:any ;
addreservform: FormGroup = new FormGroup({});

//addreservform:FormGroup ;
chambreliste:any ;
currentuser : any  ;
currentuseItem = localStorage.getItem('currentuser') ;
status = localStorage.getItem('status') ;
reservation:any ;
selectedtarif:any ; 
chambrebyid:any ; 
  constructor(private hotelservice:HotelserviceService , private reservservice:ReservationserviceService  , private router:Router  , private fb:FormBuilder ,  private chambreservice:ChambreserviceService,   private route:ActivatedRoute ) {
    this.status = JSON.parse(this.status!) ;
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
    
    
  
  }

  ngOnInit(): void {
    this.addreservform = this.fb.group({
      datedebut : ['' , Validators.required],
      datefin : ['' , Validators.required],
      dureesejour :['' , Validators.required] ,
      nbpersonne : ['' , Validators.required] ,
      nbchambre:['' , Validators.required] ,
      idchambre:['',Validators.required]
    })
    
this.getbyid() ; 
  }

  getallimages(){
    this.hotelservice.getallimagebyhotel(this.id).subscribe((data)=>{
      this.allimages = data ;
      console.log("this is ima" , data)
    })
  }
 getbyid(){
  this.hotelservice.hotelbyid(this.id).subscribe((data)=>{
    this.hotel = data ;
    this.getallimages() ; 
    this.chambreservice.getallbyhotel(this.hotel.id).subscribe((data)=>{
      this.chambreliste = data ;
    
   
    })
  })
 

  
 }
reserver(){
  

  let reservation={
    datedebut : this.addreservform.value.datedebut,
    datefin : this.addreservform.value.datefin,
    dureesejour :this.addreservform.value.dureesejour ,
    nbpersonne : this.addreservform.value.nbpersonne,
    nbchambre:this.addreservform.value.nbchambre,
  }

  
 this.reservservice.createhotelreservation(this.currentuser.id,this.addreservform.value.idchambre, this.id , reservation).subscribe((data)=>{
  this.reservation = data ;
  this.chambreservice.getbyid(this.addreservform.value.idchambre).subscribe((data)=>{
  this.  chambrebyid = data 
        let r ={
somme : this.addreservform.value.nbchambre *this.addreservform.value.dureesejour* this.chambrebyid.tarif  
        }  
         console.log("this is r" , r)

  this.reservservice.updatereservation(this.reservation.id , r).subscribe((data)=>{
    console.log(data)
    
this.router.navigateByUrl(`/facture/${this.reservation.id}`)
  })
  })

  
 })
}

}
