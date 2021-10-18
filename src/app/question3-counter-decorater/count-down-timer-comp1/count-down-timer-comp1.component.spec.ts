import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerComp1Component } from './count-down-timer-comp1.component';

describe('CountDownTimerComp1Component', () => {
  let component: CountDownTimerComp1Component;
  let fixture: ComponentFixture<CountDownTimerComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
