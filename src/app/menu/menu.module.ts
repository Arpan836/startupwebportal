import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import { ProfileModule } from '../profile/profile.module';
import { SingleProfileComponent } from '../profile/SingleProfile/single-profile/single-profile.component';
import { AllProfileComponent } from '../profile/AllProfile/all-profile/all-profile.component';
import { MainComponent } from '../main/main/main.component';
import { GetroleserviceService } from '../services/servicetogetrole/getroleservice.service';
import { ApprovedstartupComponent } from '../profile/approvedprofile/approvedstartup/approvedstartup.component';

const role = sessionStorage.getItem('role');


    
const routes: Routes = [
  {
    path:'profile',
    component:SingleProfileComponent,
  },
  {
    path:'allprofile',
    component:AllProfileComponent,
    
  },
  {
    path:'home',
    component:MainComponent,
    
  },
  {
    path:'approvedstartup',
    component:ApprovedstartupComponent
  }
 
  
 
];
@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    ProfileModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes)

  ],
  exports:[MenubarComponent]
})
export class MenuModule { 

}
