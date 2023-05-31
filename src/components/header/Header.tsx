import React, { useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

import MenuIcon from "assets/menu.svg";

import stl from "./Header.module.scss";

interface Props {
  links: Array<{ title: string; href: string }>;
}

const Header = ({ links }: Props) => {
  const [active, setIsActive] = React.useState("Get Started");
  const [isExpand, setIsExpand] = React.useState(true);
  const [width, setWidth] = React.useState(1000);

  useEffect(() => {
    function measureWidth() {
      setWidth(document.body.clientWidth);
    }
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  useEffect(() => {
    width >= 640 && setIsExpand(false);
  }, [width]);

  return (
    <header className={clsx(stl.header, isExpand ? stl.expand : "")}>
      <div className={stl.container}>
        <h1>CodeZar</h1>
        <div className={stl.menu}>
          {links.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={active === item.title ? stl.active : ""}
              onClick={() => setIsActive(item.title)}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <button className={stl.btn} onClick={() => setIsExpand(!isExpand)}>
          <MenuIcon className={stl.icon} />
        </button>
      </div>
      <ul className={stl.list}>
        {links.map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className={active === item.title ? stl.active : ""}
              onClick={() => setIsActive(item.title)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

Header.defaultProps = {
  links: [
    { title: "Pricing", href: "#" },
    { title: "Support", href: "#" },
    { title: "Register", href: "#" },
    { title: "Get Started", href: "/" },
  ],
};

export default Header;
