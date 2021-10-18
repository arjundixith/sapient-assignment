import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question5TablesortComponent } from './question5-tablesort.component';

describe('Question4TablesortComponent', () => {
  let component: Question5TablesortComponent;
  let fixture: ComponentFixture<Question5TablesortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Question5TablesortComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question5TablesortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
