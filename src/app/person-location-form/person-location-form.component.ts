import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'person-location-step',
  templateUrl: './person-location-form.component.html',
  styleUrls: ['./person-location-form.component.css']
})
export class PersonLocationFormComponent implements OnInit {

  @Input()
  stepForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  stepSubmitted() {
    this.stepForm != undefined ? this.stepForm.get('place')?.updateValueAndValidity() : undefined;
  }

}
