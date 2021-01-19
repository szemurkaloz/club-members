import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonLocationFormComponent } from './person-location-form.component';

describe('PersonLocationFormComponent', () => {
  let component: PersonLocationFormComponent;
  let fixture: ComponentFixture<PersonLocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonLocationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
