"use client";
import React, { useRef, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// Utility function to generate events for all future dates
function generateFutureEvents() {
  const events = [];
  const currentDate = new Date();
  const daysToGenerate = 30; // Generate events for the next 365 days
  const counts = 8;
  for (let i = 0; i < daysToGenerate; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);

    events.push({
      id: `event-${i}`, // Unique ID for each event
      title: `${counts}  Available `, //  on ${date.toDateString()}`,
      date: date.toISOString().split("T")[0], // Format as YYYY-MM-DD
      // extendedProps: {
      //   customValue: `Custom value for ${date.toDateString()}`,
      // },
    });
  }

  return {
    events,
    counts,
  };
}

function MyCalendar(context) {
  const calendarRef = useRef(null);
  const events = generateFutureEvents().events;
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const { doctorname } = context.searchParams;

  const { counts } = generateFutureEvents();
  const router = useRouter();
  const [selecteddate, setselectedate] = useState("");
  const newdata = new Date();
  const todaydate = newdata.toISOString().split("T").at(0);

  const handleEventDidMount = (info) => {
    const eventDate = new Date(info.event.startStr);
    const dayOfWeek = eventDate.getDay();

    // Check if the event is on Saturday (6) or Sunday (0)
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      // Hide the title by setting the innerHTML of the element to an empty string
      const eventTitleElement = info.el.querySelector(".fc-event-title");
      if (eventTitleElement) {
        eventTitleElement.style.display = "none"; // This ensures that the title is not displayed
      }
    }
  };
  console.log(selecteddate);

  const mydong = ["2024-09-12", "2024-09-13", "2024-09-18", "2024-09-25"];

  useEffect(() => {
    // Access FullCalendar instance
    const calendarApi = calendarRef.current.getApi();

    // Find the event for the specific date you want to change (e.g., 2024-09-01)

    if (doctorname == "Dr Bushra") {
      mydong.map((items) => {
        const eventToUpdate = calendarApi
          .getEvents()
          .find((event) => event.startStr === items);

        if (eventToUpdate) {
          // Update the event's title and custom value
          eventToUpdate.setProp("title", `only ${counts - 1} available`);
          eventToUpdate.setExtendedProp("customValue", "Updated Custom Value");
        }
      });
    }
  }, [mydong]);

  const getTimeSlotsForDate = (date) => {
    // Here you can have logic to generate or fetch available time slots for the date
    return ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"]; // Example time slots
  };

  const forwardfun = (event) => {
    event.preventDefault();
    if (doctorname !== "" && selecteddate !== "") {
      router.push(`/time?doctorname=${doctorname}&&date=${selecteddate}`);
    } else {
      toast.error("Please Select Date");
    }
  };

  const handleDateClick = (date) => {
    if (
      date.dateStr >= todaydate &&
      date.date.getDay() !== 0 &&
      date.date.getDay() !== 6
    ) {
      const selected = date.dateStr;
      setselectedate(selected);
      // Load available times for the selected date
      const times = getTimeSlotsForDate(selected);
      setAvailableTimes(times);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="Calendar-Section-Main">
          <h2>Select Appointment Date</h2>
          <FullCalendar
            ref={calendarRef} // Reference to FullCalendar instance
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "",
            }}
            dayCellClassNames={(date) => {
              const dayOfWeek = date.date.getDay();
              const formattedDate = date.date.toISOString().split("T")[0];
              if (dayOfWeek === 6 || dayOfWeek === 0) {
                return "fc-day-disabled";
              }
              // if (formattedDate === "2024-08-27") {
              //   return "fc-day-disabled"
              // }
              if (date.date < new Date()) {
                return "fc-day-disabled";
              }
              return "";
            }}
            height={"90vh"}
            dateClick={handleDateClick}
            selectAllow={(selectInfo) => {
              const today = new Date().setHours(0, 0, 0, 0); // Today's date without time
              const startDate = selectInfo.start.getTime(); // Start date of the selection
              const dayOfWeek = selectInfo.start.getDay(); // Day of the week (0=Sunday, 6=Saturday)

              // Allow selection only if it's today or later, and not on Saturday (6) or Sunday (0)
              return startDate >= today && dayOfWeek !== 0 && dayOfWeek !== 6;
            }}
            eventDidMount={handleEventDidMount}
            events={events}
            // eventMouseEnter={handleEventMouseEnter}
          />

          {/* Show available times if a date is selected */}
          {selecteddate && (
            <div className="time-selection">
              <h3>Select a Time for {selecteddate}</h3>
              <div className="time-btn-flex">
                {availableTimes.length > 0 ? (
                  availableTimes.map((time) => (
                    <button
                      key={time}
                      className="time-selection-btn"
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <p>No available times for this date.</p>
                )}
              </div>
              {selecteddate && selectedTime && (
                <div>
                  <p>
                    <strong>Selected Date:</strong> {selecteddate}
                  </p>
                  <p>
                    <strong>Selected Time:</strong> {selectedTime}
                  </p>
                </div>
              )}
              <div className="Continue-Btn">
                <button>Continue</button>
                <button
                  onClick={() => {
                    setselectedate("");
                    setSelectedTime("");
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          {/* Display selected date and time */}
          <a onClick={forwardfun} className="continue-btn">
            Select Appointment Time{" "}
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyCalendar;


