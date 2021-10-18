import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question6DynamicDivComponent } from './question6-dynamic-div.component';

describe('Question6DynamicDivComponent', () => {
  let component: Question6DynamicDivComponent;
  let fixture: ComponentFixture<Question6DynamicDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question6DynamicDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question6DynamicDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
