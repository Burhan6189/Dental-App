"use client";
import React, { useEffect, useState } from "react";
import GoogleSignInButton from "../components/GoogleSignInButton";
import FacebookSignInButton from "../components/FacebookSignInButton";
import toast from "react-hot-toast";

const signup = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Status, setStatus] = useState("");
  const [Role, setRole] = useState("");

  const myfun = async () => {
    if (Username == "" || Email == "" || Password == "" || Role == "") {
      toast.error("all field are required");
    } else if (Username != "" && Email != "" && Password != "" && Role != "") {
      const fetchdata = await fetch("/api/projects");
      const jsondata = await fetchdata.json();

      jsondata.map((items) => {
        if (Username === items.Username || Email === items.Email) {
          toast.error("User with this Username/Email is Already Exist");
          setStatus(false);
        } else {
          setStatus(true);
        }
      });

      if (Status === true) {
        const hashedPassword = await bcrypt.hash(Password, 10);

        const data = await fetch("/api/projects", {
          method: "POST",
          body: JSON.stringify({
            Username,
            Email,
            Password: hashedPassword,
            Role,
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
        <input type="text" placeholder="Username" required />
        <input type="text" placeholder="Email" required />
        <input type="text" placeholder="Password" required />
        <a href="/login">
          <button className="login-btn">Sign up</button>
        </a>
        <h3>Or Sign With</h3>
        <div className="other-login-btn">
          <GoogleSignInButton />
          <FacebookSignInButton />
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
