import { OnDestroy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ClubTypeService } from 'src/app/core/club-type.service';

interface Club{
  name: string;
  kind: string;
}

@Component({
  selector: 'club-sort-name',
  templateUrl: './club-sort-name.component.html',
  styleUrls: ['./club-sort-name.component.css'],
  //providers: [ClubTypeService]
})
export class ClubSortNameComponent implements OnInit, OnDestroy {
  @Input() myControl!: FormControl;
  subscription!: Subscription;
  options!: Club[];
  selectedOptions: Club[] = [
    {name:'Máté SE',kind:'Tae-Kwon Do'},
    {name:'Hwarangdo SE',kind:'Tae-Kwon Do'},
    {name:'Hwarangdo SE',kind:'Tae-Kwon Do'},
    {name:'Harcos SE',kind:'Hapkido'}];
  filteredOptions!: Observable<Club[]>;

  private _filter(value: string): Club[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: Club)  => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor(private clubTypeService: ClubTypeService) {
    this.subscription = clubTypeService.getClubType().subscribe(
      value => {
        console.log('Üzenet megkapva' + value)
        this.filterStockItems(value);
    });
  }

  ngOnInit(): void {
    this.fillControlList();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  displayFn(club: Club): string {
    return club && club.name ? club.name : '';
  }

  filterStockItems(filterValue: string) {
    //Clear formControl value
    this.myControl.reset();
    this.options = this.selectedOptions.filter((item: Club)  => item.kind === filterValue);
    this.fillControlList();
  }

  fillControlList() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

}
