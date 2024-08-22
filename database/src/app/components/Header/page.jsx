import React, { useState, useRef } from "react";
import { IoIosCall } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

const Header = () => {
  const helloRef = useRef(null);

  const handleAddClick = () => {
    if (helloRef.current) {
      helloRef.current.classList.add("hd-flex-1");
    }
  };

  return (
    <>
      <div className="Header-Main">
        <div className="Header-Top">
          {/* <button id="add" onClick={handleAddClick}>
            Check
          </button> */}
          <div id="hello" ref={helloRef} className="hd-flex-1">
            <div>
              <div className="tel">
                <h5>
                  <span>Free Call</span> +1 800 125 65 24
                </h5>
              </div>
              <div className="address">
                <h5>528 tenth Avenue, Boston, BT 58965</h5>
              </div>
            </div>
            <div className="hd-i">
              <IoIosCall size={20} />
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1724328624/Dental/br89tje5rehfzf7lnrhz.png"
              alt=""
            />
          </div>
          <div className="hd-flex-2">
            <div className="hd-i">
              <IoCalendarOutline size={20} />
            </div>
            <div>
              <div className="tel">
                <h5>Open hours:</h5>
              </div>
              <div className="address">
                <h5>
                  Mn - St: <span> 8:00am - 9:00pm </span> Sn: Closed
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="Header-Links">
          <h3>HOME</h3>
          <h3>PAGES</h3>
          <h3>SERVICES</h3>
          <h3>ABOUT</h3>
          <h3>GALLERY</h3>
          <h3>NEWS</h3>
          <h3>APPOINMENT</h3>
          <h3>CONTACTS</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
