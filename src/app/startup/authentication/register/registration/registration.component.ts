import { RegisterService } from 'src/app/services/startup_registration/register.service';
import { CountrystatecityService } from './../../../../services/countrystatecity/countrystatecity.service';
import {Component} from '@angular/core';
 
import {NgForm} from '@angular/forms';
// import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
// import {MatButtonModule} from '@angular/material/button';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  // providers: [
  //   {
  //     provide: STEPPER_GLOBAL_OPTIONS,
  //     useValue: {showError: true},
  //   },
  // ],
  // standalone: true,
  // imports: [
  //   MatStepperModule,
  //   FormsModule,
  //   ReactiveFormsModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatButtonModule,
  // ],
})
export class RegistrationComponent {
  title = 'Startup';
  countries:any
  constructor(private CSC:CountrystatecityService,private userdata:RegisterService){
    // CSC.getcountries().subscribe((data)=>{
    //   this.countries=data;
    //   console.log(data)
    // })
  }
  
    getUserFormData(data:NgForm){
      console.log(data)
      this.userdata.PostData(data).subscribe((result)=>{
console.warn(result)
      })
    }
  }
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });

  // constructor(private _formBuilder: FormBuilder) {}
