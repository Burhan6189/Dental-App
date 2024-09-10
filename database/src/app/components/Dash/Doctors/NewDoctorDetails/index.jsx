import React from "react";

const NewDoctorDetails = () => {
  return (
    <>
      <div className="Add-Doctor-Details">
        <div className="Add-Doctor-flex">
          <div>
            <img
              src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
              alt=""
            />
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
            <button>Add Doctors</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDoctorDetails;
