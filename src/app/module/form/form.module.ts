import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IdmInputModule } from '@app/core/component/idm-input/idm-input.module';
import { IdmAlertModule } from '@app/core/component/idm-alert/idm-alert.module';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,

    CoreModule,
    IdmInputModule,
    IdmAlertModule
  ]
})
export class FormModule { }
