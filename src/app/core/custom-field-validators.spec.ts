import { inject } from '@angular/core/testing';
import { FormControl, FormBuilder } from '@angular/forms';
import { contentAndNumberValidator } from './custom-field-validators';

//https://stackoverflow.com/questions/49162404/mocking-a-parent-formgroup-via-input-in-jasmine
describe('NeedBothField', () => {

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(Step2Component);
    component = fixture.componentInstance;

    /* This is where we can simulate / test our component
       and pass in a value for formGroup where it would've otherwise
       required it from the parent
    */
    component.formGroup = fb.group({
      name:  ['Other Name', Validators.required],
      email: ['', Validators.required]
    });
    fixture.detectChanges();
  }));

  let fb: FormBuilder;
  let personConnection = fb.group({
    phones: fb.array([ this.fb.group({
      comment: new FormControl(null),
      number: new FormControl(null)
    })
    ])
  }, { validators: NeedBothField });
  it('should create an instance', () => {
    expect(new contentAndNumberValidator()).toBeTruthy();
  });
});
