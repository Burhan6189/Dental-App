import React from "react";
import { FaCheck } from "react-icons/fa6";

const VisitsSec = () => {
  return (
    <>
      <div className="Visits-Main">
        <div className="container">
          <h3>We Eliminate the inconenience of multiple visits</h3>
          <div>
            <div className="flex">
              <FaCheck className="i" />
              <p>No second injections or temporaries</p>
            </div>
            <div className="flex">
              <FaCheck className="i" />
              <p>No second injections or temporaries</p>
            </div>
            <div className="flex">
              <FaCheck className="i" />
              <p>No second injections or temporaries</p>
            </div>
            <div>
              <button>More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitsSec;
