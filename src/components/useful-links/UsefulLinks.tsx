import React, { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import stl from "./UsefulLinks.module.scss";

interface Props {
  title: string;
  links: Array<{ name: string; href: string; icon?: ReactNode }>;
}

const UsefulLinks = ({ title, links }: Props) => {
  const [animation, setAnimation] = React.useState(false);

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={stl.usefulLinks}
    >
      <div className={stl.title}>{title}</div>
      <motion.ul
        initial={{ y: 50, opacity: 0 }}
        animate={animation ? { y: 0, opacity: 1 } : undefined}
        transition={{ type: "spring", delay: 0.3 }}
        className={stl.list}
      >
        {links.map((item, i) => (
          <li key={i}>
            <Link href={item.href} className={stl.link}>
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

UsefulLinks.defaultProps = {
  title: "About us",
  links: [
    { name: "Support Center", href: "#" },
    { name: "Customer Support", href: "#" },
    { name: "About us", href: "#" },
    { name: "Copyright", href: "#" },
  ],
};

export default UsefulLinks;
