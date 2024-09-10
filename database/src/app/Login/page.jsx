"use client";
import React, { useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import GoogleSignInButton from "../components/GoogleSignInButton";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import GithubSignInButton from "../components/GithubSignInButton";
import bcrypt from 'bcryptjs'
import FacebookSignInButton from "../components/FacebookSignInButton";
import toast from "react-hot-toast";

const login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) router.replace("/dashboard");
  }, [session, router]);

  const myfun = async (event) => {

    event.preventDefault()

    if (Email === "" || Password === "") {
      toast.error("Both Fields are Required");
    } else if (Email!== "" && Password !== "") {
      const res = await signIn("credentials", {
        redirect: false,
        Email,
        Password,
      });
      if (res?.error) {
        toast.error("Wrong Crendentials");
        // alert("wrong credentials")
      }
      if (res?.ok) {
        toast.success("Successfully Login");
        router.replace("/dashboard");
      }
    }
  };
  if (!session)
    return (
      <>
        <div className="Home">
          <div className="L-Header">
            <img
              src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1724328624/Dental/br89tje5rehfzf7lnrhz.png"
              alt="dentario"
            />
          </div>
          <div>
            <h2>Log in</h2>
            <input type="text" onChange={e=>setEmail(e.target.value)} placeholder="Email" required/>
            <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" required/>
            
              <button onClick={myfun} className="login-btn">Log in</button>
       
            <h3>Or Login With</h3>
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
      </>
    );
};

export default login;
