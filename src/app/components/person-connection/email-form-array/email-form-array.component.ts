import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { contentAndNumberValidator } from 'src/app/core/custom-field-validators';

@Component({
  selector: 'email-form-array',
  templateUrl: './email-form-array.component.html',
  styleUrls: ['./email-form-array.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class EmailFormArrayComponent implements OnInit {
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  control!: FormArray;

  constructor(private fgd: FormGroupDirective) { }

  ngOnInit(): void {
    this.control = this.fgd.control.get('emails') as FormArray;
    console.log('this.control.value ', this.control.value ? this.control.value : 'null');
  }

  addEmailFormControl() {
    let arraylen = this.control.length;
    //If the last emailControl is empty then exit;
    let lastControl = this.getEmailFormControl(arraylen-1);

    lastControl.get('email')?.updateValueAndValidity();
    let mehet = lastControl.errors?.identityRevealed && (lastControl.touched || lastControl.dirty);

    let ertek = lastControl.get('email')?.value;
    let allapota = lastControl.get('email')?.hasError('email')

    if(lastControl.get('email')?.updateValueAndValidity() === undefined) {return};

    let newEmailGroup: FormGroup =  new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    }, { validators: contentAndNumberValidator })

    this.control.insert(arraylen, newEmailGroup);
  }

  removeEmailFormControl(i: number) {
    this.control.removeAt(i);
  }

  // get the formgroup under residences form array
  getEmailFormControl(index: number): FormControl {

    return this.control.controls[index] as FormControl;
  }

}
