// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IConfiguration } from '@app/core/interface';

export const environment: IConfiguration = {
  production: false,
  baseUrl: 'http://localhost:4000',
  firebaseConfig: {
    apiKey: 'AIzaSyBpbQF7fuNbq6pKUlF2tS4f0TcxdwVb2Zc',
    authDomain: 'angular-fcm-cf3de.firebaseapp.com',
    databaseURL: 'https://angular-fcm-cf3de.firebaseio.com',
    projectId: 'angular-fcm-cf3de',
    storageBucket: 'angular-fcm-cf3de.appspot.com',
    messagingSenderId: '508145880808',
    appId: '1:508145880808:web:35ad6091301d545190835d'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
