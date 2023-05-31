import React from "react";

import Icon1 from "assets/icon-1.svg";
import Icon2 from "assets/icon-2.svg";

import stl from "./BottomBanner.module.scss";

const BottomBanner = () => {
  return (
    <div className={stl.banner}>
      <span className={stl.heading}>
        Do you have any question? Feel free to contact us
      </span>
      <div className={stl.iconContainer}>
        <span className={stl.icon1}>
          <Icon1 />
        </span>
        <span>
          <Icon2 />
        </span>
      </div>
      <button>Contact us Now</button>
    </div>
  );
};

export default BottomBanner;
