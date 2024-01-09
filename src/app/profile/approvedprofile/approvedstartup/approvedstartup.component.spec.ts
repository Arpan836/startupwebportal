import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedstartupComponent } from './approvedstartup.component';

describe('ApprovedstartupComponent', () => {
  let component: ApprovedstartupComponent;
  let fixture: ComponentFixture<ApprovedstartupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedstartupComponent]
    });
    fixture = TestBed.createComponent(ApprovedstartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
