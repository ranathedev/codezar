import React from "react";

import stl from "./ProgressBar.module.scss";

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  return <div style={{ width: progress + "%" }} className={stl.progressBar} />;
};

export default ProgressBar;
