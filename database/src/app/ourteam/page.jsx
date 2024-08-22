"use client";
import React from "react";
import OurTeamHeader from "../components/OurTeam/OurTeamHeader";
import OurTeamSecondSec from "../components/OurTeam/OurTeamSecondSec";
import OurTeamAppointmentSec from "../components/OurTeam/OurTeamAppointmentSec";
import OurTeamMeetTeamSec from "../components/OurTeam/OurTeamMeatTeam";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

const OurTeam = () => {
  return (
    <>
      <Header />
      <div className="top-container">
        <OurTeamHeader />
        <OurTeamSecondSec />
      </div>
      <OurTeamAppointmentSec />
      <div className="container">
        <OurTeamMeetTeamSec />
      </div>
      <Footer />
    </>
  );
};

export default OurTeam;
