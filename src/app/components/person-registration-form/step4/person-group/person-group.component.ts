import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Input } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { startWith } from 'rxjs/internal/operators/startWith';

@Component({
  selector: 'person-group',
  templateUrl: './person-group.component.html',
  styleUrls: ['./person-group.component.css']
})
export class PersonGroupComponent implements OnInit {
  //"group": ["Felnőtt","Versenyző"],
  //"comment": "Valami megjegyzés",

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  markCtrl = new FormControl;
  @Input() personGroups!: FormControl;

  filteredMarks!: Observable<any[]>;

  marks = [
    'Felnőtt',
  ];

  allGroupType = [
    'Felnőtt',
    'Versenyző',
    'Gyermek',
    'Ifjúsági',
    'Támogató'
  ];

  @ViewChild('markInput') markInput!: ElementRef;

  constructor() {
    this.filteredMarks = this.markCtrl.valueChanges.pipe(
      startWith(null),
      map((mark: string | null) => mark ? this.filter(mark) : this.allGroupType.slice()));
  }

  ngOnInit(): void {
    this.personGroups?.setValue(this.marks.slice())
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our mark
    if ((value || '').trim()) {
      //if the selected value not exist in array
      if(this.marks.indexOf(value) < 0){
        this.marks.push(value.trim());
        this.personGroups?.setValue(this.marks.slice());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.markCtrl.setValue(null);
  }

  remove(mark: any): void {
    const index = this.marks.indexOf(mark);

    if (index >= 0) {
      this.marks.splice(index, 1);
      this.personGroups?.setValue(this.marks.slice());
    }
  }

  filter(name: string) {
    return this.allGroupType.filter(mark =>
      mark.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    //if the selected value not exist in array
    if(this.marks.indexOf(event.option.viewValue) < 0){
      this.marks.push(event.option.viewValue);
      this.personGroups?.setValue(this.marks.slice());
    }
    this.markInput.nativeElement.value = '';
    this.markCtrl.setValue(null);

  }
}

