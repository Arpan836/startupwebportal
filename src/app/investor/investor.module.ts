import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { InvestRegisterComponent } from './authentication/register/invest-register/invest-register.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
const routes: Routes = [
 
  {
    path:'investor_register',
    component:InvestRegisterComponent
  }
];
@NgModule({
  declarations: [
    
    InvestRegisterComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ]
})
export class InvestorModule { }
