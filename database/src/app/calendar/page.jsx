"use client";
import React from "react";
import dayjs from "dayjs";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";

const Calendar = () => {
  return (
    <>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        past
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth, timeGridWeek, timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"95vh"}
        dayCellClassNames={(arg) => {
          if (arg.date < new Date()) {
            console.log("hdafef", arg.date)
            return ['disabled-date'];

          }
          else{
          return [];
        }
        }}
      />
    </>
  );
};

export default Calendar;
