import React from "react";

/* ======== Icons ======== */
import { FaTooth } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FiClipboard } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { RxCube } from "react-icons/rx";
import { FiCreditCard } from "react-icons/fi";
/* ======== Icons ======== */

const Sidebar = () => {
  return (
    <>
      <div className="Sidebar-Main">
        <div className="icon">
          <FaTooth className="tooth" size={25} />
        </div>
        <div className="Right-Menu">
          <div className="Right-Menu-Flex">
            <div className="flex">
              <BiCategory className="i" size={25} />
              <FiClipboard className="i" size={25} />
              <GoPerson className="i" size={25} />
              <IoCalendarClearOutline className="i" size={25} />
              <RxCube className="i" size={25} />
              <FiCreditCard className="i" size={25} />
            </div>
            <div className="flex">
              <BsQuestionCircle className="i" size={25} />
              <IoSettingsOutline className="i" size={25} />
            </div>
          </div>
        </div>
        <div className="Upperbar">
          <h3>Appointment</h3>
        </div>
        <div className="Dashboard-Content">
          <h1>Dashboard Content</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
