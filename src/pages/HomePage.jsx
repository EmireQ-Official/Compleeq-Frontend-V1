import React from "react";
import Hero from "../components/Hero/Hero";
import BlankSection from "../components/BlankSection/BlankSection";
import AlwaysOnEngine from "../components/AlwaysOnEngine/AlwaysOnEngine";
import FiveQuestions from "../components/FiveQuestions/FiveQuestions";
import ComplianceStandard from "../components/ComplianceStandard/ComplianceStandard";
import UnifiedIntelligence from "../components/UnifiedIntelligence/UnifiedIntelligence";
import EditorialSpread from "../components/EditorialSpread/EditorialSpread";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <BlankSection />
      <AlwaysOnEngine />
      <FiveQuestions />
      <ComplianceStandard />
      <UnifiedIntelligence />
      <EditorialSpread />
    </>
  );
};
