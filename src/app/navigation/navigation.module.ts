import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../startup/authentication/register/registration/registration.component';
import { MenuModule } from '../menu/menu.module';
import { MainComponent } from '../main/main/main.component';
import { MainModule } from '../main/main.module';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { LockRouteGuard } from '../lockRouteGuard';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    
  },
  {
    path:'login',
    component:LoginComponent
  },
 
];
@NgModule({
  declarations: [
    NavbarComponent  ],
  imports: [
    CommonModule,
    MenuModule,
    MainModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
    NavbarComponent
  ]
})
export class NavigationModule { }
