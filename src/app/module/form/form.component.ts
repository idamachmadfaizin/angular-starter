import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  username = new FormControl(null, [Validators.required, Validators.minLength(5)]);
  email = new FormControl(null, [Validators.required, Validators.email]);
  password = new FormControl(null, [Validators.required, Validators.minLength(6)]);
  testForm = new FormGroup({
    username: this.username,
    email: this.email,
    password: this.password
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitMethod(event) {
    console.log(event);
  }
}
