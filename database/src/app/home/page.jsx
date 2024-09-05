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
    </>
  );
};

export default home;
