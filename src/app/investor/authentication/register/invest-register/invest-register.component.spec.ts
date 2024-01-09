import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestRegisterComponent } from './invest-register.component';

describe('InvestRegisterComponent', () => {
  let component: InvestRegisterComponent;
  let fixture: ComponentFixture<InvestRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestRegisterComponent]
    });
    fixture = TestBed.createComponent(InvestRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
