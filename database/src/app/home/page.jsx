"use client";
import React from "react";
import Header from "../components/Header/page";
import HomeBanner from "../components/Home/Banner";
import QualitySec from "../components/Home/QualitySec";
import MiniAbout from "../components/Home/MiniAbout";

const home = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <QualitySec />
      <MiniAbout />
    </>
  );
};

export default home;
