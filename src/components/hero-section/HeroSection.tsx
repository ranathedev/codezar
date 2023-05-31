import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

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
  features?: Array<{ icon: ReactNode; title: string; desc: string }>;
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
  const [animateContent, setAnimateContent] = React.useState(false);
  const [animateImage, setAnimateImage] = React.useState(false);
  const [animateFeatures, setAnimateFeatures] = React.useState(false);

  return (
    <div className={clsx(stl.heroSection, stl[variant], customClass)}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        className={stl.content}
        onViewportEnter={() => setAnimateContent(true)}
        animate={animateContent ? { y: 0, opacity: 1 } : undefined}
        transition={{ type: "spring", delay: 0.3 }}
      >
        <div className={stl.main}>{heading}</div>
        <p className={stl.desc}>{desc}</p>
        {customElement}
        {link && (
          <Link href={link.href}>
            {link.title} <NextIcon />
          </Link>
        )}
      </motion.div>
      {imgSrc && (
        <motion.div
          initial={
            (variant === "left" && { x: -300, opacity: 0 }) ||
            (variant === "right" && { x: 300, opacity: 0 }) ||
            (variant === "col" && { x: 300, opacity: 0 })
          }
          onViewportEnter={() => setAnimateImage(true)}
          animate={
            animateImage
              ? { x: 0, opacity: 1 }
              : (variant === "left" && { x: -300, opacity: 0 }) ||
                (variant === "right" && { x: 300, opacity: 0 })
          }
          transition={{ type: "spring", delay: 0.6 }}
          className={stl.imageContainer}
        >
          <Image
            priority
            src={imgSrc}
            width={100}
            height={100}
            alt="illustration"
            className={stl.img}
          />
        </motion.div>
      )}
      {features && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          onViewportEnter={() => setAnimateFeatures(true)}
          animate={animateFeatures ? { y: 0, opacity: 1 } : undefined}
          transition={{ type: "spring", delay: 0.6 }}
          className={stl.features}
        >
          {features?.map((item, i) => {
            const value = (i + 1) * 0.2;
            return (
              <FeatureItem
                key={i}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                delay={value}
                animation={animateFeatures}
              />
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

HeroSection.defaultProps = {
  customElement: "",
  variant: "right",
  heading: "We are committed to using fact-based knowledge to our customers",
  desc: "Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.",
};

export default HeroSection;
