import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumbersFormArrayComponent } from './phone-numbers-form-array.component';

describe('PhoneNumbersFormArrayComponent', () => {
  let component: PhoneNumbersFormArrayComponent;
  let fixture: ComponentFixture<PhoneNumbersFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumbersFormArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumbersFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
