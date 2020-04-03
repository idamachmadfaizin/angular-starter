import { BootstrapMainType } from './../../type/bootstrap.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idm-badge-link',
  template: `
    <a [routerLink]="routerLink" class="badge badge-{{badge}} {{class}}"><ng-content></ng-content></a>
  `,
  styleUrls: ['./idm-badge.component.scss']
})
export class IdmBadgeLinkComponent implements OnInit {
  @Input() badge: BootstrapMainType = 'primary';
  @Input() routerLink: string | any[];
  @Input() class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
