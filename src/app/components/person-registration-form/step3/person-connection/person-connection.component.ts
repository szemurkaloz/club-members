import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'person-connection',
  templateUrl: './person-connection.component.html',
  styleUrls: ['./person-connection.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class PersonConnectionComponent implements OnInit {
  @Input()
  stepForm!: FormGroup;

  constructor(private fgd: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.fgd.form.get('personConnection') as FormGroup;
  }

  public errorHandling = (control: string, error: string) => {
    return this.stepForm.controls[control].hasError(error);
  }

  onSubmit() {
    /* this.stepForm.get('place')?.markAsTouched();
    this.stepForm.get('place')?.updateValueAndValidity(); */
    console.log(this.stepForm.status)
  }

}
