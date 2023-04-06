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
  Container,
  createStyles,
  rem,
  Image,
  Title,
} from "@mantine/core";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";

import { HeroIndex } from "@/components/Hero/HeroIndex";

const meta = {
  title: "Jobs — Dorkodu",
  description: `Join the revolution.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
  url: "/jobs",
};

const Jobs: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <Hero />
    </WebsiteLayout>
  );
};

export default Jobs;

const Hero = () => {
  const { classes: $, theme } = styles.Hero();

  return (
    <Container mt={25} mb={100}>
      <div className={$.inner}>
        <div className={$.content}>
          <Title
            order={1}
            size={48}
            color="dimmed"
            variant="gradient"
            gradient={{ from: "#00cc44", to: "lime", deg: 180 }}
            className={$.title}
          >
            Jobs
          </Title>
          <Title order={2} size="h1" weight={800} className={$.headline}>
            Work @ Dorkodu
          </Title>
          <Text my={8} size={18} maw={425}>
            Join the revolution
          </Text>
          <Text size={18} maw={425} color="dimmed">
            <div>
              Your very own set of tools to build and explore the new internet. From private notes to decentralized
              communities.
            </div>
          </Text>
        </div>
        <Image src="/images/undraw/pair-programming.svg" className={$.image} />
      </div>
    </Container>
  );
};

const styles = {
  Hero: createStyles((theme) => ({
    title: {
      color: theme.colorScheme == "dark" ? theme.colors.gray[6] : theme.colors.gray[5],
      fontSize: rem(40),
      lineHeight: 1,
      fontWeight: 900,
      letterSpacing: -1,

      [theme.fn.smallerThan("xs")]: {
        fontSize: rem(28),
      },
    },

    headline: {
      color: theme.colorScheme == "dark" ? theme.white : theme.black,
      letterSpacing: -0.8,
    },

    description: {},

    inner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,

      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
        alignItems: "center",
        gap: 40,
      },
    },

    content: {
      maxWidth: rem(600),
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },

    image: {
      maxWidth: 400,
    },
  })),
};

const Pitch = () => {
  return (
    <Container>
      <Title>
        Software has lost its magic.
        <br />
        We want your help to bring it back.
      </Title>
      <Text>
        Remember when software still felt magical? Good software used to be an experience.
        <br />
        It used to radically change how we lived and worked.
        <br />
        It made us feel like we lived in the future.
      </Text>
      <Text>
        We are building the tools for the next generation of high-impact companies. The place where ambitious creators
        come to bring radical ideas to life.
      </Text>
      <Text>
        We are looking for talented people who share our passion for crafting exceptional software products.
        <br />
        That person might be you.
      </Text>
      <Text>Join us and let's bring back the magic of software.</Text>
    </Container>
  );
};

const WhoWeAre = () => {
  return (
    <Container>
      <Title>Join a team of makers</Title>
      <Text>
        We are designers and engineers. Problem solvers and storytellers. We are a diverse team of individuals, all
        makers at heart.
      </Text>
    </Container>
  );
};

const PerksAndBenefits = () => {
  return (
    <Container>
      <Title>Perks & Benefits</Title>
      <Text>We are a bootstrapped, surviving by passion startup now. Just about to become profitable. </Text>
    </Container>
  );
};
