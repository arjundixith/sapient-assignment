import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count-down-timer-comp1',
  templateUrl: './count-down-timer-comp1.component.html',
  styleUrls: ['./count-down-timer-comp1.component.scss']
})
export class CountDownTimerComp1Component implements OnInit, OnChanges {
  @Input() counterEnteredValue: any = 0;
  @Input() pause: any;
  @Input() start: any;
  enteredValue: any = 0;
  counterIntercal: any;
  @Output() pausedAt = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {
    // this.enteredValue = this.counterEnteredValue;
  }

  ngOnChanges(changes: SimpleChanges) {

    //reset data
    if (changes.counterEnteredValue != undefined) {
      if (changes.counterEnteredValue.currentValue == 0) {
        this.enteredValue = 0;
        return;
      }
    }


    //start
    if (((changes.hasOwnProperty('start') && changes.start.currentValue >= 2)) || ((changes.hasOwnProperty('start') && changes.counterEnteredValue.currentValue != undefined))) {
      if (changes.start.previousValue == 0) {
        this.enteredValue = this.counterEnteredValue;
      }
      this.counterIntercal = setInterval(() => {
        if (this.enteredValue > 0)
          this.enteredValue = this.enteredValue - 1;
      }, 1000);
    } else {
      //pause
      this.pausedAt.emit(this.enteredValue);
      clearInterval(this.counterIntercal);
    }
  }


}
