import { TestBed } from '@angular/core/testing';

import { GreyCodeCounterService } from './grey-code-counter.service';

describe('GreyCodeCounterService', () => {
  let service: GreyCodeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreyCodeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
