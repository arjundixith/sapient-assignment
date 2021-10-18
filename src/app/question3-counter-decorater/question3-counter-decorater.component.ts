import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question3-counter-decorater',
  templateUrl: './question3-counter-decorater.component.html',
  styleUrls: ['./question3-counter-decorater.component.scss']
})
export class Question3CounterDecoraterComponent implements OnInit {
  counterEnteredValue: any = 0;
  counterStartStop: any = 0;
  pause: number = 0;
  start: any = 0;
  enteredValueSubmit: any;
  timeSlot: any = [];
  AllPausedValue: any = [];

  constructor(cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }



  onStartPause() {
    if (this.counterEnteredValue > 0) {
      this.counterStartStop = this.counterStartStop + 1;
      if (this.counterStartStop % 2 == 0) {
        this.pause = this.pause + 1;
        this.timeSlot.push({ date: `${new Date()}`, text: 'Paused at' });
      } else {
        this.start = this.start + 1;
        this.timeSlot.push({ date: `${new Date()}`, text: 'Started at' });
      }
      this.enteredValueSubmit = this.counterEnteredValue;
    }
  }

  pausedAt(val: any) {
    if (val != 0)
      this.AllPausedValue.push(val);
  }

  onReset() {
    this.counterStartStop = 0;
    this.counterEnteredValue = 0;
    this.enteredValueSubmit = 0;
    this.pause = 0;
    this.start = 0;
    this.timeSlot = [];
    this.AllPausedValue = [];
  }

}
