import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllprofileserviceService {

  constructor(private http:HttpClient) { }
    
  getAllProfileData(){
    return this.http.get("http://localhost:4000/allprofile",{withCredentials:true})
  }

  getAllApprovedData(){
    return this.http.get("http://localhost:4000/approvedstartup",{withCredentials:true})

  }
}
