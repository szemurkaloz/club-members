import { contentAndNumberValidator } from './../../core/custom-field-validators';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatStepper, MatVerticalStepper } from '@angular/material/stepper';

@Component({
  selector: 'person-connection',
  templateUrl: './person-connection.component.html',
  styleUrls: ['./person-connection.component.css']
})
export class PersonConnectionComponent implements OnInit {
  @Input()
  stepForm!: FormGroup;
  @Input()
  stepper!: MatVerticalStepper;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get phonNumbers() : FormArray {
    //console.log("Telefonok" + this.stepForm.value);
    return this.stepForm.get("phones") as FormArray
  }

  addFormControl() {
    let phoneArray = this.stepForm.controls.phones as FormArray;
    let arraylen = phoneArray.length;

    let newPhonegroup: FormGroup = this.fb.group({
      comment: new FormControl(null),
      number: new FormControl(null)
    }, { validators: contentAndNumberValidator })

    phoneArray.insert(arraylen, newPhonegroup);
  }

  removeFormControl(i: number) {
    let phoneArray = this.stepForm.controls.phones as FormArray;
    phoneArray.removeAt(i);
  }

  // get the formgroup under contacts form array
  getPhoneFormGroup(index: number): FormGroup {
    let phoneArray = this.stepForm.controls.phones as FormArray;
    const formGroup = phoneArray.controls[index] as FormGroup;
    return formGroup;
  }


  /* goForward(stepper: MatStepper){
    console.log("Matstepper next!!")
    stepper.next();
  }*/
}
