import { AppComponent } from './../app.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, ControlContainer, FormGroupDirective, AbstractControl } from '@angular/forms';
//import { PersonalDefault } from '../personal-default'

@Component({
  selector: 'personal-default-step',
  templateUrl: './personal-default-form.component.html',
  styleUrls: ['./personal-default-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class PersonalDefaultFormComponent implements OnInit {
@Input()
  stepForm!: FormGroup;

  constructor(private parent: FormGroupDirective) {}



  ngOnInit(): void {
    this.stepForm = this.parent.control.get('personDefault') as FormGroup;


  }
  /*
  getPhoneFormGroup(index: number): FormGroup {
    return this.control.controls[index] as FormGroup;
  }*/

  stepSubmitted() {
    this.stepForm.get('place')?.markAsTouched();
    this.stepForm.get('place')?.updateValueAndValidity();
    console.log('you personalDefault submitted value: ', this.stepForm?.value);
  }



}
/*
  FormBilder https://www.techiediaries.com/angular-formbuilder-formgroup/
*/
