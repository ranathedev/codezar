import React from "react";
import clsx from "clsx";

import ArrowIcon from "assets/arrow-top.svg";

import stl from "./ScrollBtn.module.scss";

interface Props {
  handleOnClick: () => void;
  isVisible: Boolean;
}

const ScrollBtn = ({ handleOnClick, isVisible = true }: Props) => {
  return (
    <button
      className={clsx(stl.scrollBtn, isVisible ? stl.visible : "")}
      onClick={handleOnClick}
    >
      <ArrowIcon />
    </button>
  );
};

export default ScrollBtn;
