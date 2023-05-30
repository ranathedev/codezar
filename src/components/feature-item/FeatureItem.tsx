import React, { ReactNode } from "react";

import stl from "./FeatureItem.module.scss";

interface Props {
  icon: ReactNode;
  title: string;
  desc: string;
}

const FeatureItem = ({ icon, title, desc }: Props) => {
  return (
    <div className={stl.featureItem}>
      <span className={stl.icon}>{icon}</span>
      <div className={stl.content}>
        <span className={stl.title}>{title}</span>
        <p className={stl.desc}>{desc}</p>
      </div>
    </div>
  );
};

FeatureItem.defaultProps = {
  src: "/icons.png",
  title: "Trusted marketplace",
  desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
};

export default FeatureItem;
