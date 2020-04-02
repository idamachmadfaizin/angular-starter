import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'idm-alert-link',
  template: `
    <a [routerLink]="routerLink" class="alert-link {{class}}"><ng-content></ng-content></a>
  `,
  styles: [
  ],
})
export class IdmAlertLinkComponent implements OnInit {

  @Input()
  routerLink: string | any[];

  @Input() class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
