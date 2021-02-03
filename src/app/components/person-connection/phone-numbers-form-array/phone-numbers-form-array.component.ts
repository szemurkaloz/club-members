import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { contentAndNumberValidator } from 'src/app/core/custom-field-validators';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

interface IremoveParams {
  index: number,
  from: FormArray

}

@Component({
  selector: 'phone-numbers-form-array',
  templateUrl: './phone-numbers-form-array.component.html',
  styleUrls: ['./phone-numbers-form-array.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class PhoneNumbersFormArrayComponent implements OnInit {

  phoneNumberControls!: FormArray;
  result: string = '';

  public validationMessages = {
    'phoneNumberNote': [
      { type: 'bothrequired', message: 'A mezők csak együtt kitöltve érvényesek!' }
    ],
    /*'lastName': [
      { type: 'required', message: 'Last Name is required' },
      { type: 'pattern', message: 'Last Name may not be "Smith".' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ]*/
  }

  constructor(private fgd: FormGroupDirective, public dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.phoneNumberControls = this.fgd.control.get('phoneNumbers') as FormArray;
    //console.log('personLocation:', this.control.value ? this.control.value : 'null');
  }

  addPhoneFormControl() {
    let arraylen = this.phoneNumberControls.length;
    if(this.getNewSiblingEnabeled(arraylen-1) === true) return

    let newPhoneGroup: FormGroup = new FormGroup({
      comment: new FormControl(null),
      number: new FormControl(null)
    }, { validators: contentAndNumberValidator })

    this.phoneNumberControls.insert(arraylen, newPhoneGroup);
  }
  onRemovePhoneRow(index: number){
    this.confirmDialog("Törlés megerősítése!", `A kapcsolati sor törlése?`, index, this.removePhoneFormControl)
  }

  removePhoneFormControl(param: IremoveParams ): void  {
    param.from.removeAt(param.index);
  }

  // get the  under contacts form array of formgroup
  getPhoneFormControl(index: number): FormControl {
    return this.phoneNumberControls.controls[index] as FormControl;
  }

  getNewSiblingEnabeled(index: number): boolean {
    let last = this.phoneNumberControls.controls[index] as FormControl;
    //The array is empty
    if (last === undefined) return false;
    const comment = last.get('comment');
    const phoneNumber = last.get('number');
    return last.errors !== null ? true :
     ((comment?.value === null || comment?.value === '') &&
      (phoneNumber?.value === null || phoneNumber?.value === ''));
  }

  confirmDialog(caption: string, question: string, index: number, executing: (param: IremoveParams) => void): void {

    const dialogData = new ConfirmDialogModel(caption, question);

    //const dialog = this.dialog.open(component, {minWidth: '90%', disableClose: true, data: dados, position: {top: '4%'}});
    const dialogRef = this.dialogRef.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      //if result true then delete row
      //if(dialogResult) this.onRemovePhoneRow(index)
      if(dialogResult) executing({index: index, from: this.phoneNumberControls});
    });
  }
}
