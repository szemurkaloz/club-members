import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { contentAndNumberValidator } from '../core/custom-field-validators';


@Component({
  selector: 'person-location-step',
  templateUrl: './person-location-form.component.html',
  styleUrls: ['./person-location-form.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class PersonLocationFormComponent implements OnInit {

  @Input()
  fg!: FormGroup;
  stepForm!: FormArray;

  constructor(private fb: FormBuilder, private fgd: FormGroupDirective) {

  }

  ngOnInit(): void {
    this.fg = this.fgd.form.get('personLocation') as FormGroup;
    this.stepForm = this.fg.get('residences') as FormArray;
    //console.log('personLocation:', this.stepForm.value ? this.stepForm.value : 'null');
  }

  get residences() : FormArray {
    //console.log("Telefonok" + this.stepForm.value);
    return this.fg.get("residences") as FormArray
  }

  stepSubmitted() {
    for (let index = 0; index < this.stepForm.length; index++) {
      const element = this.stepForm.controls[index];
      element.get('place')?.markAsTouched();
      element.get('place')?.updateValueAndValidity();
    }
     //this.stepForm.get('place')?.updateValueAndValidity() ;
  }

  addFormControl() {
    let arraylen = this.stepForm.length;

    let newResidencesGroup: FormGroup = this.fb.group({
      place: new FormControl(null, Validators.required),
      stabel: new FormControl(null),
      zipCode: new FormControl(null),
      street: new FormControl(null),})

    this.stepForm.insert(arraylen, newResidencesGroup);
  }

  removeFormControl(i: number) {
    this.stepForm.removeAt(i);
  }

  // get the formgroup under residences form array
  /*getResidencesFormGroup(index: number): FormGroup {
    let residencesArray = this.stepForm.controls.residences as FormArray;
    const formGroup = residencesArray.controls[index] as FormGroup;
    return formGroup;
  }*/

}
