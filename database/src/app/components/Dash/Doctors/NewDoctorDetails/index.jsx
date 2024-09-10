'use'
import { CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";
import { ImFilePicture } from "react-icons/im";

const NewDoctorDetails = () => {


  const [Image, setImage] =useState('');
  const [Name, setname] =useState('');
  const [Desigination, setDesigination] =useState('');
  const [Location, setLocation] =useState('');
  const [Department, setDepartment] =useState('');
  const [Description, setDescription] =useState('');

  return (
    <>
      <div className="Add-Doctor-Details">
        <div className="Add-Doctor-flex">
          <div className="img-flex">
            <img
              src={Image ||"https://res.cloudinary.com/dgtk4rthy/image/upload/v1725977779/Dental/xgaxqrodvhinonj8teyy.jpg" }
              alt=""
            />
       
             <CldUploadButton uploadPreset="Dentist-profile" onSuccess={(result)=>setImage(result.info.secure_url)}> Upload Image<ImFilePicture size={20}/> </CldUploadButton>
            
          </div>
          <div className="fields-flex">
            <input type="text" onChange={e=>setname(e.target.value)} placeholder="Name" required />
            <input type="text" onChange={e=>setDesigination(e.target.value)} placeholder="Desigination" required />
            <input type="text" onChange={e=>setDepartment(e.target.value)} placeholder="Department" required />
            <input type="text" onChange={e=>setLocation(e.target.value)} placeholder="Location" required />
            <textarea
              name=""
              id=""
              rows={9}
              onChange={e=>setDescription(e.target.value)}
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
