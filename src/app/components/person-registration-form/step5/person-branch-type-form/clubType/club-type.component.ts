import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClubSortNameComponent } from '../club-sort-name/club-sort-name.component';
import { AfterViewInit } from '@angular/core';
import { ClubTypeService } from 'src/app/core/club-type.service';

@Component({
  selector: 'club-type',
  templateUrl: './club-type.component.html',
  styleUrls: ['./club-type.component.css'],
  //providers: [ClubTypeService]
})
export class ClubTypeComponent implements OnInit, AfterViewInit {
  @Input() myControl!: FormControl;
  options: string[] = ['Tae-Kwon Do', 'Hapkido'];
  filteredOptions!: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  constructor(private clubTypeService: ClubTypeService) {
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    //setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    //if the selected value not exist in array
    //if(event.option.viewValue !== ''){
      this.clubTypeService.sendClubType(event.option.viewValue);
    //}
  }

}
