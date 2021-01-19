import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'person-connection',
  templateUrl: './person-connection.component.html',
  styleUrls: ['./person-connection.component.css']
})
export class PersonConnectionComponent implements OnInit {
  @Input()
  stepForm!: FormGroup;

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
    })

    phoneArray.insert(arraylen, newPhonegroup);
  }

  removeFormControl(i: number) {
    let phoneArray = this.stepForm.controls.phones as FormArray;
    phoneArray.removeAt(i);
  }
}
