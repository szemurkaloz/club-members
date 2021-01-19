import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonConnectionComponent } from './person-connection.component';

describe('PersonConnectionComponent', () => {
  let component: PersonConnectionComponent;
  let fixture: ComponentFixture<PersonConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
