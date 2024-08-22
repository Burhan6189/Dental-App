import Header from '@/app/components/Header/page'
import React from 'react'
import { FaAngleRight, FaGreaterThan, FaSign } from 'react-icons/fa'

function DentistProfile() {
  return (
    <>
          <div className="top-container">
    <Header/>
    </div>
    <div className='doctor-profile'>
        <div className='doctor-name'>
            <div>
            <p>Dr. Joseph Philips</p>
            </div>
            <div>
            <a href="#">Home</a>
            <span className='icon'>
            <FaAngleRight/></span>
            <a href="#">Team</a>
            <span className='icon'>
            <FaAngleRight/> </span>
            <span>Dr.Joseph Philips</span>
            </div>
        </div>
        <div className="doctor-main">
            <div className="doctor-image">
                <img src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1724339543/Dental/uifaul8xygqr1ml0ba6d.png" alt="" />
            </div>
            <div className="doctor-context">
                <h6>
                    Dr.Joseph Philips
                </h6>
                <span>Senior Doctor</span>
                <br/>
                <br />
                <p>Types of bridges may vary, depending upon how they are fabricated and the way they anchor to the adjacent teeth. Types of bridges may vary, depending upon how they are fabricated and the way. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iste nobis voluptates, non facilis harum incidunt consectetur deleniti ullam hic deserunt velit ipsum minima ab eum natus recusandae asperiores architecto?    </p>
            </div>
        </div>

    </div>
    </>
  )
}

export default DentistProfile