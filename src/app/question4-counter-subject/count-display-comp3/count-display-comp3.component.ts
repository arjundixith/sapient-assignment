import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-count-display-comp3',
  templateUrl: './count-display-comp3.component.html',
  styleUrls: ['./count-display-comp3.component.scss']
})
export class CountDisplayComp3Component implements OnInit {
  totalPause: any = 0;
  totalStart: any = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.counter$.subscribe((val: any) => {
      this.totalPause = val.pause;
      this.totalStart = val.start;
    });
  }

}
