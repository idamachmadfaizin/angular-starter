import { Component, OnInit, Input } from '@angular/core';
import { FormControlName, FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'core-input',
  templateUrl: './core-input.component.html',
  styleUrls: ['./core-input.component.scss']
})
export class CoreInputComponent implements OnInit {
  @Input('iformControl')
  set _formControlName(data: FormControl) { console.log('form', data); this.formControl = data || new FormControl(); }

  @Input('ilabel')
  set _label(data: string) { this.label = data; }

  @Input('iid')
  set _id(data: string) { this.id = data; }

  @Input('iclass')
  set _class(data: string) { this.class = data; }

  //
  @Input('ivalue')
  set _value(data: string | number | boolean | Date | Array<any> | any) {
    this.value = data;
  }

  @Input('irequired')
  set _required(data: boolean) { this.required = data || false; }

  @Input('itype')
  set _type(data: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week') {
    this.type = data || 'text';
  }

  @Input('idisabled')
  set _disabled(data: boolean) { this.disabled = data || false; }

  @Input('ireadonly')
  set _readonly(data: boolean) { this.readonly = data || false; }

  @Input('ioptions')
  set _options(data: { key: string, value: string }[]) { this.options = data; }

  formControl = new FormControl();
  label: string;
  id: string;
  class: string;
  value: string | number | boolean | Date | Array<any> | any;
  required: boolean;
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
  disabled: boolean;
  readonly: boolean;
  options: { key: string, value: string }[];

  constructor() { }

  ngOnInit(): void {
  }

}
