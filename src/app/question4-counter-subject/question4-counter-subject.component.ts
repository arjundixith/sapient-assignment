import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';


@Component({
  selector: 'app-question4-counter-subject',
  templateUrl: './question4-counter-subject.component.html',
  styleUrls: ['./question4-counter-subject.component.scss']
})
export class Question4CounterSubjectComponent implements OnInit {
  counterEnteredValue: any = 0;
  counterStartStop: any = 0;
  pause: number = 0;
  start: any = 0;
  timeSlot: any = [];
  AllPausedValue: any = [];

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.counterPaused$.subscribe((val: any) => {
      debugger;
      this.AllPausedValue.push(val);

    });


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
      this.counterService.counter$.next({ counterEnteredValue: this.counterEnteredValue, pause: this.pause, start: this.start, timeSlot: this.timeSlot });
      // this.enteredValueSubmit = this.counterEnteredValue;
    }
  }

  pausedAt(val: any) {
    /*  if (val != 0)
       this.AllPausedValue.push(val); */
  }

  onReset() {
    /*  this.counterStartStop = 0;
     this.counterEnteredValue = 0;
     this.enteredValueSubmit = 0;
     this.pause = 0;
     this.start = 0;
     this.timeSlot = [];
     this.AllPausedValue = []; */
  }

}
