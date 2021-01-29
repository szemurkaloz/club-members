import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFormArrayComponent } from './email-form-array.component';

describe('EmailFormArrayComponent', () => {
  let component: EmailFormArrayComponent;
  let fixture: ComponentFixture<EmailFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailFormArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
