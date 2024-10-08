"use client"

import ProgressBar from '@ramonak/react-progress-bar'
import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { FaAngleRight, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


function RatingReview({ id, data }) {

  const [showpop, setshowpop] = useState(false);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [Message, setMessage] = useState("");
  const [Rating, setRating] = useState("");
  const [Avatar, setAvatar] = useState("");

  const [counts, setcounts] = useState('');
  const [totalrating, settotalrating] = useState(null);
  const [onsstar, setonestar] = useState('')
  const [twostar, settwostar] = useState('')
  const [threestar, setthreestar] = useState('')
  const [fourstar, setfourstar] = useState('')
  const [fivestar, setfivestar] = useState('')

  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      setName(session?.user?.FirstName && (session?.user?.FirstName + " " + session?.user?.LastName )|| session?.user?.name);
      setemail(session?.user?.email || session?.user?.Email)
      setAvatar(session?.user?.image || "https://cdn-icons-png.flaticon.com/512/1144/1144760.png")
    }

  }, [session])


  useEffect(() => {

    const reviews = data.Reviews;
    setcounts(reviews?.length);

    const totalrate = reviews?.reduce((total, items) => total + Number(items?.Rating), 0);
    const letassign = totalrate / reviews?.length
    settotalrating(letassign);
    const countone = reviews?.filter((item) => item?.Rating === "1").length;
    setonestar(countone);
    const counttwo = reviews?.filter((item) => item?.Rating === "2").length;
    settwostar(counttwo)

    const three = reviews?.filter((item) => item?.Rating === "3").length;
    setthreestar(three)

    const four = reviews?.filter((item) => item?.Rating === "4").length;
    setfourstar(four)

    const five = reviews?.filter((item) => item?.Rating === "5").length;
    setfivestar(five)


  }, [data.Reviews])



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

  console.log(totalrating)



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
              completed={20 * Number(fivestar)}

              bgColor='#FBBF24'
              isLabelVisible={false}
              baseBgColor='#FFFBEB'
            />
            <span>{fivestar}</span>
          </div>
          <div className='showsame'>
            <span>4</span>
            <span><FaStar style={{ color: '#FBBF24' }} /></span>
            <ProgressBar
              height='7px'
              width='260px'
              isLabelVisible={false}
              completed={20 * Number(fourstar)}

              bgColor='#FBBF24'
              baseBgColor='#FFFBEB'
            />
            <span>{fourstar}</span>
          </div>
          <div className='showsame'>
            <span>3</span>
            <span><FaStar style={{ color: '#FBBF24' }} /></span>
            <ProgressBar
              height='7px'
              width='260px'
              isLabelVisible={false}
              completed={20 * Number(threestar)}

              bgColor='#FBBF24'
              baseBgColor='#FFFBEB'
            />
            <span>{threestar}</span>
          </div>
          <div className='showsame'>
            <span>2</span>
            <span><FaStar style={{ color: '#FBBF24' }} /></span>
            <ProgressBar
              height='7px'
              isLabelVisible={false}
              width='260px'
              completed={20 * Number(twostar)}

              bgColor='#FBBF24'
              baseBgColor='#FFFBEB'
            />
            <span>{twostar}</span>
          </div>
          <div className='showsame'>
            <span>1</span>
            <span><FaStar style={{ color: '#FBBF24' }} /></span>
            <ProgressBar
              height='7px'
              width='260px'
              isLabelVisible={false}
              completed={20 * Number(onsstar)}
              bgColor='#FBBF24'
              baseBgColor='#FFFBEB'
            />
            <span>{onsstar}</span>
          </div>

        </div>
        <div className="all-rating">
          <span className='all-rating-text'>{totalrating?.toString().substring(0,4)}</span>
          <span>
            {totalrating !== null && !isNaN(totalrating) && <ReactStars
              count={5}
              edit={false}
              size={40}
              value={totalrating}
              activeColor="#FBBF24"
              char={<FaStar />}

            />}
          </span>
          <span>{counts} Ratings</span>
        </div>

      </div>
      <div className="review-main">
        {status === 'authenticated' && (
          <button onClick={() => { setshowpop(true) }} id='myElement'>ADD Review</button>

        )
          ||

          <button onClick={() => { router.push('/Login') }} id='myElement'>Login to Add Review</button>
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
          {data?.Reviews?.map((items) => (

            <div className='review-user'>
              <div className='review-image'>
                <img src={items?.Avatar} alt="" />
              </div>
              <div className="review-content">
                <h4>
                  {items?.Name}
                </h4>
                <span>{items?.Message}</span>
                {/* <a href="#">View & Reply <FaAngleRight /> </a> */}
              </div>
              <div className='rating'>
                <ReactStars
                  count={5}
                  size={30}
                  edit={false}
                  value={items?.Rating}
                  activeColor="#FBBF24"
                  char={<FaStar />} />
                <p>{items?.createdAt?.substring(0, 10)}</p>
              </div>
            </div>

          ))
          }

        </div>

      </div>

    </>
  )
}

export default RatingReview


