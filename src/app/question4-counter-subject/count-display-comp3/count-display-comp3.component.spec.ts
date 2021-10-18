import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDisplayComp3Component } from './count-display-comp3.component';

describe('CountDisplayComp3Component', () => {
  let component: CountDisplayComp3Component;
  let fixture: ComponentFixture<CountDisplayComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDisplayComp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDisplayComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
