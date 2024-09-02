
'use client';
import { messaging } from "../../firebase";
import React, { useEffect, useState } from "react";


const page = () => {


  const [registrationToken, setRegistrationToken] = useState(null);



  const sendPushNotification = async (title, body) => {
    if (!registrationToken) {
      console.error('No registration token available.');
      return;
    }

    try {
      const response = await fetch('/api/sendNotification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: registrationToken,
          title,
          body,
        }),
      });

      if (response.ok) {
        console.log('Notification sent successfully');
      } else {
        console.error('Failed to send notification');
      }
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };


  useEffect(() => {
    const requestNotificationPermission = async () => {
      const permission = await Notification.requestPermission();

      if (permission === 'granted') {
        console.log('Notification permission granted.');

        // Get FCM token
        getToken(messaging, { vapidKey: process.env.FIREBASE_PRIVATE_KEY_ID })  // Corrected to use the right environment variable
          .then((currentToken) => {
            if (currentToken) {
              console.log('FCM token:', currentToken);
              setRegistrationToken(currentToken);

              // Send the token to your server or save it for later use
            } else {
              console.log('No registration token available. Request permission to generate one.');
            }
          })
          .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });

        // Handle incoming messages
        onMessage(messaging, (payload) => {
          console.log('Message received. ', payload);
          // Display the notification to the user
        });
      } else {
        console.log('Unable to get permission to notify.');
      }
    };

    requestNotificationPermission();
  }, []);

  return (
    <div className="Login-Signup-Page-BG">
      <div className="Logo"> 
        <img src="http://www.fhgroupoc.com/svg/fhlogog.svg" alt="Logo" />
      </div>
      <div className="Login-Signup-Page-Button">
        <h3>WELCOME</h3>
        <button>
          <a href="/Login">Login</a>
        </button>
        <button>
          <a href="/Signup">Sign up</a>
        </button>
      </div>
      <div className="Login-Signup-Page-Texts">
        <p>
          Limited Time Offer. Get Scaling & Polishing By Hygienist For Just £75.
          Incl. Book Now. Book Online Your Consultation Now Or Call Us Now.
          Friendly Dental Team
        </p>
        <h3>www.confidentdp.com</h3>
      </div>
      <button 
        onClick={() => sendPushNotification(
       
          "Notification Title",
          "Notification Body"
        )}
      >
        Send Notification
      </button>
    </div>
  );
};
export default page;
