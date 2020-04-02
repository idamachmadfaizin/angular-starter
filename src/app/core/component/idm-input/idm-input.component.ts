import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'idm-input',
  templateUrl: './idm-input.component.html',
  styleUrls: ['./idm-input.component.scss']
})
export class IdmInputComponent implements OnInit {
  @Input('iformControl')
  set _formControlName(data: FormControl) { this.formControl = data; }

  @Input('itype')
  set _type(data: 'button' | 'checkbox' | 'color' | 'email' | 'file' | 'hidden' | 'image' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'date' | 'datetime-local' | 'month') {
    this.type = data;
  }

  @Input('ilabel')
  set _label(data: string) { this.label = data; }

  @Input('iid')
  set _id(data: string) { this.id = data; }

  @Input('iclass')
  set _class(data: string) { this.class = data; }

  @Input('idisabled')
  set _disabled(data: boolean) { if (data === true) { this.disabled = data; } }

  @Input('ireadonly')
  set _readonly(data: boolean) { if (data === true) { this.readonly = data; } }

  @Input('ioptions')
  set _options(data: { key: string, value: string }[]) { this.options = data; }

  formControl = new FormControl();
  label: string;
  id: string;
  class = 'form-control';
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' = 'text';
  disabled: boolean;
  readonly: boolean;
  options: { key: string, value: string }[];

  constructor() { }

  ngOnInit(): void {
  }

  validation(type: 'isvalid' | 'invalid'): boolean {
    if (type === 'invalid') {
      return this.formControl.invalid && (this.formControl.dirty || this.formControl.touched) ? true : false;
    }
    if (type === 'isvalid') {
      return this.formControl.valid ? true : false;
    }
  }

}
