import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonOtherFormComponent } from './person-other-form.component';

describe('PersonOtherFormComponent', () => {
  let component: PersonOtherFormComponent;
  let fixture: ComponentFixture<PersonOtherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonOtherFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonOtherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
