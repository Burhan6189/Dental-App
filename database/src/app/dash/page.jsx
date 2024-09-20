"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Dash/Sidebar";
import Calendar from "../components/Dash/Calendar";

const Dash = () => {

  const [doctors, setdoctors] = useState([]);
  const [appoints, setappoints] = useState([]);
  const [doctorname,setdoctorname] = useState('');
  const [treatmentname,settreatmentname] = useState('');



  useEffect(() => {
    async function myfun() {
      const data = await fetch('/api/doctors');
      const jsondata = await data.json();
      setdoctors(jsondata)
    }
    myfun()
  }, [])

// useEffect(() => {
//     async function myfun() {
   
//     }
//     myfun()
//   }, [appoints])




  useEffect(()=>{
    const fun =async()=>{

      const data = await fetch('/api/appoint');
      const jsondata = await data.json();

      if( treatmentname!=="" && doctorname==="" ){
     const filtereddata = jsondata?.filter((items)=>(
        items?.Treatment?.toLowerCase()===treatmentname.toLowerCase()))
        setappoints(filtereddata)
     
      }
      else  if( treatmentname==="" && doctorname!=="" ){
        const filtereddata = jsondata?.filter((items)=>(
          items?.DoctorName?.toLowerCase().trim()===doctorname?.toLowerCase().trim()))
           setappoints(filtereddata)
        
         }
      
     else if(doctorname!=="" && treatmentname!=="" ){
      const filtereddata = jsondata?.filter((items)=>(items?.DoctorName?.toLowerCase().trim()===doctorname?.toLowerCase().trim() &&
      items?.Treatment?.toLowerCase()===treatmentname.toLowerCase()))
      setappoints(filtereddata)
     }
      else{
        setappoints(jsondata)
      }
    }
    fun();
  },[doctorname,treatmentname])


  return (
    <>
      <Sidebar doctors={doctors} appointments={appoints}  setdoctorname={setdoctorname} settreatmentname={settreatmentname} />
      <div className="dash-items-main">
        <Calendar appoints={appoints} />
      </div>
    </>
  );
};

export default Dash;
