importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyBpbQF7fuNbq6pKUlF2tS4f0TcxdwVb2Zc',
    authDomain: 'angular-fcm-cf3de.firebaseapp.com',
    databaseURL: 'https://angular-fcm-cf3de.firebaseio.com',
    projectId: 'angular-fcm-cf3de',
    storageBucket: 'angular-fcm-cf3de.appspot.com',
    messagingSenderId: '508145880808',
    appId: '1:508145880808:web:35ad6091301d545190835d'
});
const messaging = firebase.messaging();