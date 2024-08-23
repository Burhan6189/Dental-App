"use client";
import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

const Calendar = () => {
  return (
    <div style={{maxWidth:"700px", width:"100%", margin:'auto'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["StaticDateTimePicker"]}>
          <DemoItem>
            <StaticDateTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
