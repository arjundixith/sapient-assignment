import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question4CounterSubjectComponent } from './question4-counter-subject.component';

const routes: Routes = [{ path: '', component: Question4CounterSubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Question4CounterSubjectRoutingModule { }
