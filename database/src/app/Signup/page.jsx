"use client";
import React, { useEffect, useState } from "react";

import bcrypt from 'bcryptjs'
import toast from "react-hot-toast";
import GoogleSignInButton from "../components/GoogleSignInButton";
import FacebookSignInButton from "../components/FacebookSignInButton";

const signup = () => {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  const myfun = async (event) => {
    event.preventDefault()
    if (FirstName === "" || LastName === "" || Email === "" || Password === "" || Phone === "") {
      toast.error("all field are required");
    } else if (FirstName !== "" && LastName !== "" && Email !== "" && Password !== "" && Phone !== "") {
      const fetchdata = await fetch("/api/users");
      const jsondata = await fetchdata.json();

      jsondata?.find( async (items) => {
        if (items.Email===Email) {
          toast.error("User with this Email is Already Exist");
         
        } else {
         
          const hashedPassword = await bcrypt.hash(Password, 10);

          const data = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
              FirstName,
              LastName,
              Email,
              Password: hashedPassword,
              Phone
            }),
          });
  
          toast.success("Successfully registered");
  
          window.location.href = "/Login";

        }
      });
if(jsondata?.length===0){
  const hashedPassword = await bcrypt.hash(Password, 10);

  const data = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      FirstName,
      LastName,
      Email,
      Password: hashedPassword,
      Phone
    }),
  });

  toast.success("Successfully registered");

  window.location.href = "/Login";

}     
  }
  };

  return (
    <div className="Home">
      <div className="L-Header">
        <img
          src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1724328624/Dental/br89tje5rehfzf7lnrhz.png"
          alt="dentario"
        />
      </div>
      <div>
        <h2>Sign up</h2>
        <input type="text" onChange={e=>setFirstName(e.target.value)} placeholder="First Name" required />
        <input type="text" onChange={e=>setLastName(e.target.value)} placeholder="Last Name" required />
        <input type="email" onChange={e=>setEmail(e.target.value)} placeholder="Email" required />
        <input type="text" onChange={e=>setPhone(e.target.value)} placeholder="Phone" required />
        <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" required />
    
      
          <button onClick={myfun} className="login-btn">Sign up</button>
        
        <h3>Or Sign With</h3>
        <div className="other-login-btn">
          <GoogleSignInButton/>
          <FacebookSignInButton/>
        </div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          veritatis exercitationem tempora voluptas delectus et, dolores
          distinctio
        </p>
        <h3>www.dentario.com</h3>
      </div>
    </div>
  );
};

export default signup;
