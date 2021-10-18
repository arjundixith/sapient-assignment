import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question4CounterSubjectComponent } from './question4-counter-subject.component';

describe('Question4CounterSubjectComponent', () => {
  let component: Question4CounterSubjectComponent;
  let fixture: ComponentFixture<Question4CounterSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question4CounterSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question4CounterSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
