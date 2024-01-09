import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllprofileComponent } from './allprofile/allprofile.component';
import { SingleprofileComponent } from './singleprofile/singleprofile.component';



@NgModule({
  declarations: [
    AllprofileComponent,
    SingleprofileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvestorProfileModule { }
