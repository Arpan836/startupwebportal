import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProfileComponent } from './AllProfile/all-profile/all-profile.component';
import { SingleProfileComponent } from './SingleProfile/single-profile/single-profile.component';

import { RouterModule, Routes } from '@angular/router';
import { ApprovedstartupComponent } from './approvedprofile/approvedstartup/approvedstartup.component';

const routes: Routes = [
 {
  path:"allprofile/single/:id",
  component:SingleProfileComponent
 },
 {
  path:"approvedstartup/single/:id",
  component:SingleProfileComponent
 }
]
  @NgModule({
  declarations: [
    AllProfileComponent,
    SingleProfileComponent,
    ApprovedstartupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),

  ],
  exports:[
    AllProfileComponent,
    SingleProfileComponent
  ]
})
export class ProfileModule { }
