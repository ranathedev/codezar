import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import stl from "./FeatureItem.module.scss";

interface Props {
  icon: ReactNode;
  title: string;
  desc: string;
  delay: number;
  animation: Boolean;
}

const FeatureItem = ({ icon, title, desc, delay, animation }: Props) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={animation ? { y: 0, opacity: 1 } : undefined}
    transition={{ type: "spring", delay: delay }}
    className={stl.featureItem}
  >
    <span className={stl.icon}>{icon}</span>
    <div className={stl.content}>
      <span className={stl.title}>{title}</span>
      <p className={stl.desc}>{desc}</p>
    </div>
  </motion.div>
);

FeatureItem.defaultProps = {
  src: "/icons.png",
  title: "Trusted marketplace",
  desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
};

export default FeatureItem;
