import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url="http://localhost:4000/registerstartup"
  constructor(private http :HttpClient) { }
  PostData(data:{}){
    return this.http.post(this.url,data)
  }
}
