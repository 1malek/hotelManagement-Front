import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {

  constructor(private http:HttpClient  ) { }

  getbyresto(id:any){
    return this.http.get(`${environment.BasedUrl}/table/byresto/${id}`)
  }
  getavailable(id:any){

    return this.http.get(`${environment.BasedUrl}/table/getavailable/${id}`)

  }


}
