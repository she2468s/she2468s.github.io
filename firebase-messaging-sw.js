// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDZ88lZGpin2oTYGqO8YtTPqGZIcxWOgpA",
    authDomain: "chatroom-4bbe7.firebaseapp.com",
    projectId: "chatroom-4bbe7",
    storageBucket: "chatroom-4bbe7.appspot.com",
    messagingSenderId: "507339669544",
    appId: "1:507339669544:web:be474138d40ee4e83c751d",
    measurementId: "G-GRPWQ12LGT"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});