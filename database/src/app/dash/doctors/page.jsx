"use client";
import DoctorDetails from "@/app/components/Dash/Doctors/DoctorDetails";
import Sidebar from "@/app/components/Dash/Doctors/Sidebar";
import React from "react";

const doctors = () => {
  return (
    <>
      <Sidebar />
      <DoctorDetails />
    </>
  );
};

export default doctors;
