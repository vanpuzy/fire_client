importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA0d2CsXN69UChoEjFWFuLRl4fB_5j8Q00",
  authDomain: "hpnrttest.firebaseapp.com",
  projectId: "hpnrttest",
  storageBucket: "hpnrttest.firebasestorage.app",
  messagingSenderId: "861126703238",
  appId: "1:861126703238:web:b720f5a01a8b2da8403907",
  measurementId: "G-4RWX77NRJM"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message received', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
