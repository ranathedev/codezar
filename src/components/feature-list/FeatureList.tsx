import React from "react";
import Image from "next/image";

import stl from "./FeatureList.module.scss";

const FeatureList = () => {
  return (
    <div className={stl.featureList}>
      <div className={stl.item}>
        <Image src="/tick.png" width={20} height={20} alt="tick-icon" />
        <span className={stl.content}>Unlimited design possibility</span>
      </div>
      <div className={stl.item}>
        <Image src="/tick.png" width={20} height={20} alt="tick-icon" />
        <span className={stl.content}>Completely responsive features</span>
      </div>
    </div>
  );
};

export default FeatureList;
