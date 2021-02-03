import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
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

fruitCtrl = new FormControl();

filteredFruits: Observable<any[]>;

fruits = [
  'Felnőtt',
];

allFruits = [
  'Felnőtt',
  'Versenyző',
  'Gyermek',
  'Ifjúsági',
  'Támogató'
];

@ViewChild('fruitInput') fruitInput!: ElementRef;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allFruits.filter(fruit =>
        fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }
}

