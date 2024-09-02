"use client";
import React, { useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import GoogleSignInButton from "../components/GoogleSignInButton";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import GithubSignInButton from "../components/GithubSignInButton";
import FacebookSignInButton from "../components/FacebookSignInButton";
import toast from "react-hot-toast";

const login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) router.replace("/dashboard");
  }, [session, router]);
  const myfun = async () => {
    if (Username == "" || Password == "") {
      toast.error("Both Fields are Required");
    } else if (Username != "" && Password != "") {
      const res = await signIn("credentials", {
        redirect: false,
        Username,
        Password,
      });
      if (res?.error) {
        toast.error("Wrong Crendentials");
        // alert("wrong credentials")
      }
      if (res?.url) {
        toast.success("Successfully Login");
        router.replace("/dashboard");
      }
    }
  };
  if (!session)
    return (
      <div className="Login-Main">
        <img
          src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1724328624/Dental/br89tje5rehfzf7lnrhz.png"
          alt=""
        />
        <input
          type="text"
          value={Username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="name"
          id="name"
          placeholder="Username"
          autoComplete="off"
        />
        <input
          type="password"
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          id="password"
          placeholder="Paswword"
          autoComplete="off"
        />
        <button onClick={myfun}>Login</button>
        <h3>or Login with </h3>
        <div className="Login-Buttons">
          <div className="Login-Buttons-Google">
            <GoogleSignInButton />
          </div>
          <div className="Login-Buttons-Github">
            <GithubSignInButton />
          </div>
          <div className="Login-Buttons-Github">
            <FacebookSignInButton />
          </div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            quia molestiae delectus sed labore in ab adipisci tenetur nostrum
            est odit quas perferendis blanditiis expedita.
          </p>
          <h3>www.dentario.com</h3>
        </div>
      </div>
    );
};

export default login;
