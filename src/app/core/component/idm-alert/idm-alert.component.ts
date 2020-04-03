import { Component, Input, OnInit } from '@angular/core';
import { BootstrapMainType } from '../../type/bootstrap.type';

@Component({
  selector: 'idm-alert',
  templateUrl: './idm-alert.component.html',
  styleUrls: ['./idm-alert.component.scss']
})
export class IdmAlertComponent implements OnInit {

  @Input() alert: BootstrapMainType = 'primary';
  @Input() class: string;
  @Input() dismissible = false;

  constructor() { }

  ngOnInit(): void {
  }

}
