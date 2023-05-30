import React from "react";

import HeroSection from "components/hero-section";

import stl from "./FeaturesSec.module.scss";

interface Props {
  features?: Array<{ src: string; title: string; desc: string }>;
  background?: string;
}

const FeaturesSec = ({ features, background }: Props) => {
  return (
    <div style={{ background }} className={stl.featureSec}>
      <HeroSection
        variant="col"
        customClass={stl.heroSec}
        features={features}
      />
    </div>
  );
};

export default FeaturesSec;
