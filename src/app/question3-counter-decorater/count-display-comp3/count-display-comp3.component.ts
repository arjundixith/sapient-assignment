import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-display-comp3',
  templateUrl: './count-display-comp3.component.html',
  styleUrls: ['./count-display-comp3.component.scss']
})
export class CountDisplayComp3Component implements OnInit {
  @Input() totalPause: any;
  @Input() totalStart: any;
  constructor() { }

  ngOnInit(): void {
  }

}
