import { IdmInputComponent } from './idm-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IdmAlertComponent } from './idm-alert/idm-alert.component';



@NgModule({
  declarations: [IdmInputComponent, IdmAlertComponent],
  exports: [IdmInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class IdmInputModule { }
