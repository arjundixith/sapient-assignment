import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-count-down-timer-comp1',
  templateUrl: './count-down-timer-comp1.component.html',
  styleUrls: ['./count-down-timer-comp1.component.scss']
})
export class CountDownTimerComp1Component implements OnInit {
  enteredValue: any;
  @Output() pausedAt = new EventEmitter();
  counterIntercal: any;
  currentValue: any;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.counter$.subscribe((val: any) => {
      //this.enteredValue = val.counterEnteredValue;

      this.currentValue = val;
      if (val.counterEnteredValue != undefined) {
        if (val.counterEnteredValue == 0) {
          this.enteredValue = 0;
          return;
        }
      }
      //start
      if (this.enteredValue != val.counterEnteredValue && val.start > val.pause) {
        if (this.enteredValue == undefined) {
          this.enteredValue = val.counterEnteredValue;
        }

        this.counterIntercal = setInterval(() => {
          if (this.enteredValue > 0)
            this.enteredValue = this.enteredValue - 1;
        }, 1000);
      }
      else {
        //pause
        //this.pausedAt.emit(this.enteredValue);
        this.counterService.counterPaused$.next(this.enteredValue);
        clearInterval(this.counterIntercal);
      }
    });



  }



}
