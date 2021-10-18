import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDisplayComp2Component } from './time-display-comp2.component';

describe('TimeDisplayComp2Component', () => {
  let component: TimeDisplayComp2Component;
  let fixture: ComponentFixture<TimeDisplayComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDisplayComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDisplayComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
