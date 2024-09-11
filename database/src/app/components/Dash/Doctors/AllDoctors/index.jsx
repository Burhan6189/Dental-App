import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Doctors = () => {
  return (
    <>
      <div className="dash-items-main">
        <div className="All-Doctors-Main">
          <div className="All-Doctors-Flex">
            <a href="/dash/doctors">
              <div className="Doctor-card">
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
                <div className="option-flex">
                  <div className="flex-1">
                    <FaStar />
                    <h5>4.5</h5>
                  </div>
                  <div className="flex-2">
                    <FaUserDoctor />
                    <h5>About Me</h5>
                  </div>
                </div>
              </div>
            </a>
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
