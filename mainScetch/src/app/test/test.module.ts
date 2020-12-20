import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonTestComponent } from './button-test/button-test.component';



@NgModule({
  declarations: [
    ButtonTestComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: []
})
export class TestModule { }
