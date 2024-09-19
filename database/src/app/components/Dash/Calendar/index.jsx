"use client";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // For handling click events
import { IoMdClose } from "react-icons/io";

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [appointments, setappointments] = useState([]);
  const events = [];

  useEffect(() => {
    const fun = async () => {
      const data = await fetch("/api/appoint");
      const jsondata = await data.json();
      setappointments(jsondata);
    };
    fun();
  }, []);

  // Example events with images and descriptions

  appointments.map((items) => {
    events.push({
      id: items?._id,
      title: items?.PatientName,
      start: `${items?.Date}`,
      end: `${items?.Date}`,
      extendedProps: {
        treatment: items?.Treatment,
        doctor: items?.DoctorName,
        starttime: items?.Time,
        endtime:
          Number(items?.Time.split(" ")[0].split(":")[0]) +
          1 +
          ":" +
          items?.Time.split(" ")[0].split(":")[1],
        imageUrl: items?.Image,
        description: items?.Treatment_Desc,
        contact: items?.Phone,
        email: items?.Email,
      },
    });
  });


  // const events = [
  //   {
  //     id: "1",
  //     title: "Jerome Bell",
  //     start: "2024-09-16T09:00:00",
  //     end: "2024-09-16T11:00:00",
  //     extendedProps: {
  //       doctor: "Dr. Wade Warren",
  //       imageUrl:
  //         "https://res.cloudinary.com/dgtk4rthy/image/upload/c_crop,g_auto,h_200,w_200/Dental/uifaul8xygqr1ml0ba6d.jpg",
  //       description: "Root Canal Treatment for Courtney Henry",
  //       contact: "+123456789",
  //       email: "courtney@example.com",
  //     },
  //   },
  //   {
  //     id: "2",
  //     title: "Jerome Bell222",
  //     start: "2024-09-16T09:00:00",
  //     end: "2024-09-16T11:00:00",
  //     extendedProps: {
  //       doctor: "Dr. Wade Warren",
  //       imageUrl:
  //         "https://res.cloudinary.com/dgtk4rthy/image/upload/c_crop,g_auto,h_200,w_200/Dental/uifaul8xygqr1ml0ba6d.jpg",
  //       description: "Root Canal Treatment for Courtney Henry",
  //       contact: "+123456789",
  //       email: "courtney@example.com",
  //     },
  //   },
  //   {
  //     id: "3",
  //     title: "Jerome Bell",
  //     start: "2024-09-16T10:00:00",
  //     end: "2024-09-16T12:00:00",
  //     extendedProps: {
  //       doctor: "Dr. Wade Warren",
  //       imageUrl:
  //         "https://res.cloudinary.com/dgtk4rthy/image/upload/c_crop,g_auto,h_200,w_200/Dental/uifaul8xygqr1ml0ba6d.jpg",
  //       description: "Root Canal Treatment for Courtney Henry",
  //       contact: "+123456789",
  //       email: "courtney@example.com",
  //     },
  //   },
  //   {
  //     id: "4",
  //     title: "Jerome Bell",
  //     start: "2024-09-16T012:00:00",
  //     end: "2024-09-16T14:00:00",
  //     extendedProps: {
  //       doctor: "Dr. Wade Warren",
  //       imageUrl:
  //         "https://res.cloudinary.com/dgtk4rthy/image/upload/c_crop,g_auto,h_200,w_200/Dental/uifaul8xygqr1ml0ba6d.jpg",
  //       description: "Root Canal Treatment for Courtney Henry",
  //       contact: "+123456789",
  //       email: "courtney@example.com",
  //     },
  //   },
  //   {
  //     id: "4",
  //     title: "Jerome Bell",
  //     start: "2024-09-17T09:00:00",
  //     end: "2024-09-17T11:00:00",
  //     extendedProps: {
  //       doctor: "Dr. Wade Warren",
  //       imageUrl:
  //         "https://res.cloudinary.com/dgtk4rthy/image/upload/c_crop,g_auto,h_200,w_200/Dental/uifaul8xygqr1ml0ba6d.jpg",
  //       description: "Root Canal Treatment for Courtney Henry",
  //       contact: "+123456789",
  //       email: "courtney@example.com",
  //     },
  //   },
  // ];

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
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"91vh"}
        eventContent={(eventInfo) => (
          <>
            <div className="event-card">
              <div className="inner-flex">
                <img
                  src={eventInfo.event.extendedProps.imageUrl}
                  alt="Doctor"
                />
                <h4>{eventInfo.event.title}</h4>
              </div>
              {/* <div className="inner-flex">
                <h5>{eventInfo.event.extendedProps.treatment}</h5>
              </div> */}
              <div className="inner-flex">
                <h5>
                  {eventInfo.event.extendedProps.starttime +
                    " - " +
                    eventInfo.event.extendedProps.endtime}
                </h5>
              </div>
            </div>
              {/* <div className="more-appointment">
                <button>8 more</button>
              </div> */}
          </>
        )}
      />

      {/* Popup for event details */}
      {selectedEvent && (
        <div className="event-popup">
          <div className="close-btn">
            <button className="calendar-popup-btn" onClick={handleClosePopup}>
              <IoMdClose />
            </button>
          </div>
          <div className="popup-content">
            <div className="profile-flex">
              <img src={selectedEvent.extendedProps.imageUrl} alt="Doctor" />
              <h3>{selectedEvent.title}</h3>
            </div>
            <div className="profile-flex">
              <p>
                <strong>Doctor:</strong> {selectedEvent.extendedProps.doctor}
              </p>
              <p>
                <strong>Time: </strong>
                {selectedEvent.extendedProps.starttime} -{" "}
                {selectedEvent.extendedProps.endtime}
              </p>
            </div>
            <p>
              <strong>Contact:</strong> {selectedEvent.extendedProps.contact}
            </p>
            <p>
              <strong>Email:</strong> {selectedEvent.extendedProps.email}
            </p>
            <p>
              <strong>Treatment:</strong>{" "}
              {selectedEvent.extendedProps.treatment}
            </p>
            <p>
              <strong>Description:</strong>
              {selectedEvent.extendedProps.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
