import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationserviceService {

  constructor(private http:HttpClient) { }


  createreservation(idclient:any  , idtable:any , idresto:any , reserv:any){
    return this.http.post(`${environment.BasedUrl}/reservresto/save/${idclient}/${idtable}/${idresto}` , reserv) ;
  }

  getaltablebyreservation(idresto:any){
    return this.http.get(`${environment.BasedUrl}/reservresto/availabletables/${idresto}` ) ;
  }

  createhotelreservation(idclient:any , idchambre:any , idhotel:any , reservation )
  {
    return this.http.post(`${environment.BasedUrl}/reservChambre/create/${idclient}/${idchambre}/${idhotel}` , reservation) ;

  }


  getreserbyid(id:any){
    return this.http.get(`${environment.BasedUrl}/reservChambre/getbyid/${id}` ) ;
  }
  listereservhotel(id:any){
    return this.http.get(`${environment.BasedUrl}/reservChambre/byclient/${id}` ) ;
  }
  listereservresto(id:any){
    return this.http.get(`${environment.BasedUrl}/reservresto/getbyclient/${id}` ) ;
  }
  updatereservation(id:any , reserv:any){
    return this.http.put(`${environment.BasedUrl}/reservChambre/update/${id}` , reserv ) ;
  }

}
