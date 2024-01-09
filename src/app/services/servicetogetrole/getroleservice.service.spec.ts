import { TestBed } from '@angular/core/testing';

import { GetroleserviceService } from './getroleservice.service';

describe('GetroleserviceService', () => {
  let service: GetroleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetroleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
