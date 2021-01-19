import { PersonalDefault } from './personal-default';

describe('PersonalDefault', () => {
  it('should create an instance', () => {
    expect(new PersonalDefault('Kovács József','Szabadegyháza')).toBeTruthy();
  });
});
