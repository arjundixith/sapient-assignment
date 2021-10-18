import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question3CounterDecoraterComponent } from './question3-counter-decorater.component';

const routes: Routes = [{ path: '', component: Question3CounterDecoraterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Question3CounterDecoraterRoutingModule { }
