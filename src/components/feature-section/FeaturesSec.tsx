import React, { ReactNode } from "react";

import HeroSection from "components/hero-section";

import stl from "./FeaturesSec.module.scss";

interface Props {
  features?: Array<{ icon: ReactNode; title: string; desc: string }>;
  background?: string;
  heading: string;
  desc: string;
}

const FeaturesSec = ({ features, background, heading, desc }: Props) => {
  return (
    <div style={{ background }} className={stl.featureSec}>
      <HeroSection
        variant="col"
        heading={heading}
        desc={desc}
        customClass={stl.heroSec}
        features={features}
      />
    </div>
  );
};

export default FeaturesSec;
