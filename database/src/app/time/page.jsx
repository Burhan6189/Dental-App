"use client";
import React from "react";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
// import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

const time = () => {
  return (
    <>
      <Header />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="Time-Pick-Main">
          <div className="time">
            <StaticTimePicker orientation="portrait" />
            {/* <DesktopTimePicker /> */}
          </div>
        </div>
      </LocalizationProvider>
      <Footer />
    </>
  );
};

export default time;
