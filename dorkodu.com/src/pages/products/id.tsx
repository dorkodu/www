import Head from "next/head";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";

import { HeroIndex } from "@/components/Hero/HeroIndex";
import { Image, Text, ThemeIcon, Title } from "@mantine/core";
import { IconBuildingCommunity } from "@tabler/icons-react";

const meta = {
  title: `Dorkodu ID — Dorkodu`,
  description: `Dorkodu ID is your digital identity.`,
  keywords: `dorkodu id`,
  url: "/products/id",
};

const Home: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <main>
        <Image src="/images/logos/forum_Icon.svg" alt="Dorkodu ID" />

        <Title>Dorkodu ID</Title>
        <Text size={24} weight={500} color="dimmed">
          Your Digital Identity
        </Text>

        <Text maw={500} mt={16} size="lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis exercitationem inventore, impedit cupiditate
          dolorem fuga blanditiis porro minima molestias mollitia?
        </Text>
      </main>
    </WebsiteLayout>
  );
};

export default Home;
