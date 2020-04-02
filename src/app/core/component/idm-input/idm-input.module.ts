import { IdmInputComponent } from './idm-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [IdmInputComponent],
  exports: [IdmInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class IdmInputModule { }
