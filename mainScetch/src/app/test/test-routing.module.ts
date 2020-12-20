import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import { ButtonTestComponent } from './button-test/button-test.component';


const TEST_ROUTES: Routes = [
  {
    path: 'test',
    component: TestComponent,
    children: [
      {
        path: 'button-test',
        component: ButtonTestComponent
      },
    
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'button-test'
      }]
  }]

@NgModule({
  imports: [RouterModule.forChild(TEST_ROUTES)],
  exports: [RouterModule]
})
export class TestRoutingModule { }