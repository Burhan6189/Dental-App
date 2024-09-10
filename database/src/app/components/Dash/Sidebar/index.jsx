import React, { useRef } from "react";

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
import { RxCross2 } from "react-icons/rx";
import { LiaFilterSolid } from "react-icons/lia";
import { IoIosMenu } from "react-icons/io";
/* ======== Icons ======== */

const Sidebar = () => {
  const apointfilters = useRef(null);
  const FiltersHide = () => {
    if (apointfilters.current) {
      apointfilters.current.classList.add("filter-hide");
    }
  };
  const FiltersShow = () => {
    if (apointfilters.current) {
      apointfilters.current.classList.remove("filter-hide");
    }
  };
  return (
    <>
      <div className="Sidebar-Main">
        <div className="Right-Menu">
          <div className="Right-Menu-Flex">
            <div className="flex">
              <BiCategory className="i-trans" size={25} />
              <a href="/dash">
                <BiCategory className="i" size={25} />
              </a>
              <a href="/dash">
                <FiClipboard className="i" size={25} />
              </a>
              <a href="/dash/doctors">
                <GoPerson className="i" size={25} />
              </a>
              <a href="/dash">
                <IoCalendarClearOutline className="i" size={25} />
              </a>
              <a href="/dash">
                <RxCube className="i" size={25} />
              </a>
              <a href="/dash">
                <FiCreditCard className="i" size={25} />
              </a>
            </div>
            <div className="flex">
              <BsQuestionCircle className="i" size={25} />
              <IoSettingsOutline className="i" size={25} />
            </div>
          </div>
          <div onClick={FiltersShow} className="filter-show-btn">
            <LiaFilterSolid size={17} />
          </div>
          <div ref={apointfilters} className="Appointment-Filter">
            <div onClick={FiltersHide} className="filter-btn">
              <RxCross2 size={17} />
            </div>
            <div className="second-section">
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
        <div className="dash-mobile-menu">
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
            <div className="mob-menu">
              <IoIosMenu size={26} />
            </div>
            <div className="upper-flex">
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
