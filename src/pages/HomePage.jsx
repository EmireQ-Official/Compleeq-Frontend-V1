import React from "react";
import Hero from "../components/Hero/Hero";
import BlankSection from "../components/BlankSection/BlankSection";
import AlwaysOnEngine from "../components/AlwaysOnEngine/AlwaysOnEngine";
import FiveQuestions from "../components/FiveQuestions/FiveQuestions";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <BlankSection />
      <AlwaysOnEngine />
      <FiveQuestions />
    </>
  );
};
