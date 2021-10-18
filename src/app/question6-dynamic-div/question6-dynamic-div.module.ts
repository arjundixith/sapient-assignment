import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Question6DynamicDivRoutingModule } from './question6-dynamic-div-routing.module';
import { Question6DynamicDivComponent } from './question6-dynamic-div.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    Question6DynamicDivComponent
  ],
  imports: [
    CommonModule,
    Question6DynamicDivRoutingModule,
    ScrollingModule
  ]
})
export class Question6DynamicDivModule { }
