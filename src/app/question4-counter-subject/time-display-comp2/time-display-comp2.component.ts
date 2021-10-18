import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-time-display-comp2',
  templateUrl: './time-display-comp2.component.html',
  styleUrls: ['./time-display-comp2.component.scss']
})
export class TimeDisplayComp2Component implements OnInit {
  timeSlot: any = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.counter$.subscribe((val: any) => {
      this.timeSlot = val.timeSlot;
    });
  }

}
