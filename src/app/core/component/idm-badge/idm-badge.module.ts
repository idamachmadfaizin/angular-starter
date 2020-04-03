import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdmBadgeComponent } from './idm-badge.component';
import { IdmBadgeLinkComponent } from './idm-badge-link.component';

@NgModule({
  declarations: [IdmBadgeComponent, IdmBadgeLinkComponent],
  exports: [IdmBadgeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class IdmBadgeModule { }
