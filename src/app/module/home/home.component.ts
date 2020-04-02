import { DATETIMEPICKERICON } from './../../core/enumeration/datetimepicker-icon.enum';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '@app/core/model/user.model';
import { UserService } from '@app/core/service/user.service';
import { first } from 'rxjs/operators';
import { Sweetalert2 } from '@app/core/helper/sweetalert2.helper';
import { SWEETALERT2ICON } from '@app/core/enumeration';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: User[];

  // Test form
  myform: FormGroup;
  username = new FormControl('', [Validators.required]);

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
    Sweetalert2.toast('Signed in successfully', SWEETALERT2ICON.Success);

    this.myform = new FormGroup({
      username: this.username
    });
    // $('#dtp').datetimepicker({
    //   icons: DATETIMEPICKERICON,
    //   showTodayButton: true
    // });
  }

  onSubmit(event) {
    console.log(event);
    // console.log(this.form.controls);
  }
}
