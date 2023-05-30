import React from "react";
import Image from "next/image";

import stl from "./FeatureItem.module.scss";

interface Props {
  src: string;
  title: string;
  desc: string;
}

const FeatureItem = ({ src, title, desc }: Props) => {
  return (
    <div className={stl.featureItem}>
      <Image src={src} width={50} height={50} alt="img" className={stl.img} />
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
