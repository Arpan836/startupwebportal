import { Emitters } from './emitterss/emitter';
import { Component,OnInit  } from '@angular/core';
// import { AppServiceService } from './app-service.service';
import { LoginserviceService } from './services/loginservice.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Startup';
   

  constructor(private userdata:LoginserviceService,private router:Router,private cookieService: CookieService){
   
  }
    
  ngOnInit(): void {
    // Subscribe to the static EventEmitter
    debugger
    const cookieValue = this.cookieService.get('jwttoken');

if(cookieValue==""){
  Emitters.authEmitter.emit(false)
  localStorage.removeItem('authenticated');
  localStorage.removeItem('role');
  this.router.navigate(['/login']); 
}
    const isAuthenticated = localStorage.getItem('authenticated');

  
     
    if(isAuthenticated){
      
      this.userdata.getData().subscribe((result) => {
        
  Emitters.authEmitter.emit(true)
      }
      ,(error)=>{
  
      })
    }  
  }
  
  


  // users:any
  // constructor(private Appdata : AppServiceService){
  //   Appdata.getData().subscribe((data)=>{
  //     this.users=data;
  //   })
  // }
}
