import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDefaultFormComponent } from './personal-default-form.component';

describe('PersonalDefaultFormComponent', () => {
  let component: PersonalDefaultFormComponent;
  let fixture: ComponentFixture<PersonalDefaultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDefaultFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDefaultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
