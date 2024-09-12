import DoctorProfile from '@/app/components/DoctorProfile/page'
import DoctorProfileBar from '@/app/components/DoctorProfileBar/page'
import Footer from '@/app/components/Footer/page'
import Header from '@/app/components/Header/page'
import RatingReview from '@/app/components/Rating/page'
import React from 'react'
import { FaAngleRight, FaGreaterThan, FaSign } from 'react-icons/fa'

function DentistProfile(context) {

  const id = context.params.dentistid

  return (
   <>
    <Header/>
    <div className='top-container'></div>
    <DoctorProfile id={id}/>
    <RatingReview/>
    <Footer/>

   </>
  )
}

export default DentistProfile