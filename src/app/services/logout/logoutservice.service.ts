import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogoutserviceService {

  url="http://localhost:4000/logout"
  constructor(private http :HttpClient) { }
 
  
  Getlogoutdata(){
    return this.http.get("http://localhost:4000/logout",{
      withCredentials:true
    })
  }



}