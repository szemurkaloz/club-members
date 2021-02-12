import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRegistrationFormComponent } from './person-registration-form.component';

describe('PersonRegistrationFormComponent', () => {
  let component: PersonRegistrationFormComponent;
  let fixture: ComponentFixture<PersonRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
