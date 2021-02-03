import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { contentAndNumberValidator } from 'src/app/core/custom-field-validators';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

declare interface RemoveItem {
  on(event: 'hello', listener: (name: string) => void): this;
  on(event: string, listener: Function): this;
}
@Component({
  selector: 'email-form-array',
  templateUrl: './email-form-array.component.html',
  styleUrls: ['./email-form-array.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class EmailFormArrayComponent implements OnInit  {

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  control!: FormArray;

  constructor(private fgd: FormGroupDirective, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.control = this.fgd.control.get('emails') as FormArray;
    console.log('this.control.value ', this.control.value ? this.control.value : 'null');
  }

  addEmailFormControl() {
    let arraylen = this.control.length;
    //If the last emailControl is empty then exit;
    if(this.canBeAddNewEmail() === true) return;

    let newEmailGroup: FormGroup =  new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    }, { validators: contentAndNumberValidator })

    this.control.insert(arraylen, newEmailGroup);
  }

  canBeAddNewEmail(): boolean {
    let lastControl = this.getEmailFormControl(this.control.length-1);
    //The array is empty
    if (lastControl === undefined) return false;
    return (lastControl.get('email')?.hasError('email') === true || lastControl.get('email')?.value === null) ? true : false;
  }

  onRemoveEmailRow(index: number){
    this.confirmDialog("Törlés megerősítése!", `Az email sor törlése?`, index)
  }

  removeEmail(index: number ): void  {
    this.control.removeAt(index);
  }

  // get the formgroup under residences form array
  getEmailFormControl(index: number): FormControl {

    return this.control.controls[index] as FormControl;
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (index: number, control: string, error: string) => {
    //this.getEmailFormControl(index).controls[control].hasError(error);
    return this.getEmailFormControl(index).get('email')?.hasError(error);
  }

  /* public validationMessages = {
    'firstName': [
      { type: 'required', message: 'First Name is required' },
      { type: 'maxlength', message: 'First Name may only contain 5 characters.' }
    ],
    'lastName': [
      { type: 'required', message: 'Last Name is required' },
      { type: 'pattern', message: 'Last Name may not be "Smith".' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ]

    <label>
    Email:
    <input type="email" autocomplete="email" formControlName="email" required>
  </label>
  <!-- Validation Errors -->
  <div *ngFor="let validation of validationMessages.email">
    <div *ngIf="profileForm.get('email').hasError(validation.type) && (profileForm.get('email').dirty || profileForm.get('email').touched)">
          <small style="color:red;">{{validation.message}}</small>
    </div>
  </div>
  } */
//, executing: (index: number, formArray: FormArray => void): void
  confirmDialog(caption: string, question: string, index: number) {

    const dialogData = new ConfirmDialogModel(caption, question);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

   dialogRef.afterClosed().subscribe(dialogResult => {
      //if result true then delete row
      //if(dialogResult) executing(index, this.control);
      if(dialogResult) this.removeEmail(index);
    });
  }
}
