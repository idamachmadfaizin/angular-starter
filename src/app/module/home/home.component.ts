import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/model/user.model';
import { UserService } from '@app/core/service/user.service';
import { first } from 'rxjs/operators';
import { Sweetalert2 } from '@app/core/helper/sweetalert2.helper';
import { Sweetalert2Icon } from '@app/core/enumeration/sweetalert2-icon.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
    Sweetalert2.toast('Signed in successfully', Sweetalert2Icon.Success);
  }

}
