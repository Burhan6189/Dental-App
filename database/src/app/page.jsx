"use client";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../firebase";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [registrationToken, setRegistrationToken] = useState(null);

  const sendPushNotification = async (title, body) => {
    if (!registrationToken) {
      console.error("No registration token available.");
      return;
    }

    try {
      const response = await fetch("/api/sendNotification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: registrationToken,
          title,
          body,
        }),
      });

      if (response.ok) {
        console.log("Notification sent successfully");
      } else {
        console.error("Failed to send notification");
      }
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  useEffect(() => {
    const requestNotificationPermission = async () => {
      if (typeof window !== "undefined" && "serviceWorker" in navigator) {
        const permission = await Notification.requestPermission();
  
        if (permission === "granted") {
          console.log("Notification permission granted.");
  
          try {
            // Register the service worker and get the FCM token
            const serviceWorkerRegistration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
            const currentToken = await getToken(messaging, { 
              vapidKey: 'BGLXT4ptpoW3Uf4AdBgQSisQJl8p4_obvvXC925xltmnzVpHuPanLnaP_xPozTnl9yRSe8yszWesiCjlnvt6dts',
              serviceWorkerRegistration,
            });
  
            if (currentToken) {
              console.log("FCM token:", currentToken);
              setRegistrationToken(currentToken);
  
              // Send the token to your server or save it for later use
            } else {
              console.log(
                "No registration token available. Request permission to generate one."
              );
            }
          } catch (err) {
            console.error("An error occurred while retrieving token. ", err);
          }
  
          // Handle incoming messages
          onMessage(messaging, (payload) => {
            console.log("Message received. ", payload);
            // Display the notification to the user
          });
        } else {
          console.log("Unable to get permission to notify.");
        }
      } else {
        console.log("This browser doesn't support the required APIs.");
      }
    };
  
    requestNotificationPermission();
  }, []);

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
          <button className="login-btn">Log in</button>
        </a>
        <a href="/login">
          <button className="login-btn">Sign up</button>
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
      <button
        onClick={() =>
          sendPushNotification("Notification Title", "Notification Body")
        }
      >
        Send Notification
      </button>
    </div>
  );
};

export default Page;
