import Head from "next/head";

import FeaturesSec from "components/feature-section";
import Header from "components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeZar</title>
        <meta name="description" content="Codezar | Web Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <FeaturesSec
          features={[
            {
              src: "/icons.png",
              title: "Trusted marketplace",
              desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
            },
            {
              src: "/icons.png",
              title: "Trusted marketplace",
              desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
            },
            {
              src: "/icons.png",
              title: "Trusted marketplace",
              desc: "Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.",
            },
          ]}
        />
      </main>
    </>
  );
}
