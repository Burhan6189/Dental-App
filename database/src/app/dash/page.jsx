"use client";
import React from "react";
import Sidebar from "../components/Dash/Sidebar";
import Calendar from "../components/Dash/Calendar";

const Dash = () => {
  return (
    <>
      <Sidebar />
      <div className="dash-items-main">
        <Calendar />
      </div>
    </>
  );
};

export default Dash;
