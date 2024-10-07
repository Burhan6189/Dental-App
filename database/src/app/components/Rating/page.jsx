"use client"

import ProgressBar from '@ramonak/react-progress-bar'
import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { FaAngleRight, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


function RatingReview({id}) {

  const [showpop, setshowpop] = useState(false);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [Message, setMessage] = useState("");
  const [Rating, setRating] = useState("");
  const [Avatar, setAvatar] = useState("");

  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      setName(session?.user?.FirstName + " " + session?.user?.LastName);
      setemail(session?.user?.email || session?.user?.Email)
      setAvatar(session?.user?.image || "https://cdn-icons-png.flaticon.com/512/1144/1144760.png")
    }

  }, [session])





  const myfun = async (event) => {
    event.preventDefault();

    if (name !== '' && email !== '' && Message !== '' && Rating !== '' && Avatar !== '') {

      const senddata = await fetch(`http://localhost:3000/api/doctors/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Name: name, Email: email, Message, Rating, Avatar })
      });
      if (senddata.ok) {
        toast.success('Thanks for Your Feedback')
        setshowpop(false);
      }
      else {
        toast.error('Something went wrong')
      }
    }
    else {
      toast.error('All fields are Required')
    }
  }




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
{  status === 'authenticated'&& (
          <button onClick={() => { setshowpop(true) }} id='myElement'>ADD Review</button>

)
||

<button onClick={() => { router.push('/Login')}} id='myElement'>Login to Add Review</button>
}

        {
          showpop &&

          <div className="reviewhead">


            <div className="close-button"><button onClick={() => { setshowpop(false) }}>Close </button></div>

            <div className="popuptitle">
              <h3> Enter Your Details</h3 >
            </div>
            <div className="popupfields">
              <input type='text' disabled value={name} placeholder='Name'  ></input>
              <input type='email' disabled value={email} placeholder='Email'  ></input>
              <textarea rows={10} onChange={(e) => setMessage(e.target.value)} placeholder='Message'></textarea>

            </div>

            <ReactStars

              count={5}
              size={30}
              onChange={(NewRating) => setRating(NewRating)}
              value={3}
              activeColor="#FBBF24"
              char={<FaStar />} />

            <button onClick={myfun} className='submit-button'>Submit</button>

          </div>


        }



        <div className='review'>
          <div className='review-user'>
            <div className='review-image'>
              <img src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1724339543/Dental/uifaul8xygqr1ml0ba6d.png" alt="" />
            </div>
            <div className="review-content">
              <h4>Robert Karmazov</h4>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae minima minus optio modi eveniet ratione odit sed commodi rerum nulla illo soluta, nesciunt omnis illum id veniam. Provident, ullam dolore.</span>
              {/* <a href="#">View & Reply <FaAngleRight /> </a> */}
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


