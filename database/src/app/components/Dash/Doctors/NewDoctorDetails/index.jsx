"use client";
import { CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ImFilePicture } from "react-icons/im";

const NewDoctorDetails = () => {
  const [Image, setImage] = useState("");
  const [Name, setname] = useState("");
  const [Desigination, setDesigination] = useState("");
  const [Location, setLocation] = useState("");
  const [Department, setDepartment] = useState("");
  const [Description, setDescription] = useState("");


  const adddoctor = async()=>{

    if(Image!=="" || Name!=="" || Desigination!=="" || Department!=="" || Description!==""){
    const postdata = await fetch('/api/doctors', {
      headers:{
        'Content-Type':"application/json"
      },
      method:"POST",
      body:JSON.stringify({Name,Image,Description,Desigination,Location,Department})
    });

    if(postdata.ok){
      toast.success('Data Added')
      window.location.replace('/dash/doctors')    }
    else{
      toast.error("Something is wrong")
    }}
    else{
      toast.error("All Fields are Required")
    }


  }

  return (
    <>
      <div className="Add-Doctor-Details">
        <div className="Add-Doctor-flex">
          <div className="img-flex">
            <img
              src={
                Image ||
                "https://res.cloudinary.com/dgtk4rthy/image/upload/v1725977779/Dental/xgaxqrodvhinonj8teyy.jpg"
              }
              alt=""
            />

            <CldUploadButton
              className="Upload-btn"
              uploadPreset="Dentist-profile"
              onSuccess={(result) => setImage(result.info.secure_url)}
            >
              Upload Image
              <ImFilePicture size={20} />
            </CldUploadButton>
          </div>
          <div className="fields-flex">
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              type="text"
              onChange={(e) => setDesigination(e.target.value)}
              placeholder="Desigination"
              required
            />
            <input
              type="text"
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
              required
            />
            <input
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              required
            />
            <textarea
              name=""
              id=""
              rows={9}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            ></textarea>
            <button onClick={adddoctor} className="add-doctor-btn">Add Doctors</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDoctorDetails;
