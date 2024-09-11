"use client";
import EditDoctorDetails from "@/app/components/Dash/Doctors/EditDoctorDetails";
import Sidebar from "@/app/components/Dash/Doctors/Sidebar";

import React, { useEffect, useState } from "react";

const addnewdoctor = (context) => {

    const [editdata, seteditdata] = useState([]);
    const id = context.params.doctorid;
    useEffect(()=>{
     
          const myfun = async () => {

            try {
                const data = await fetch('/api/doctors/'+id);
                const jsondata = await data.json();
               seteditdata(jsondata);
            } catch (error) {
        
            window.location.replace('/dash/doctors')
            }
          
          }
          myfun()
  
    },[])

  return (
    <>
      <Sidebar />
      <EditDoctorDetails data={editdata} id={id}/>
    </>
  );
};

export default addnewdoctor;
