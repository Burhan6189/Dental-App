'use client'
import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaGreaterThan, FaSign } from 'react-icons/fa'


function DoctorProfile({ id }) {


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
            <div className='doctor-profile'>
                <div className='doctor-name'>
                    <div>
                        <p>{data?.Name}</p>
                    </div>
                    <div>
                        <a href="#">Home</a>
                        <span className='icon'>
                            <FaAngleRight /></span>
                        <a href="#">Team</a>
                        <span className='icon'>
                            <FaAngleRight /> </span>
                        <span>{data?.Name}</span>
                    </div>
                </div>
                <div className="doctor-main">
                    <div className="doctor-image">
                        <img src={data?.Image} alt="" />
                    </div>
                    <div className="doctor-context">
                        <h6>
                        {data?.Name}
                        </h6>
                        <span>{data?.Desigination} |</span>   <span>{data?.Department} |</span> <span>{data?.Location} </span>
                        <br />
                        <br />
                        <p> {data?.Description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DoctorProfile