import { Component, OnInit } from '@angular/core';
import { User } from './core/model/user.model';
import { Router } from '@angular/router';
import { AuthenticationService } from './core/authentication/authentication.service';
import { Role } from './shared/enum/role.enum';
import { FirebaseService } from './core/service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private firebaseService: FirebaseService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
  ngOnInit(): void {
    this.firebaseService.getPermission();
    this.firebaseService.monitorRefresh();
    this.firebaseService.receiveMessages();
  }

    get isAdmin() {
      return this.currentUser && this.currentUser.role === Role.Admin;
  }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
