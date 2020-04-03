import { BootstrapMainType } from './../../type/bootstrap.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idm-badge',
  template: `
    <span class="badge badge-{{badge}} {{class}}" [class.badge-pill]="pill"><ng-content></ng-content></span>
  `,
  styleUrls: ['./idm-badge.component.scss']
})
export class IdmBadgeComponent implements OnInit {

  @Input() badge: BootstrapMainType = 'primary';
  @Input() pill = false;
  @Input() class = '';

  constructor() { }

  ngOnInit(): void {
  }

}
