'use client'
import DoctorProfile from '@/app/components/DoctorProfile/page'
import DoctorProfileBar from '@/app/components/DoctorProfileBar/page'
import Footer from '@/app/components/Footer/page'
import Header from '@/app/components/Header/page'
import RatingReview from '@/app/components/Rating/page'
import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaGreaterThan, FaSign } from 'react-icons/fa'

function DentistProfile(context) {

  const id = context.params.dentistid



  const [data, setdata] = useState([]);

  useEffect(() => {
      const fun = async () => {

          try {
              const data = await fetch("/api/doctors/" + id);
              const jsondata = await data.json();
              setdata(jsondata)
          } catch (error) {
              
              window.location.replace('/')
          }
         
      }
      fun();
  }, [])


  return (
   <>
    <Header/>
    <div className='top-container'></div>
    <DoctorProfile data={data}/>
    <RatingReview id={id} data={data}/>
    <Footer/>

   </>
  )
}

export default DentistProfile