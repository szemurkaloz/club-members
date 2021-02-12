import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'person-branch-type-form',
  templateUrl: './person-branch-type-form.component.html',
  styleUrls: ['./person-branch-type-form.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class PersonBranchTypeFormComponent implements OnInit {
  fg!: FormGroup;
  stepForm!: FormArray;

  constructor(private fb: FormBuilder, private fgd: FormGroupDirective) { }

  ngOnInit(): void {
    this.fg = this.fgd.form.get('branchType') as FormGroup;
    this.stepForm = this.fg.get('branches') as FormArray;
  }

  get branches() : FormArray {
    //console.log("Telefonok" + this.stepForm.value);
    return this.fg.get("branches") as FormArray
  }

  getClubTypeControl(index: number) : FormControl {
    return this.stepForm.at(index).get("clubType") as FormControl
  }

  getClubSortNameControl(index: number) : FormControl {
    return this.stepForm.at(index).get("clubSortName") as FormControl
  }

  addFormArrayItem() {
    let arraylen = this.stepForm.length;

    let newResidencesGroup: FormGroup = this.fb.group({
      place: new FormControl(null, Validators.required),
      stabel: new FormControl(null),
      zipCode: new FormControl(null),
      street: new FormControl(null),})

    this.stepForm.insert(arraylen, newResidencesGroup);
  }

  removeFormArrayItem(i: number) {
    this.stepForm.removeAt(i);
  }

  onSubmit() {
    /*
    for (let index = 0; index < this.stepForm.length; index++) {
      const element = this.stepForm.controls[index];
      element.get('place')?.markAsTouched();
      element.get('place')?.updateValueAndValidity();
    }
     */
    console.log(this.stepForm.status)
  }

}
