import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3CounterDecoraterComponent } from './question3-counter-decorater.component';

describe('Question3CounterDecoraterComponent', () => {
  let component: Question3CounterDecoraterComponent;
  let fixture: ComponentFixture<Question3CounterDecoraterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Question3CounterDecoraterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3CounterDecoraterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
