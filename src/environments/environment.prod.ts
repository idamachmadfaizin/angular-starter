import { IConfiguration } from '@app/core/interface/iconfiguration';
export const environment: IConfiguration = {
  production: true,
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