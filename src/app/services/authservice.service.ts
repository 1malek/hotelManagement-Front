import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  signup(user:any){

    return this.http.post(`${environment.BasedUrl}/client/create` , user);
  }
  authentification(acteur:any){
    return this.http.post(`${environment.BasedUrl}/users/authentification` , acteur)   ;
    }
}
