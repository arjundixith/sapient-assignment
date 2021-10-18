import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'e-commerce', loadChildren: () => import('./Question2-e-commerce/e-commerce.module').then(m => m.ECommerceModule) },
  { path: '', loadChildren: () => import('./Question1-imageposition/question1.module').then(m => m.Question1Module) },
  { path: 'counterDec', loadChildren: () => import('./question3-counter-decorater/question3-counter-decorater.module').then(m => m.Question3CounterDecoraterModule) },
  { path: 'counterSubject', loadChildren: () => import('./question4-counter-subject/question4-counter-subject.module').then(m => m.Question4CounterSubjectModule) },
  { path: 'tablesort', loadChildren: () => import('./question5-tablesort/question5-tablesort.module').then(m => m.Question5TablesortModule) },
  { path: 'dynamicDiv', loadChildren: () => import('./question6-dynamic-div/question6-dynamic-div.module').then(m => m.Question6DynamicDivModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
