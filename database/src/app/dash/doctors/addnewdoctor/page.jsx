"use client";
import NewDoctorDetails from "@/app/components/Dash/Doctors/NewDoctorDetails";
import Sidebar from "@/app/components/Dash/Doctors/Sidebar";
import React from "react";

const addnewdoctor = () => {
  return (
    <>
      <Sidebar />
      <NewDoctorDetails />
    </>
  );
};

export default addnewdoctor;
