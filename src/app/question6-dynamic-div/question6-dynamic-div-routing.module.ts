import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question6DynamicDivComponent } from './question6-dynamic-div.component';

const routes: Routes = [{ path: '', component: Question6DynamicDivComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Question6DynamicDivRoutingModule { }
