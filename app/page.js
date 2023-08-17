"use client";
import React from "react";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Experiment from "./components/Experiment";
import Objectifs from "./components/Objectifs";
import Secure from "./components/Secure";
import Tracking from "./components/Tracking";
import Countries from "./components/Countries";
import Confident from "./components/Confident";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Steps />
      <Experiment />
      <Objectifs />
      <Secure />
      <Tracking />
      <Countries />
      <Confident />
    </>
  );
}
