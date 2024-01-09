import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './authentication/register/registration/registration.component';
import {MatRadioModule} from '@angular/material/radio';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  {
    path: 'register',
    component: RegistrationComponent,
  },
];
@NgModule({
  declarations: [ RegistrationComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatRadioModule
  ],
  exports: [ RegistrationComponent],
})
export class StartupModule {}
