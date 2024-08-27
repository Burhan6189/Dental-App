"use client";
import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'

function DoctorProfileBar() {
  return (
    <>
    <div className='doctor-bar-main'>
        <div className='doctor-bar-bar'>
        <p>Dental Prevention</p>
        <ProgressBar 
            
            labelColor='black'
            height='10px'
            bgColor='#3FB6E0'
            labelSize='10px'
            completed={85}
        />
        <p>Flouride Treatment</p>
        <ProgressBar 
                    labelColor='black'
                    height='10px'
                    bgColor='#3FB6E0'
                    labelSize='10px'
                    completed={75}/>
        <p>Tooth Extraction</p>
        <ProgressBar
                   labelColor='black'
                   height='10px'
                   bgColor='#3FB6E0'
                   labelSize='10px'
                     completed={95}/>
        <p>Cavity Filling</p>
        <ProgressBar
                    labelColor='black'
                    height='10px'
                    bgColor='#3FB6E0'
                    labelSize='10px'
                     completed={60}/>
        </div>
        <div className='doctor-bar-content'>
            <p>Types of bridges may vary, depending upon how they are fabricated and the way they anchor to the adjacent teeth. Types of bridges may vary, depending upon how they are fabricated and the way. </p>
        </div>
        </div>
    </>

)
}

export default DoctorProfileBar