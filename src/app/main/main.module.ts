import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';


import { RegistrationComponent } from '../startup/authentication/register/registration/registration.component';
import { InvestRegisterComponent } from '../investor/authentication/register/invest-register/invest-register.component';
const routes: Routes = [
  {
    path:'startup',
    component:RegistrationComponent,
    
  },
  {
    path:'investor',
    component:InvestRegisterComponent
  }
  
];

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
    MainComponent
  ]
})
export class MainModule { }
