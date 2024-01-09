import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';
import { Router } from '@angular/router';
import { Emitters } from '../emitterss/emitter';
import { GetroleserviceService } from '../services/servicetogetrole/getroleservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private userdata:LoginserviceService,private router:Router,private sharedDataService:GetroleserviceService){
  
  }
  
  loginforall(data: NgForm) {

    // Assuming 'data' contains login information (e.g., username and password)
    this.userdata.PostData(data).subscribe(
      (result) => {
        // Handle the login result here
        console.log(result);
       this.fetchData()
        // After successful login, you can redirect if needed
        // this.router.navigate(['/']);
      },
      (error) => {
        // Handle login errors here
        console.log(error);
      }
    );
  }
    fetchData(): void {
      this.userdata.getData().subscribe(
        (result:any) => {

             this.sharedDataService.setrole(result.role);
             Emitters.authEmitter.emit(true)
          this.router.navigate(['dashboard']);
          localStorage.setItem('authenticated', 'true');
          localStorage.setItem('role', '1');

        },
        (error) => {
          console.error('Data retrieval error:', error);
          Emitters.authEmitter.emit(false)

        }
      );
    }
   
  }

