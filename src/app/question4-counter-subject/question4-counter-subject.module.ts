import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Question4CounterSubjectRoutingModule } from './question4-counter-subject-routing.module';
import { Question4CounterSubjectComponent } from './question4-counter-subject.component';
import { CounterService } from './services/counter.service';
import { FormsModule } from '@angular/forms';
import { CountDownTimerComp1Component } from './count-down-timer-comp1/count-down-timer-comp1.component';
import { TimeDisplayComp2Component } from './time-display-comp2/time-display-comp2.component';
import { CountDisplayComp3Component } from './count-display-comp3/count-display-comp3.component';


@NgModule({
  declarations: [
    Question4CounterSubjectComponent,
    CountDownTimerComp1Component,
    TimeDisplayComp2Component,
    CountDisplayComp3Component
  ],
  imports: [
    CommonModule,
    Question4CounterSubjectRoutingModule,
    FormsModule
  ],
  providers: [CounterService]
})
export class Question4CounterSubjectModule { }
