import React from "react";
import OurTeamHeader from "../components/OurTeam/OurTeamHeader";
import OurTeamSecondSec from "../components/OurTeam/OurTeamSecondSec";
import OurTeamAppointmentSec from "../components/OurTeam/OurTeamAppointmentSec";

const OurTeam = () => {
  return (
    <>
      <div className="container">
        <OurTeamHeader />
        <OurTeamSecondSec />
      </div>
      <OurTeamAppointmentSec />
    </>
  );
};

export default OurTeam;
