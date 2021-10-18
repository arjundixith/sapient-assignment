import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Question5TablesortRoutingModule } from './question5-tablesort-routing.module';
import { Question5TablesortComponent } from './question5-tablesort.component';


@NgModule({
  declarations: [
    Question5TablesortComponent
  ],
  imports: [
    CommonModule,
    Question5TablesortRoutingModule
  ]
})
export class Question5TablesortModule { }
