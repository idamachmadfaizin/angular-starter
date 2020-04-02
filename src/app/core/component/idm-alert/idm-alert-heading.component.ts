import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'idm-alert-heading',
  template: `
    <div [outerHTML]="outerHtml"></div>
  `,
  styles: [
  ],
})
export class IdmAlertHeadingComponent implements OnInit {

  @Input() heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3';
  @Input() text: string;
  @Input() class = '';

  outerHtml: string;
  constructor() { }

  ngOnInit(): void {
    this.outerHtml = `<${this.heading} class="alert-heading ${this.class}">${this.text}</${this.heading}>`;
  }

}
