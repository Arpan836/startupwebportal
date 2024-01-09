import { TestBed } from '@angular/core/testing';

import { AllprofileserviceService } from './allprofileservice.service';

describe('AllprofileserviceService', () => {
  let service: AllprofileserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllprofileserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
