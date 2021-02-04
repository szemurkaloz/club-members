import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, FormControl } from '@angular/forms';

@Component({
  selector: 'person-other-form',
  templateUrl: './person-other-form.component.html',
  styleUrls: ['./person-other-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class PersonOtherFormComponent implements OnInit {
  @Input()
  stepForm!: FormGroup;

  constructor(private parent: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.parent.control.get('personOther') as FormGroup;
  }

  get personGroups() : FormControl {
    return this.stepForm.get("groups") as FormControl
  }

  onSubmit() {
    /* this.stepForm.get('place')?.markAsTouched();
    this.stepForm.get('place')?.updateValueAndValidity(); */
    console.log(this.stepForm.status)
  }
}
