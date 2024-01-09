import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  url="http://localhost:4000/login"
  constructor(private http :HttpClient) { }
  PostData(data:{}){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url,data, { headers, withCredentials: true })
    
  }
  
  getData(){

    return this.http.get("http://localhost:4000/user", {  withCredentials: true })
  }



}