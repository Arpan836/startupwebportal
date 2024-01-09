import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenubindService {

  constructor(private http:HttpClient) { }
    
  getMenuData(){
    return this.http.get("http://localhost:4000/rights/1")
  }
}
