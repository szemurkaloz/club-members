import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonalDefaultFormComponent } from './personal-default-form.component';

describe('PersonalDefaultFormComponent', () => {
  let component: PersonalDefaultFormComponent;
  let fixture: ComponentFixture<PersonalDefaultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDefaultFormComponent ],
      imports: [
        //TypeaheadModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
      ]
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
