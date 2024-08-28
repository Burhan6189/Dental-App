
'use client'
import React, { useRef, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

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
      title: `${counts}  Available `,      //  on ${date.toDateString()}`,

      date: date.toISOString().split("T")[0], // Format as YYYY-MM-DD
      // extendedProps: {
      //   customValue: `Custom value for ${date.toDateString()}`,
      // },
    });
  }

  return {
    events, counts
  }
}

function MyCalendar() {
  const calendarRef = useRef(null);
  const events = generateFutureEvents().events;
  const {counts} = generateFutureEvents();

const [selecteddate, setselectedate] = useState('');

  
  const handleDateClick = (date) => {
    const today =  date.dateStr;
setselectedate(today);
console.log(today)
    

  }

  const handleEventDidMount = (info) => {
    const eventDate = new Date(info.event.startStr);
    const dayOfWeek = eventDate.getDay();

    // Check if the event is on Saturday (6) or Sunday (0)
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      // Hide the title by setting the innerHTML of the element to an empty string
      const eventTitleElement = info.el.querySelector(".fc-event-title");
      if (eventTitleElement) {
        eventTitleElement.style.display = 'none'; // This ensures that the title is not displayed
      }
    }
  };


  const mydong = ["2024-09-02","2024-09-03","2024-09-04","2024-09-05"]


  useEffect(() => {
    // Access FullCalendar instance
    const calendarApi = calendarRef.current.getApi();

    
    // Find the event for the specific date you want to change (e.g., 2024-09-01)

    mydong.map((items)=>{
      const eventToUpdate = calendarApi.getEvents().find(event => event.startStr === items);

      if (eventToUpdate) {
        // Update the event's title and custom value
        eventToUpdate.setProp("title", `only ${counts-1} available`);
        eventToUpdate.setExtendedProp("customValue", "Updated Custom Value");
      }

    })

  
  }, [mydong]);



  return (
    <FullCalendar
      ref={calendarRef} // Reference to FullCalendar instance
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={"dayGridMonth"}
      headerToolbar={{
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      dayCellClassNames={(date) => {
        const dayOfWeek = date.date.getDay();
        const formattedDate = date.date.toISOString().split('T')[0];
        if (dayOfWeek === 6 || dayOfWeek === 0) {
          return "fc-day-disabled";
        }
        // if (formattedDate === "2024-08-27") {
        //   return "fc-day-disabled"
        // }
        if (date.date < new Date) {
          return "fc-day-disabled";
        }
        return "";
      }}
      height={"90vh"}

      dateClick={handleDateClick}
      selectable={true}
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
  );
}

export default MyCalendar;

