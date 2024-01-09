import { Component } from '@angular/core';
import { AllprofileserviceService } from 'src/app/services/allprofileservice.service';

@Component({
  selector: 'app-all-profile',
  templateUrl: './all-profile.component.html',
  styleUrls: ['./all-profile.component.css']
})
export class AllProfileComponent {
  fillerAllProfile:any
constructor(private Allprofileservice:AllprofileserviceService){
  
  this.Allprofileservice.getAllProfileData().subscribe((result)=>{
console.log(result)
this.fillerAllProfile=result
  },
  (error)=>{
    console.log(error)
  })
 

}

}
