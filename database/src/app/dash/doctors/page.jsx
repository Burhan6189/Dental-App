"use client";
import DoctorDetails from "@/app/components/Dash/Doctors/NewDoctorDetails";
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
