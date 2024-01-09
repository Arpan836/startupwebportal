import { Component } from '@angular/core';
import { AllprofileserviceService } from 'src/app/services/allprofileservice.service';

@Component({
  selector: 'app-approvedstartup',
  templateUrl: './approvedstartup.component.html',
  styleUrls: ['./approvedstartup.component.css']
})
export class ApprovedstartupComponent {
  fillerAllProfile:any
  constructor(private Allprofileservice:AllprofileserviceService){
    
    this.Allprofileservice.getAllApprovedData().subscribe((result)=>{
      console.log(result)
      this.fillerAllProfile=result
        },
        (error)=>{
          console.log(error)
        })
  
  }
}
