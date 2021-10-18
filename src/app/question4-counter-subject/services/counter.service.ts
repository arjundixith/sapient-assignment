import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter$: any = new Subject();
  counterPaused$ = new Subject();
  constructor() {

  }


}
