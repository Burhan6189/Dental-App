"use client";
// import { messaging } from "../../firebase";
import React, { useEffect, useState } from "react";

const page = () => {
  // const [registrationToken, setRegistrationToken] = useState(null);

  // const sendPushNotification = async (title, body) => {
  //   if (!registrationToken) {
  //     console.error("No registration token available.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("/api/sendNotification", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         token: registrationToken,
  //         title,
  //         body,
  //       }),
  //     });

  //     if (response.ok) {
  //       console.log("Notification sent successfully");
  //     } else {
  //       console.error("Failed to send notification");
  //     }
  //   } catch (error) {
  //     console.error("Error sending notification:", error);
  //   }
  // };

  // useEffect(() => {
  //   const requestNotificationPermission = async () => {
  //     const permission = await Notification.requestPermission();

  //     if (permission === "granted") {
  //       console.log("Notification permission granted.");

  //       // Get FCM token
  //       getToken(messaging, { vapidKey: process.env.FIREBASE_PRIVATE_KEY_ID }) // Corrected to use the right environment variable
  //         .then((currentToken) => {
  //           if (currentToken) {
  //             console.log("FCM token:", currentToken);
  //             setRegistrationToken(currentToken);

  //             // Send the token to your server or save it for later use
  //           } else {
  //             console.log(
  //               "No registration token available. Request permission to generate one."
  //             );
  //           }
  //         })
  //         .catch((err) => {
  //           console.log("An error occurred while retrieving token. ", err);
  //         });

  //       // Handle incoming messages
  //       onMessage(messaging, (payload) => {
  //         console.log("Message received. ", payload);
  //         // Display the notification to the user
  //       });
  //     } else {
  //       console.log("Unable to get permission to notify.");
  //     }
  //   };

  //   requestNotificationPermission();
  // }, []);

  return (
    <div className="Home">
      <div className="L-Header">
        <img
          src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1724328624/Dental/br89tje5rehfzf7lnrhz.png"
          alt=""
        />
      </div>
      <div>
        <h1>WELCOME</h1>
        <a href="/login">
          <button>Log in</button>
        </a>
        <a href="/login">
          <button>Sign up</button>
        </a>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          veritatis exercitationem tempora voluptas delectus et, dolores
          distinctio
        </p>
        <h3>www.dentario.com</h3>
      </div>
    </div>
  );
};
export default page;
