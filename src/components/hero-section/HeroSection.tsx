import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import FeatureItem from "components/feature-item";

import NextIcon from "assets/arrow-next.svg";

import stl from "./HeroSection.module.scss";

interface Props {
  link?: { title: string; href: string };
  customElement?: ReactNode;
  variant: "left" | "right" | "col";
  customClass?: string;
  heading: string;
  desc: string;
  imgSrc?: string;
  features?: Array<{ src: string; title: string; desc: string }>;
}

const HeroSection = ({
  heading,
  desc,
  link,
  customElement,
  variant,
  imgSrc,
  features,
  customClass,
}: Props) => {
  return (
    <div className={clsx(stl.heroSection, stl[variant], customClass)}>
      <div className={stl.content}>
        <div className={stl.main}>{heading}</div>
        <p className={stl.desc}>{desc}</p>
        {customElement}
        {link && (
          <Link href={link.href}>
            {link.title} <NextIcon />
          </Link>
        )}
      </div>
      {imgSrc && (
        <div className={stl.imageContainer}>
          <Image
            priority
            src={imgSrc}
            width={100}
            height={100}
            alt="illustration"
            className={stl.img}
          />
        </div>
      )}
      {features && (
        <div className={stl.features}>
          {features?.map((item, i) => (
            <FeatureItem
              key={i}
              src={item.src}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      )}
    </div>
  );
};

HeroSection.defaultProps = {
  customElement: "",
  variant: "col",
  heading: "We are committed to using fact-based knowledge to our customers",
  desc: "Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.",
};

export default HeroSection;