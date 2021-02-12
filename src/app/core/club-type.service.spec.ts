import { TestBed } from '@angular/core/testing';

import { ClubTypeService } from './club-type.service';

describe('ClubTypeService', () => {
  let service: ClubTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
