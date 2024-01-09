import { LoginserviceService } from './../../services/loginservice.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Emitters } from '../../emitterss/emitter';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
// authenticated=false

constructor(private http:HttpClient,private logoutfromnav:LoginserviceService){}
authenticated=false
  ngOnInit(): void {
    
    try{
      
  
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    Emitters.authEmitter.subscribe((auth:boolean)=>{
      this.authenticated=auth
    })
  }
  catch(err){
    console.log(err)
  }
  }
// ngOnInit(): void {
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   //Add 'implements OnInit' to the class.
//   Emitters.authEmitter.subscribe((auth:boolean)=>{
//     this.authenticated=auth
//   })
// }
// logout():void{
//   this.logoutfromnav.PostData({}).subscribe(()=>{
//   this.authenticated=false
//   })
// }
}
