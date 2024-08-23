import DoctorProfile from '@/app/components/DoctorProfile/page'
import DoctorProfileBar from '@/app/components/DoctorProfileBar/page'
import Header from '@/app/components/Header/page'
import React from 'react'
import { FaAngleRight, FaGreaterThan, FaSign } from 'react-icons/fa'

function DentistProfile() {
  return (
   <>
    <Header/>
    <DoctorProfile/>
    <DoctorProfileBar/>

   </>
  )
}

export default DentistProfile