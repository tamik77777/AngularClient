import { TestBed } from '@angular/core/testing';

import { TreatsService } from './treats.service';

describe('TreatsService', () => {
  let service: TreatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
