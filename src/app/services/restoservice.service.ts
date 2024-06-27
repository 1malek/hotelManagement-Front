import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {

  constructor(private http:HttpClient) { }
  findall(){
    return this.http.get(`${environment.BasedUrl}/restaurant/findall`)
  }
  getbycuisine(cuisine:any){
    return this.http.get(`${environment.BasedUrl}/restaurant/bycuisine/${cuisine}`)
  }

  getbyambiance(ambiance:any){
    return this.http.get(`${environment.BasedUrl}/restaurant/byambiance/${ambiance}`)
  }

  getbyadresse(adresse:any){
    return this.http.get(`${environment.BasedUrl}/restaurant/getbyadresse/${adresse}`)
  }
}
