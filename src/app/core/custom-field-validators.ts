import { Directive } from "@angular/core";
import { FormGroup, AbstractControl, ValidationErrors, ValidatorFn, NG_VALIDATORS, Validator } from "@angular/forms";


/*  both fields need to get value */
export const contentAndNumberValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const comment = control.get('comment');
  const phoneNumber = control.get('number');
  let first = false;
  let second = false;
  if ((comment?.value === null) &&(phoneNumber?.value === null)){
    return null;
  }
  if(comment?.value !== null && comment?.value !== '') {
    first = true;
 }
 if(phoneNumber?.value !== null && phoneNumber?.value !== '') {
  second = true;
}

  return first !== second ? { identityRevealed: true } : null;

};


@Directive({
  selector: '[contentAndNumberMust]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ContentAndNumberValidatorDirective, multi: true }]
})
export class ContentAndNumberValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return contentAndNumberValidator(control);
  }
}
