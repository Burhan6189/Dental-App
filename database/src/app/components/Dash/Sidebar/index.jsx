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
import { IoIosSearch } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
/* ======== Icons ======== */

const Sidebar = () => {
  return (
    <>
      <div className="Sidebar-Main">
        <div className="Right-Menu">
          <div className="Right-Menu-Flex">
            <div className="flex">
              <BiCategory className="i-trans" size={25} />
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
          <div className="Appointment-Filter">
            <div>
              <h5>AVAILABLE DOCTOR</h5>
              <div className="filter-main">
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Drg.Dianne Russell</h4>
                </div>
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Drg.Marvin McKinney</h4>
                </div>
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Drg.Floyd Miles</h4>
                </div>
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Drg.Wade Warren</h4>
                </div>
              </div>
            </div>
            <div className="second-section">
              <h5>TYPE TREATMENT</h5>
              <div className="filter-main">
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Implants</h4>
                </div>
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Dentures</h4>
                </div>
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Whitening</h4>
                </div>
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Root Canal</h4>
                </div>
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Bleaching</h4>
                </div>
                <div className="checkbox-flex">
                  <input type="checkbox" name="" id="" />
                  <h4>Scaling</h4>
                </div>
              </div>
            </div>
            <div className="second-section">
              <div className="flex">
                <h5>PATIENT QUEUE</h5>
                <p>6</p>
              </div>
              <div className="filter-main">
                <div className="patient-info">
                  <img
                    src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                    alt=""
                  />
                  <div>
                    <h5>Burhan Ahmad</h5>
                    <h6>14 Jan 2023 • Implant</h6>
                  </div>
                </div>
                <div className="patient-info">
                  <img
                    src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                    alt=""
                  />
                  <div>
                    <h5>Burhan Ahmad</h5>
                    <h6>14 Jan 2023 • Implant</h6>
                  </div>
                </div>
                <div className="patient-info">
                  <img
                    src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                    alt=""
                  />
                  <div>
                    <h5>Burhan Ahmad</h5>
                    <h6>14 Jan 2023 • Implant</h6>
                  </div>
                </div>
                <div className="patient-info">
                  <img
                    src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                    alt=""
                  />
                  <div>
                    <h5>Burhan Ahmad</h5>
                    <h6>14 Jan 2023 • Implant</h6>
                  </div>
                </div>
                <div className="patient-info">
                  <img
                    src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                    alt=""
                  />
                  <div>
                    <h5>Burhan Ahmad</h5>
                    <h6>14 Jan 2023 • Implant</h6>
                  </div>
                </div>
                <div className="patient-info">
                  <img
                    src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                    alt=""
                  />
                  <div>
                    <h5>Burhan Ahmad</h5>
                    <h6>14 Jan 2023 • Implant</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Upperbar">
          <div className="Upper-Flex">
            <div className="flex">
              <FaTooth className="i-logo" size={25} />
              <div>
                <h3>Appointment</h3>
              </div>
              <div className="search-bar">
                <IoIosSearch size={22} />
                <input type="text" placeholder="Search Appointment" />
              </div>
            </div>
            <div className="flex">
              <div>
                <BsBell size={22} />
              </div>
              <div>
                <h3>
                  <span>|</span>
                </h3>
              </div>
              <div className="flex-2">
                <img
                  src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                  alt=""
                />
                <div>
                  <h5>Burhan Ahmad</h5>
                  <h6>Senior Dentist</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
