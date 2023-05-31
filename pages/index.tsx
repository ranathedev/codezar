import React, { useEffect } from "react";
import Head from "next/head";

import BottomBanner from "components/bottom-banner";
import CustomEl from "components/custom-element";
import FeatureList from "components/feature-list";
import FeaturesSec from "components/feature-section";
import Footer from "components/footer";
import Header from "components/header";
import HeroSection from "components/hero-section";
import ProgressBar from "components/progress-bar";
import ScrollBtn from "components/scroll-top-btn";

import AwardIcon from "assets/award.svg";
import GiftIcon from "assets/gift.svg";
import MarketIcon from "assets/market.svg";
import OneIcon from "assets/1.svg";
import ThreeIcon from "assets/3.svg";
import TwoIcon from "assets/2.svg";

import stl from "./index.module.scss";

export default function Home() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / totalHeight) * 100;
      setScrollProgress(progress);

      if (scrollTop > 500) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>CodeZar</title>
        <meta name="description" content="Codezar | Web Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={stl.main}>
        <ScrollBtn handleOnClick={scrollToTop} isVisible={isVisible} />
        <ProgressBar progress={scrollProgress} />
        <Header />
        <HeroSection
          heading="A Creative way to grow your Exciting Business model"
          desc="Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever."
          imgSrc="/Image.png"
          customElement={<CustomEl />}
        />
        <FeaturesSec
          background="transparent"
          heading="Go Beyond unlimited features"
          desc="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
          features={[
            {
              title: "Trusted marketplace",
              desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
              icon: <MarketIcon />,
            },
            {
              title: "Customer Gift vouchers",
              desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
              icon: <GiftIcon />,
            },
            {
              title: "Multiple Awards wins",
              desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
              icon: <AwardIcon />,
            },
          ]}
        />
        <div className={stl.section}>
          <HeroSection
            variant="left"
            heading="We help you to boost your business profitable with our talent marketer"
            desc="Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever."
            customElement={<FeatureList />}
            link={{ title: "Explore more", href: "#" }}
            imgSrc="/Illustration-2.png"
            customClass={stl.heroSection}
          />
        </div>
        <HeroSection
          imgSrc="/Illustration.png"
          link={{ title: "Explore more", href: "#" }}
        />
        <HeroSection
          variant="col"
          heading="More than thousand of user we have worldwide with happy feedback"
          desc="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
          imgSrc="/users.png"
          customClass={stl.usersSection}
        />
        <FeaturesSec
          heading="Let’s meet how its work"
          desc="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
          features={[
            {
              icon: <OneIcon />,
              title: "Connect with Support",
              desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
            },
            {
              icon: <TwoIcon />,
              title: "Explain your business idea",
              desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
            },
            {
              icon: <ThreeIcon />,
              title: "Be partner & earn money",
              desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
            },
          ]}
        />
        <div className={stl.teamSection}>
          <HeroSection
            variant="col"
            heading="Meet our support team who always work hardly behind the scenes"
            desc="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
            imgSrc="/team.png"
          />
          <BottomBanner customClass={stl.banner} />
        </div>
        <Footer />
      </main>
    </>
  );
}
