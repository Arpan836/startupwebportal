import { TestBed } from '@angular/core/testing';

import { MenubindService } from './menubind.service';

describe('MenubindService', () => {
  let service: MenubindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenubindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
