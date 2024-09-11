import React from "react";
import Popup from "reactjs-popup";
/* =========== Icons =========== */
import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
/* =========== Icons =========== */

const Doctors = () => {
  return (
    <>
      <div className="dash-items-main">
        <div className="All-Doctors-Main">
          <div className="All-Doctors-Flex">
            <div className="Doctor-card">
              <a href="/dash/doctors">
                <div className="content">
                  <img
                    src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1725983016/re3cdyxnyvtnpuwyxwbs.jpg"
                    alt=""
                  />
                  <h4>Dr. Albert Miles</h4>
                  <p>1288 Natalie BrooK Apt. 966</p>
                  <div className="desigination">
                    <h5>NUROLOGIST</h5>
                  </div>
                </div>
              </a>

              <div className="option-flex">
                <div className="flex-1">
                  <FaStar />
                  <h5>4.5</h5>
                </div>
                <div className="flex-2">
                  <Popup
                    trigger={
                      <button className="button">
                        <SlOptions />
                      </button>
                    }
                    position="bottom center"
                    closeOnDocumentClick
                  >
                    <div className="option">
                      <FaEdit />
                      <p>Edit</p>
                    </div>
                    <div className="option">
                      <MdDelete />
                      <p>Delete</p>
                    </div>
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/dash/doctors/addnewdoctor">
        <div className="new-doctor-btn">
          <FiPlus size={20} />
          <h4>Add New Doctor</h4>
        </div>
      </a>
    </>
  );
};

export default Doctors;
