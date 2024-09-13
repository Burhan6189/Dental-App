"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // For handling click events

const MyCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Example events with images and descriptions
  const events = [
    {
      id: "1",
      title: "Root Canal - Courtney Henry",
      start: "2024-09-16T09:00:00",
      end: "2024-09-16T11:00:00",
      extendedProps: {
        doctor: "Dr. Wade Warren",
        imageUrl:
          "https://res.cloudinary.com/dgtk4rthy/image/upload/c_crop,g_auto,h_200,w_200/Dental/uifaul8xygqr1ml0ba6d.jpg",
        description: "Root Canal Treatment for Courtney Henry",
        contact: "+123456789",
        email: "courtney@example.com",
      },
    }
  ];

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        weekends={false}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        eventContent={(eventInfo) => (
          <div className="event-card">
            <img src={eventInfo.event.extendedProps.imageUrl} alt="Doctor" />
            <div className="event-details">
              <h5>{eventInfo.event.title}</h5>
            </div>
          </div>
        )}
      />

      {/* Popup for event details */}
      {selectedEvent && (
        <div className="event-popup">
          <div className="popup-content">
            <h3>{selectedEvent.title}</h3>
            <img src={selectedEvent.extendedProps.imageUrl} alt="Doctor" />
            <p>
              <strong>Doctor:</strong> {selectedEvent.extendedProps.doctor}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {selectedEvent.extendedProps.description}
            </p>
            <p>
              <strong>Contact:</strong> {selectedEvent.extendedProps.contact}
            </p>
            <p>
              <strong>Email:</strong> {selectedEvent.extendedProps.email}
            </p>
            <button className="calendar-popup-btn" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
