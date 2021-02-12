import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSortNameComponent } from './club-sort-name.component';

describe('ClubSortNameComponent', () => {
  let component: ClubSortNameComponent;
  let fixture: ComponentFixture<ClubSortNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSortNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSortNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
