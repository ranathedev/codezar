import Head from "next/head";

import Header from "components/header";
import HeroSection from "components/hero-section";

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeZar</title>
        <meta name="description" content="Codezar | Web Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <HeroSection variant="right" link={{ title: "Explore", href: "#" }} />
      </main>
    </>
  );
}
