import { RouterModule } from '@angular/router';
import { IdmAlertComponent } from './idm-alert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdmAlertLinkComponent } from './idm-alert-link.component';
import { IdmAlertHeadingComponent } from './idm-alert-heading.component';

@NgModule({
  declarations: [IdmAlertComponent, IdmAlertLinkComponent, IdmAlertHeadingComponent],
  exports: [IdmAlertComponent, IdmAlertLinkComponent, IdmAlertHeadingComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class IdmAlertModule { }
