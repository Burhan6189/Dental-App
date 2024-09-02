"use client"
import React from "react";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

const time = () => {
  return (
    <>
      <Header />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticTimePicker orientation="landscape" />
      </LocalizationProvider>
      <Footer />
    </>
  );
};

export default time;
