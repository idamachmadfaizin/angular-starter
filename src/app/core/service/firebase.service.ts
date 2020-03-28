import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = firebase.initializeApp(environment.firebaseConfig);
  private messaging = this.app.messaging();

  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  /**
   * Get permission to send messages
   */
  getPermission() {
    Notification.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken();
      })
      .then(token => {
        console.log(token);
      })
      .catch(err => console.error(err, 'Unable to get permission!'));
  }

  /**
   * Listen for token refresh
   */
  monitorRefresh() {
    this.messaging.onTokenRefresh(() => {
      this.messaging.getToken()
        .then(refreshedToken => {
          console.log('Token refreshed.', refreshedToken);
        })
        .catch(err => console.log(err, 'Unable to retrieve new token'));
    });
  }

  /**
   * Show message when app is open
   */
  receiveMessages() {
    this.messaging.onMessage(payload => {
      console.log('Message received. ', payload);
      this.messageSource.next(payload);
    });
  }
}
