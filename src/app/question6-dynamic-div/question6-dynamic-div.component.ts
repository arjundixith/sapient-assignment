import { CdkVirtualForOf, CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-question6-dynamic-div',
  templateUrl: './question6-dynamic-div.component.html',
  styleUrls: ['./question6-dynamic-div.component.scss']
})
export class Question6DynamicDivComponent implements OnInit {

  constructor() {
    this.items.fill(0);
    this.items = this.items.map((x, i) => i);
  }

  ngOnInit(): void {
  }



  name = 'Angular 6';
  size = 100000;
  items = new Array(this.size);


  alertDiv(i: any) {
    alert(i + 1);
  }

}
