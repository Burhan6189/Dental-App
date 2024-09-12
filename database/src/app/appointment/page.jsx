"use client";
import React from "react";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import DoctorSelection from "../components/Appoinment/DoctorSelection";

const Appointment = () => {
  return (
    <>
      <Header />
      <div className="container">
        <DoctorSelection />
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
