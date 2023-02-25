import Head from "next/head";

import { useState } from "react";
import { AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, useMantineTheme } from "@mantine/core";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";
import { HeroIndex } from "@/components/Hero";

const meta = {
  title: "welcome! — dorkodu",
  description: `liberate the humankind.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
  url: "/",
  image: {
    src: "/public/images/dorkodu-single.png",
    alt: "dorkodu logo with single letter.",
  },
};

const Home: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <main>
        <HeroIndex />
      </main>
    </WebsiteLayout>
  );
};

export default Home;
