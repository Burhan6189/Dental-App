"use client";
import React from "react";
import dayjs from "dayjs";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/";

const Calendar = () => {
  return (
    <>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth, timeGridWeek, timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    </>
  );
};

export default Calendar;
