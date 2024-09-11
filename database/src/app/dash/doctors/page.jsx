"use client";
import Sidebar from "@/app/components/Dash/Doctors/Sidebar";
import AllDoctors from "@/app/components/Dash/Doctors/AllDoctors";
import React from "react";

const doctors = () => {
  return (
    <>
      <Sidebar />
      <AllDoctors />
    </>
  );
};

export default doctors;
