import React from "react";
import { ImFilePicture } from "react-icons/im";

const NewDoctorDetails = () => {
  return (
    <>
      <div className="Add-Doctor-Details">
        <div className="Add-Doctor-flex">
          <div className="img-flex">
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1725977779/Dental/xgaxqrodvhinonj8teyy.jpg"
              alt=""
            />
            <button>
              <ImFilePicture size={25} />
            </button>
          </div>
          <div className="fields-flex">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Desigination" required />
            <input type="text" placeholder="Department" required />
            <input type="text" placeholder="Location" required />
            <textarea
              name=""
              id=""
              rows={9}
              placeholder="Description"
              required
            ></textarea>
            <button className="add-doctor-btn">Add Doctors</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDoctorDetails;
