import React from "react";

const AppoinmentSec = () => {
  return (
    <>
      <div className="Our-Team-Appointment-Sec-Main">
        <h2>High Innovative Technology & Professional Dentists</h2>
        <h3>Make Appointment or call 8 800 254 25 64</h3>
        <button onClick={()=>{window.location.replace('/appointment')}}>Make an appointment</button>
      </div>
    </>
  );
};

export default AppoinmentSec;
