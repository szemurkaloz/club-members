import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ElementRef, forwardRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { contentAndNumberValidator } from '../core/custom-field-validators';
//import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/*
Forms are not type-safe

https://indepth.dev/posts/1224/angular-forms-useful-tips
https://www.digitalocean.com/community/tutorials/angular-custom-form-control
*/
@Component({
  selector: 'person-registration-form',
  templateUrl: './person-registration-form.component.html',
  styleUrls: ['./person-registration-form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class PersonRegistrationFormComponent implements OnInit{

  //stepper: CdkStepper | undefined;
  //stepper: CdkStepper | undefined;

  //@ViewChild('stepper') matVerticalStepper!: ElementRef;

  personDefault!: FormGroup;
  personLocation!: FormGroup;
  personRegistation!: FormGroup;
  personConnection!: FormGroup;


  constructor(private fb: FormBuilder) {
    this.personDefault = fb.group({
        name: new FormControl(null, Validators.required),
        birthPlace: new FormControl(null),
        birthDate: new FormControl(new Date()),
        matherName: new FormControl(null),
        job: new FormControl(null)
    });
    this.personLocation = fb.group({
      place: new FormControl(null, Validators.required),
      stabel: new FormControl(null),
      zipCode: new FormControl(null),
      street: new FormControl(null),
    });
    this.personConnection = fb.group({
      phones: this.fb.array([ this.fb.group({
        comment: new FormControl(null),
        number: new FormControl(null)
      }, { validators: contentAndNumberValidator })
      ])
    });
    this.personRegistation = fb.group({});
    console.log(this.personConnection.get("phones"));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  goForward(stepper: MatStepper){
    stepper.next();
}

}
