import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {

  constructor(private http:HttpClient) { }
  getbyambiance(ambiance:any){
    return this.http.get(`${environment.BasedUrl}/hotel/byambiance/${ambiance}` )  ;
  }

  getbyadresse(adresse:any){
    return this.http.get(`${environment.BasedUrl}/hotel/byadresse/${adresse}` )  ;
  }
  byetoile(etoile:any){
    return this.http.get(`${environment.BasedUrl}/hotel/byetoile/${etoile}` )  ;
  }
  getoneimage(id:any){
    return this.http.get(`${environment.BasedUrl}/imagehotel/getonebyhotel/${id}` )  ;
  }
  getallimagebyhotel(id:any){
    return this.http.get(`${environment.BasedUrl}/imagehotel/getallbyhotel/${id}` )  ;
  }
  hotelbyid(id:any){
    return this.http.get(`${environment.BasedUrl}/imagehotel/getbyid/${id}` )  ;
  }
  getall(){
    return this.http.get(`${environment.BasedUrl}/hotel/getall` )  ;
  }
}
