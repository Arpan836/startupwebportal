import { Emitters } from './emitterss/emitter';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './startup/authentication/register/registration/registration.component';
import { MainComponent } from './main/main/main.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LockRouteGuard } from './lockRouteGuard';
import { SingleProfileComponent } from './profile/SingleProfile/single-profile/single-profile.component';
import { AllProfileComponent } from './profile/AllProfile/all-profile/all-profile.component';
import { ApprovedstartupComponent } from './profile/approvedprofile/approvedstartup/approvedstartup.component';

const isAuthenticated = localStorage.getItem('authenticated');

const routes: Routes = [
  {
    path:'**',
    component:isAuthenticated?DashboardComponent:MainComponent
  },
  {
  
    path:'home',
    component:MainComponent
  },
  {
    path:'login',
    component:LoginComponent,
    

  },
  {
    path:'register',
    component:RegistrationComponent,    
  }
  ,
  {
    path:'user',
    component:DashboardComponent,
    canActivate:[LockRouteGuard]
  },
  {
    path:'profile',
    component:SingleProfileComponent,
    canActivate:[LockRouteGuard]

  },
  {
    path:'allprofile',
    component:AllProfileComponent,
    canActivate:[LockRouteGuard]
  },
  {
    path:'approvedstartup',
    component:ApprovedstartupComponent,
    canActivate:[LockRouteGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
