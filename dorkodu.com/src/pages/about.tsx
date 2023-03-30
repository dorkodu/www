import { NextPage } from "next";
import Head from "next/head";

import {
  Text,
  Title,
  Stack,
  SimpleGrid,
  Image,
  List,
  Container,
  Divider,
  Group,
  Box,
  createStyles,
  Highlight,
} from "@mantine/core";
import { Button, rem } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import Meta from "@/components/Meta";

import { TeamMember, TheRingMember } from "@/components/Member";
import { people, story } from "@/data/company";

import { GreenBook, GrowingHeart, MountainSnowy, People } from "@/styles/twemoji";
import { SectionTitle, StarDivider, StoryCard } from "@/components/Commons";

const meta = {
  title: "About — Dorkodu",
  description: `Your Dream Fulfillment Technology Company.`,
  keywords: `about dorkodu, about dorkodu.com, dream fulfillment company, technology, the dorkodu company, dream technology`,
  url: "/about",
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
      <Jobs />
      <Investors />
      <Press />
    </WebsiteLayout>
  );
};

export default About;

const styles = {
  Hero: createStyles((theme) => ({
    title: {
      color: theme.colorScheme == "dark" ? theme.colors.gray[6] : theme.colors.gray[5],
      fontSize: rem(28),
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: -0.75,

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

const Hero = () => {
  const { classes: $, theme } = styles.Hero();

  return (
    <Container>
      <div className={$.inner}>
        <div className={$.content}>
          <Title order={1} size="h2" color="dimmed" className={$.title}>
            About Dorkodu
          </Title>
          <Title order={2} size="h1" weight={800} className={$.headline}>
            <Text span>Your</Text>
            <Text variant="gradient" gradient={{ from: "#00cc40", to: "lime", deg: 180 }} span>
              &nbsp;Dream Fulfillment&nbsp;
            </Text>
            <Text mt={-8}>Technology Company.</Text>
          </Title>
          <Text my={8} size={18} maw={425}>
            We combine gamification, human-centric design with our superior technology to create products that help
            people&nbsp;
            <Text span weight={500}>
              fulfill their dreams
            </Text>
            .
          </Text>

          <List
            mt={20}
            spacing={8}
            icon={
              <Text size={28} color="green">
                ⁕
              </Text>
            }
          >
            <List.Item>
              <Text weight={600}>Free & Open Source.</Text>
              <Text color="dimmed">All packages have MIT license.</Text>
            </List.Item>
            <List.Item>
              <Text weight={600}>Free & Open Source.</Text>
              <Text color="dimmed">All packages have MIT license.</Text>
            </List.Item>
            <List.Item>
              <Text weight={600}>Free & Open Source.</Text>
              <Text color="dimmed">All packages have MIT license.</Text>
            </List.Item>
          </List>
        </div>
        <Image src="/images/undraw/co-workers.svg" className={$.image} />
      </div>
    </Container>
  );
};

const Jobs = () => {
  const isBigScreen = useMediaQuery("(min-width: 760px)");

  return (
    <Container my={50}>
      <Group noWrap={isBigScreen} spacing={20}>
        <Stack spacing={0} maw={600}>
          <Title order={2}>Work @ Dorkodu</Title>
          <Text color="dimmed" weight={500} size="lg">
            Join the revolution.
          </Text>
          <Text my={8}>
            {`
          We're proud of our mission and the business we've built around it. 
          We work really hard, and most days we love our jobs. 
        `}
          </Text>
          <div>
            <Button variant="gradient" rightIcon={<IconArrowRight />} size="lg" radius={18} mt={10}>
              Explore Open Roles
            </Button>
          </div>
        </Stack>
        <Image src="/images/undraw_pair-programming.svg" alt="" />
      </Group>
    </Container>
  );
};

const Investors = () => {
  const isBigScreen = useMediaQuery("(min-width: 760px)");

  return (
    <Container my={50}>
      <Group noWrap={isBigScreen} spacing={20}>
        <Stack spacing={0} maw={600}>
          <Title order={2}>Press</Title>
          <Text color="dimmed" weight={500} size="lg">
            Look, we hit the news{" "}
            <b>
              <i>!</i>
            </b>
          </Text>
          <Text my={8}>
            {`
              We're proud of our mission and the business we've built around it. 
              We work really hard, and most days we love our jobs. 
          `}
          </Text>
          <div>
            <Button variant="gradient" rightIcon={<IconArrowRight />} size="lg" radius={18} mt={10}>
              Explore Open Roles
            </Button>
          </div>
        </Stack>
        <Image src="/images/undraw/.svg" alt="" />
      </Group>
    </Container>
  );
};

const Press = () => {
  const isBigScreen = useMediaQuery("(min-width: 760px)");

  return (
    <Container my={50}>
      <Group noWrap={isBigScreen} spacing={20}>
        <Stack spacing={0} maw={600}>
          <Title order={2}>Press</Title>
          <Text color="dimmed" weight={500} size="lg">
            We are on the news!
          </Text>
          <Text my={8}>
            {`
          We're proud of our mission and the business we've built around it. 
          We work really hard, and most days we love our jobs. 
        `}
          </Text>
          <div>
            <Button variant="gradient" rightIcon={<IconArrowRight />} size="lg" radius={18} mt={10}>
              Explore Open Roles
            </Button>
          </div>
        </Stack>
        <Image src="/images/undraw/news.svg" alt="News" maw={400} />
      </Group>
    </Container>
  );
};

const OurTeam = () => {
  return (
    <Box component="section" id="people" py={20}>
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
      <SectionTitle title="Our Story" text="A timeline of pursuing meaning in technology." icon={GreenBook} />
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
