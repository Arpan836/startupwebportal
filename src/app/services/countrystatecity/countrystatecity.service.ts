import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrystatecityService {

  url="http://localhost:4000/register"
  constructor(private http :HttpClient) { }
  getcountries(){
    return this.http.get(this.url)
  }
}
