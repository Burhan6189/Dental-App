// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyASvgC94g9HqHlJ__gxSmNeQDJPpN7LkOI",
    authDomain: "dental-test-notification.firebaseapp.com",
    projectId: "dental-test-notification",
    storageBucket: "dental-test-notification.appspot.com",
    messagingSenderId: "28933947426",
    appId: "1:28933947426:web:bd0c9e6957b6c7a5948a7b",
    measurementId: "G-3YFD87CD98"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});