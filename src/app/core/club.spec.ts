import { Club } from './club';

describe('Club', () => {
  it('should create an instance', () => {
    expect(new Club('Máté SE','Tae-Kwon Do')).toBeTruthy();
  });
});
