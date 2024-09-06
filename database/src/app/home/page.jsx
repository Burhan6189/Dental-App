/* ========== Other Component ========== */

"use client";
import React from "react";

/* ========== Other Component ========== */

/* ========== Component ========== */

import Header from "../components/Header/page";
import HomeBanner from "../components/Home/Banner";
import QualitySec from "../components/Home/QualitySec";
import MiniAbout from "../components/Home/MiniAbout";
import Services from "../components/Home/Services";
import VisitsSec from "../components/Home/VisitsSec";
import AppoinmentSec from "../components/Home/AppoinmentSec";
import Reviews from "../components/Home/Reviews";
import Footer from "../components/Footer/page";
import Team from "../components/Home/Team";

/* ========== Component ========== */

const home = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <QualitySec />
      <MiniAbout />
      <Services />
      <VisitsSec />
      <AppoinmentSec />
      <Reviews />
      <Team />
      <Footer />
    </>
  );
};

export default home;
