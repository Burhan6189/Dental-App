"use client"

import ProgressBar from '@ramonak/react-progress-bar'
import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { FaAngleRight, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'

function RatingReview() {

  const [showpop, setshowpop] = useState(false);

  return (
    <>
      <div className="rating-main">

        <div className="single-rating">
          <div className='showsame'>
            <span className='rating-number'>5</span>
            <span><FaStar style={{ color: '#FBBF24' }} /></span>
            <ProgressBar
              height='7px'
              width='260px'
              className='progressbar'
              completed={65}
              bgColor='#FBBF24'
              isLabelVisible={false}
              baseBgColor='#FFFBEB'
            />
            <span>989</span>
          </div>
          <div className='showsame'>
            <span>4</span>
            <span><FaStar style={{ color: '#FBBF24' }} /></span>
            <ProgressBar
              height='7px'
              width='260px'
              isLabelVisible={false}
              completed={30}
              bgColor='#FBBF24'
              baseBgColor='#FFFBEB'
            />
            <span>4.5k</span>
          </div>
          <div className='showsame'>
            <span>3</span>
            <span><FaStar style={{ color: '#FBBF24' }} /></span>
            <ProgressBar
              height='7px'
              width='260px'
              isLabelVisible={false}
              completed={55}
              bgColor='#FBBF24'
              baseBgColor='#FFFBEB'
            />
            <span>50</span>
          </div>
          <div className='showsame'>
            <span>2</span>
            <span><FaStar style={{ color: '#FBBF24' }} /></span>
            <ProgressBar
              height='7px'
              isLabelVisible={false}
              width='260px'
              completed={20}
              bgColor='#FBBF24'
              baseBgColor='#FFFBEB'
            />
            <span>16</span>
          </div>
          <div className='showsame'>
            <span>1</span>
            <span><FaStar style={{ color: '#FBBF24' }} /></span>
            <ProgressBar
              height='7px'
              width='260px'
              isLabelVisible={false}
              completed={40}
              bgColor='#FBBF24'
              baseBgColor='#FFFBEB'
            />
            <span>8</span>
          </div>

        </div>
        <div className="all-rating">
          <span className='all-rating-text'>4.5</span>
          <span>
            <ReactStars
              count={5}
              size={40}
              edit={false}  
              value={4.5}
              activeColor="#FBBF24"
              char={<FaStar />}


            />
          </span>
          <span>46 Ratings</span>
        </div>

      </div>
      <div className="review-main">
        <button onClick={() => { setshowpop(true) }} id='myElement'>ADD Review</button>


        
        {
        showpop &&

          <div className="reviewhead">


            <div className="close-button"><button onClick={()=>{setshowpop(false)}}>Close </button></div>

            <div className="popuptitle">
              <h3> Enter Your Details</h3 > 
            </div>
            <div className="popupfields">
            <input type='text' placeholder='Name'  ></input>
              <input type='email' placeholder='Email'  ></input>
              <textarea rows={10} placeholder='Message'></textarea>
              
            </div>

            <ReactStars
              
              count={5}
              size={30}
              onChange={(NewRating) => alert(NewRating)}
              value={3}
              activeColor="#FBBF24"
              char={<FaStar />} /> 

          <button className='submit-button'>Submit</button>

          </div>
          
  
          }



        <div className='review'>
          <div className='review-user'>
            <div className='review-image'>
              <img src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1724339543/Dental/uifaul8xygqr1ml0ba6d.png" alt="" />
            </div>
            <div className="review-content">
              <h6>Robert Karmazov</h6>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae minima minus optio modi eveniet ratione odit sed commodi rerum nulla illo soluta, nesciunt omnis illum id veniam. Provident, ullam dolore.</span>
              <a href="#">View & Reply <FaAngleRight /> </a>
            </div>
            <div className='rating'>
              <ReactStars
                count={5}
                size={30}
                value={2}
                activeColor="#FBBF24"
                char={<FaStar />} />
              <p>Sep 09,2024</p>
            </div>
          </div>
          <div>

          </div>
        </div>

      </div>

    </>
  )
}

export default RatingReview


