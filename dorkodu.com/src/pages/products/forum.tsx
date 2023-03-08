import Head from "next/head";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";

import { HeroIndex } from "@/components/Hero/HeroIndex";
import { Text, ThemeIcon, Title } from "@mantine/core";
import { IconBuildingCommunity } from "@tabler/icons-react";

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
        <ThemeIcon size={48} variant="gradient">
          <IconBuildingCommunity size={32} />
        </ThemeIcon>
        <Title>Forum</Title>
        <Text size={24} weight={500} color="dimmed">
          Social Discourse.
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
