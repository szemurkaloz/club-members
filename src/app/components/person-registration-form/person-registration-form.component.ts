import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ElementRef, forwardRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { contentAndNumberValidator } from '../../core/custom-field-validators';
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
  // racings is not required but need validators when enabeled
  isOptional = false;

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
      }),
      personOther: fb.group({
        groups: new FormControl([]),
        comment: new FormControl(null),
      }),
      branchType: fb.group({
        branches: this.fb.array([this.fb.group({
          clubType: new FormControl(null, [Validators.required]),
          clubSortName: new FormControl(null, [Validators.required]),
          beltExams: this.fb.array([this.fb.group({
            beltGrade: new FormControl(null, [Validators.required]),
            examDate: new FormControl(null, [Validators.required])
          })
          ]),
        })
        ]),

        racings: this.fb.array([this.fb.group({
          name: new FormControl(null, [Validators.required]),
          country: new FormControl(null, [Validators.required]),
          location: new FormControl(null, [Validators.required]),
          gradation: new FormControl(null, [Validators.required]),
          racingType: new FormControl(null, [Validators.required]),
          date: new FormControl(null, [Validators.required]),
          comment: new FormControl(null)
        })
        ]),
      }),
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
//step1: any, step2: any, step3: any
    //console.log('you submitted value: ', step1, step2, step3);
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

  get personOther() : FormGroup {
    return this.newMemberForm.get("personOther") as FormGroup
  }

  get branchType() : FormGroup {
    return this.newMemberForm.get("branchType") as FormGroup
  }
}
