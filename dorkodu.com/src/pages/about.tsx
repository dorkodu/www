import Head from "next/head";

import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Stack,
  SimpleGrid,
  Image,
  List,
  Container,
  Divider,
  Paper,
  Group,
  Box,
} from "@mantine/core";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";
import { TeamMember, TheRingMember } from "@/components/Member";
import { people, story } from "@/data/company";
import { GreenBook, GrowingHeart, MountainSnowy, People } from "@/styles/twemoji";
import { SectionTitle, StarDivider, StoryCard } from "@/components/Commons";

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

const About: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>

      <Hero />

      <OurTeam />

      <StarDivider />

      <Story />

      <Hero />
    </WebsiteLayout>
  );
};

export default About;

const Hero = () => {
  return <></>;
};

const OurTeam = () => {
  return (
    <Box<"section"> id="people" py={20}>
      <SectionTitle title="Our People" text="Here's to the crazy ones." icon={People} />

      <Stack spacing={30}>
        {people.theRing.map((member) => (
          <TheRingMember member={member} key={member.name} />
        ))}
      </Stack>

      <Divider my={40} />

      <SimpleGrid cols={2} spacing={25} breakpoints={[{ maxWidth: 600, cols: 1, spacing: 40 }]}>
        {people.members.map((member) => (
          <TeamMember member={member} key={member.name} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const Story = () => {
  return (
    <>
      <SectionTitle title="Our Story" text="A timeline of meaningful technology." icon={GreenBook} />
      <Container my={50} px={0}>
        <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}>
          {story.map((item, index) => (
            <StoryCard icon={item.icon} text={item.text} key={index} order={index + 1} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

const something = (
  <div>
    <Text>
      Dorkodu&apos;s mission is to <b>liberate the humankind.</b>
    </Text>
    <Text color="dimmed">
      We want to create a free, decentralized, civilized <b>utopian world</b> with <b>human-friendly</b>{" "}
      <em>technology</em> and <em>economy</em>.
    </Text>
    <Image />
  </div>
);
