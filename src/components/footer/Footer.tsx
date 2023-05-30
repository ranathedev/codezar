import React from "react";
import Link from "next/link";
import clsx from "clsx";

import UsefulLinks from "components/useful-links";

import stl from "./Footer.module.scss";

interface Props {
  customClass?: string;
}

const Footer = ({ customClass }: Props) => {
  return (
    <footer className={clsx(stl.footer, customClass)}>
      <div className={stl.container}>
        <div className={stl.about}>
          <div className={stl.main}>CodeZar</div>
          <div className={stl.termsPrivacy}>
            <Link href="#" className={stl.link}>
              Terms of use
            </Link>
            <span className={stl.divider}></span>
            <Link href="#" className={stl.link}>
              Privacy
            </Link>
          </div>
          <p className={stl.copyright}>Copyright by 2023 CodeZar.</p>
        </div>
        <UsefulLinks />
        <UsefulLinks />
        <UsefulLinks />
        <UsefulLinks />
      </div>
    </footer>
  );
};

export default Footer;
