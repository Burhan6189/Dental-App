// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASvgC94g9HqHlJ__gxSmNeQDJPpN7LkOI",
  authDomain: "dental-test-notification.firebaseapp.com",
  projectId: "dental-test-notification",
  storageBucket: "dental-test-notification.appspot.com",
  messagingSenderId: "28933947426",
  appId: "1:28933947426:web:bd0c9e6957b6c7a5948a7b",
  measurementId: "G-3YFD87CD98"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

let messaging;

if (typeof window !== 'undefined') {
  messaging = getMessaging(app);

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
  });
}

export { app, messaging };

