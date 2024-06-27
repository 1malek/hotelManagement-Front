import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChambreserviceService {

  constructor(private http:HttpClient) { }

  getallbyhotel(id:any){

    return this.http.get(`${environment.BasedUrl}/chambre/getbyhotel/${id}` )
  }
  getbyid(id:any){
    return this.http.get(`${environment.BasedUrl}/chambre/getbyid/${id}` )
  }
}
