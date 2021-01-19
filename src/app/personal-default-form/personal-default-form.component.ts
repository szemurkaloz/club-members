import { AppComponent } from './../app.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
//import { PersonalDefault } from '../personal-default'
import { PersonLocation } from '../shared/person-location';

@Component({
  selector: 'personal-default-step',
  templateUrl: './personal-default-form.component.html',
  styleUrls: ['./personal-default-form.component.css'],

})
export class PersonalDefaultFormComponent implements OnInit {

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  constructor() { }

  @Input()
  stepForm!: FormGroup;

  ngOnInit(): void {
    console.log("Stepform value:" + this.stepForm.controls.value);
  }

  stepSubmitted() {
    this.stepForm != undefined ? this.stepForm.get('name')?.updateValueAndValidity() : undefined;
  }

  submit() {
   /* if (!this.registrationMemberForm?.valid) {
      return;
    }*/
    //console.log(this.registrationMemberForm..personalDefaultFormGroup?.value);
    //console.log(this.personLocationFormGroup?.value);
  }

}
/*
  FormBilder https://www.techiediaries.com/angular-formbuilder-formgroup/
*/
