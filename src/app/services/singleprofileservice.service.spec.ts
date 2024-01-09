import { TestBed } from '@angular/core/testing';

import { SingleprofileserviceService } from './singleprofileservice.service';

describe('SingleprofileserviceService', () => {
  let service: SingleprofileserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleprofileserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
