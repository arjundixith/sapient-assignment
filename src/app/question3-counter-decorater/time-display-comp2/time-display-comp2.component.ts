import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display-comp2',
  templateUrl: './time-display-comp2.component.html',
  styleUrls: ['./time-display-comp2.component.scss']
})
export class TimeDisplayComp2Component implements OnInit {
  @Input() timeSlot: any;
  constructor() { }

  ngOnInit(): void {
  }

}
