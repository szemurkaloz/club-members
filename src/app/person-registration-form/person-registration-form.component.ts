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
https://www.positronx.io/angular-8-reactive-forms-validation-with-angular-material-8/
*/
@Component({
  selector: 'person-registration-form',
  templateUrl: './person-registration-form.component.html',
  styleUrls: ['./person-registration-form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class PersonRegistrationFormComponent implements OnInit {
  newMemberForm!: FormGroup;
  personRegistation!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newMemberForm = fb.group({
      personDefault: fb.group({
        name: new FormControl(null, Validators.required),
        birthPlace: new FormControl(null),
        birthDate: new FormControl(new Date()),
        matherName: new FormControl(null),
        job: new FormControl(null)
      }),
      personLocation: fb.group({
        residences: this.fb.array([this.fb.group({
          place: new FormControl(null, Validators.required),
          stabel: new FormControl(null),
          zipCode: new FormControl(null),
          street: new FormControl(null),
        })
        ])
      }),
      personConnection: fb.group({
        phoneNumbers: this.fb.array([this.fb.group({
          comment: new FormControl(null),
          number: new FormControl(null)
        }, { validators: contentAndNumberValidator })
        ]),
        emails: this.fb.array([this.fb.group({
          email: new FormControl(null, [Validators.required, Validators.email])
        })
        ])
      })

    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  onSubmit() {

    console.log('you submitted value: ', this.newMemberForm?.value);
  }

  get personDefault() : FormGroup {
    return this.newMemberForm.get("personDefault") as FormGroup
  }

  get personLocation() : FormGroup {
    return this.newMemberForm.get("personLocation") as FormGroup
  }

  get personConnection() : FormGroup {
    return this.newMemberForm.get("personConnection") as FormGroup
  }
}
