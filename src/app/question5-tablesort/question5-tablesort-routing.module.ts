import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question5TablesortComponent } from './question5-tablesort.component';

const routes: Routes = [{ path: '', component: Question5TablesortComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Question5TablesortRoutingModule { }
