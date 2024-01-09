import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
url="http://localhost:4000"
  constructor(private http :HttpClient) { }
  getData(){
    return this.http.get(this.url)
  }
}