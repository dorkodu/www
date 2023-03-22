import Meta from "@/components/Meta";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { createStyles, Title, Text, Button, Container, Group, rem } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { NextPage } from "next";
import Head from "next/head";

const meta = {
  title: "README",
  description: `A Story of.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
  url: "/",
  image: {
    src: "/public/images/dorkodu-single.png",
    alt: "dorkodu logo with single letter.",
  },
};

const Readme: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <main>
        <Title></Title>
      </main>
    </WebsiteLayout>
  );
};

export default Readme;
