import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBranchTypeFormComponent } from './person-branch-type-form.component';

describe('PersonBranchTypeFormComponent', () => {
  let component: PersonBranchTypeFormComponent;
  let fixture: ComponentFixture<PersonBranchTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonBranchTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonBranchTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
