import { Component, Input, OnInit } from '@angular/core';
import { BootstrapAlertType } from '../../type/bootstrap.type';

@Component({
  selector: 'idm-alert',
  templateUrl: './idm-alert.component.html',
  styleUrls: []
})
export class IdmAlertComponent implements OnInit {

  @Input() alert: BootstrapAlertType = 'primary';
  @Input() class: string;
  @Input() dismissible = false;

  constructor() { }

  ngOnInit(): void {
  }

}
