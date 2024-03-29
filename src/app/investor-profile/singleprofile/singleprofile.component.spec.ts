import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleprofileComponent } from './singleprofile.component';

describe('SingleprofileComponent', () => {
  let component: SingleprofileComponent;
  let fixture: ComponentFixture<SingleprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleprofileComponent]
    });
    fixture = TestBed.createComponent(SingleprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
