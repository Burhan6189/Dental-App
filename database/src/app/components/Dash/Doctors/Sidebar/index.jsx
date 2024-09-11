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
        </div>
        <div className="Upperbar">
          <div className="Upper-Flex">
            <div className="flex">
              <FaTooth className="i-logo" size={25} />
              <div>
                <h3>All Doctors</h3>
              </div>
              <div className="search-bar">
                <IoIosSearch size={22} />
                <input type="text" placeholder="Search Doctor" />
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
                  <h6>Admin</h6>
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
