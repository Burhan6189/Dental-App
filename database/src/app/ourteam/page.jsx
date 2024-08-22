"use client"
import React from "react";
import OurTeamHeader from "../components/OurTeam/OurTeamHeader";
import OurTeamSecondSec from "../components/OurTeam/OurTeamSecondSec";
import OurTeamAppointmentSec from "../components/OurTeam/OurTeamAppointmentSec";
import OurTeamMeetTeamSec from "../components/OurTeam/OurTeamMeatTeam";

const OurTeam = () => {
  return (
    <>
      <div className="container">
        <OurTeamHeader />
        <OurTeamSecondSec />
      </div>
      <OurTeamAppointmentSec />
      <div className="container">
        <OurTeamMeetTeamSec />
      </div>
    </>
  );
};

export default OurTeam;
