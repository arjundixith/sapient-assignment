import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Question3CounterDecoraterRoutingModule } from './question3-counter-decorater-routing.module';
import { Question3CounterDecoraterComponent } from './question3-counter-decorater.component';
import { CountDownTimerComp1Component } from './count-down-timer-comp1/count-down-timer-comp1.component';
import { FormsModule } from '@angular/forms';
import { CountDisplayComp3Component } from './count-display-comp3/count-display-comp3.component';
import { TimeDisplayComp2Component } from './time-display-comp2/time-display-comp2.component';


@NgModule({
  declarations: [
    Question3CounterDecoraterComponent,
    CountDownTimerComp1Component,
    CountDisplayComp3Component,
    TimeDisplayComp2Component,
  ],
  imports: [
    CommonModule,
    Question3CounterDecoraterRoutingModule,
    FormsModule
  ]
})
export class Question3CounterDecoraterModule { }
