import React, { ReactNode } from "react";
import Link from "next/link";

import stl from "./UsefulLinks.module.scss";

interface Props {
  title: string;
  links: Array<{ name: string; href: string; icon: ReactNode }>;
}

const UsefulLinks = ({ title, links }: Props) => {
  return (
    <div className={stl.usefulLinks}>
      <div className={stl.title}>{title}</div>
      <ul className={stl.list}>
        {links.map((item, i) => (
          <li key={i}>
            <Link href={item.href} className={stl.link}>
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
