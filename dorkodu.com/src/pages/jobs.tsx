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
  Stack,
  List,
  SimpleGrid,
  ThemeIcon,
  Box,
  Paper,
  Anchor,
  Button,
  Group,
  Alert,
  Flex,
  Divider,
} from "@mantine/core";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";

import { HeroIndex } from "@/components/Hero/HeroIndex";
import { SectionTitle, Showcase } from "@/components/Commons";
import { ArrowRight, Blossom, Briefcase, Emoji, Watch } from "@/styles/emoji";
import {
  IconArrowRight,
  IconBrain,
  IconBrandGithub,
  IconBrandTwitter,
  IconBusinessplan,
  IconCaravan,
  IconGift,
  IconMapPinOff,
  IconMoodHappyFilled,
  IconTent,
} from "@tabler/icons-react";
import { IconBrandTwitterFilled } from "@tabler/icons-react";

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
      <Headline />
      <Hero />
      <Pitch />
      <WhoWeAre />
      <PerksAndBenefits />
      <HowWeWork />
      <OpenRoles />
      <PerksAndBenefits />
    </WebsiteLayout>
  );
};

export default Jobs;

const Headline = () => {
  const { classes: $, theme } = styles.Hero();

  return (
    <Container size={500} p={0}>
      <Title
        order={1}
        size={48}
        color="dimmed"
        variant="gradient"
        gradient={{ from: "#00cc44", to: "lime", deg: 180 }}
        className={$.title}
        align="center"
      >
        Jobs
      </Title>
      <Title order={2} size="h1" weight={800} className={$.headline} align="center">
        Work @ Dorkodu
      </Title>
      <Text my={8} size={18} weight={500} color="dimmed" align="center">
        Join the revolution.
      </Text>
    </Container>
  );
};

const Hero = () => {
  const { classes: $, theme } = styles.Hero();

  return (
    <Container mt={25} mb={100}>
      <div className={$.inner}>
        <div className={$.content}>
          <Text size={18} maw={425}>
            Your very own set of tools to build and explore the new internet. From private notes to decentralized
            communities.
          </Text>
          <Group my={20}>
            <Button size="md" radius="lg" variant="light" color="green">
              About Us
            </Button>
            <Button size="md" radius="lg" rightIcon={<IconArrowRight />}>
              Explore Open Roles
            </Button>
          </Group>
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
      <Title
        sx={($) => ({
          letterSpacing: -1,
          lineHeight: 1.2,
          color: $.colorScheme == "dark" ? $.white : $.black,
          marginBottom: 20,
        })}
      >
        Technology has lost its meaning.
        <br />
        Help us bring it back, together.
      </Title>
      <Text>
        Remember when software felt magical? Good software used to be an experience.
        <br />
        It used to radically change how we lived and worked.
        <br />
        It made us feel like we lived in the future.
      </Text>
      <Text>
        We are building the tools for the next generation of high-impact individuals and teams. The place where
        ambitious creators come to bring radical ideas to life.
      </Text>
      <Text>
        We are looking for talented people who share our passion for crafting exceptional software products.
        <br />
        That person might be you.
      </Text>
      <Text>Join us and let's bring back the magic of software.</Text>
      <Quote />
    </Container>
  );
};

const OpenRoles = () => (
  <Container py={40}>
    <Showcase
      content={[
        <Box>
          <SectionTitle
            title="Open Roles"
            text="Explore what you can do here."
            icon={<Emoji emoji={Briefcase} size={32} />}
          />
          <Group spacing={10} my={20}>
            <Button
              component="a"
              href="https://github.com/dorkodu"
              leftIcon={<IconBrandGithub />}
              color="dark"
              size="md"
              radius="lg"
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="https://twitter.com/dorkodu"
              leftIcon={<IconBrandTwitterFilled />}
              color="blue"
              size="md"
              radius="lg"
            >
              Twitter
            </Button>
          </Group>
        </Box>,
        <Box>
          <Alert title="No Openings Found." color="green" variant="light" my={20}>
            <Text>
              We are not actively filling new roles right now but will list future positions here soon. You can express
              your interest in working with us by sending an email to{" "}
              <Anchor href="mailto:hey@dorkodu.com" color="blue" weight={500} span>
                hey@dorkodu.com
              </Anchor>
              .
            </Text>
          </Alert>
        </Box>,
      ]}
    />
  </Container>
);

const WhoWeAre = () => {
  return (
    <Container>
      <Title>Join a team of makers</Title>
      <Text>
        We are designers and engineers. Problem solvers and storytellers. We are a diverse team of individuals, all
        makers at heart.
      </Text>
      <Text>
        People at Dorkodu typically share a strong sense of mission, desire for autonomy and ownership over a domain,
        and a strong generalist skillset within or across disciplines.
      </Text>
      <Text>People here are passionate about learning and gaining mastery over one or multiple skills.</Text>
    </Container>
  );
};

const PerksAndBenefits = () => {
  const jobBenefits: SmallCardData[] = [
    {
      icon: <IconBusinessplan size={32} />,
      title: "Stock Options",
      text: `Act like an owner, cause you are.`,
    },
    {
      icon: <IconTent size={32} />,
      title: "Fully Remote + Async",
      text: "Flexible working hours.",
    },

    {
      icon: <IconMoodHappyFilled size={32} />,
      title: "Team Events & Care",
      text: "Hackathons, therapy sessions, coaching etc. to support you to be your best self.",
    },
    {
      icon: <IconGift size={32} />,
      title: "End Of Year Bonus",
      text: "We value going that extra mile.",
    },
    {
      icon: <IconBusinessplan size={32} />,
      title: "Share-based Compensation",
      text: "Earn as much as you contribute. That's fair. No salary or formal titles.",
    },
    {
      icon: <IconMapPinOff size={32} />,
      title: "#NoLocationBasedSalary",
      text: "We pay you a universal basic rate.",
    },
  ];

  return (
    <Container my={50}>
      <Showcase
        size={0.8}
        content={[
          <SectionTitle
            icon={<Emoji size={40} emoji={Blossom} />}
            title="Perks & Benefits"
            text="What to expect as a bonus."
          />,
          <Text>
            <b>We are a bootstrapped startup.</b> Soon to become profitable, don't expect too much. If you believe in
            our mission and you are a long-term thinker, you found your place!
          </Text>,
        ]}
      />
      <Divider py={20} size="xs" />
      <SimpleGrid
        cols={3}
        spacing={0}
        breakpoints={[
          { maxWidth: "48rem", cols: 2, spacing: "sm" },
          { maxWidth: "36rem", cols: 1, spacing: "sm" },
        ]}
      >
        {jobBenefits.map(($, i) => (
          <SmallCardWithIcon data={$} key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

type SmallCardData = { icon: React.ReactNode; title: React.ReactNode; text: React.ReactNode };

const SmallCardWithIcon = ({ data: { icon, title, text } }: { data: SmallCardData }) => (
  <Paper p={10}>
    <ThemeIcon mb={8} size={48} variant="gradient" gradient={{ from: "indigo", to: "cyan" }} radius="lg">
      {icon}
    </ThemeIcon>
    <Text weight={600} mb={5}>
      {title}
    </Text>
    <Text weight={500} color="dimmed">
      {text}
    </Text>
  </Paper>
);

const Quote = () => (
  <Container py={40} size={550}>
    <Text weight={600} size="xl">
      “The best way to predict the future is to invent it.”
    </Text>
    <Text size="xl" my={5}>
      — Alan Kay,
      <Text color="dimmed" span>
        &nbsp;a pioneer in computers.
      </Text>
    </Text>
  </Container>
);

const JobOpenings = () => {
  return (
    <Container>
      <Title>Open Roles</Title>
      <Text></Text>
    </Container>
  );
};

const HowWeWork = () => (
  <Group>
    <Container py={50}>
      <SectionTitle icon={<Emoji size={40} emoji={Watch} />} title="How We Work?" text="" />
      <Text my={20}></Text>
      <List center icon={<Emoji emoji={ArrowRight} size={24} />} spacing={15}>
        <List.Item>
          <Text weight={600}>Highly Aligned, Loosely Coupled.</Text>
          <Text>Members of our team understand high-level company goals, are autonomous, and show initiative.</Text>
        </List.Item>
        <List.Item>
          <Text weight={600}>Ambition Shapes Reality.</Text>
          <Text>
            We are extremely ambitious in what we can accomplish. We set high standards, expecting to fail in the
            short-term but knowing that failure guides us to learn and ultimately succeed.
          </Text>
        </List.Item>
        <List.Item>
          <Text weight={600}>Product-Driven.</Text>
          <Text>
            We invest in a world-class experience that reduces massive friction for our users and speaks for itself.
          </Text>
        </List.Item>
        <List.Item>
          <Text weight={600}>Asynchronous Productivity.</Text>
          <Text>
            We are a globally distributed and diverse team that values deep, asynchronous work, effective and clear
            communication.
          </Text>
        </List.Item>
        <List.Item>
          <Text weight={600}>Learn Through Building</Text>
          <Text>
            It's time to build! We ship frequently, connect with our community, and iterate until we get it perfect.
          </Text>
        </List.Item>
      </List>
    </Container>
    <Box>
      <Image src="/images/undraw/" />
    </Box>
  </Group>
);

const Freelance = () => {
  return (
    <Container>
      <Title order={2}>We Offer Freelance Positions!</Title>
      <Text>
        Duolingo is constantly exploring new ways to reach language learners. Help us expand our mission through these
        specialty freelance opportunities. While these roles are exempt from full-time employment benefits, they offer
        the opportunity to collaborate with the Duolingo team on content that will reach millions of learners worldwide.
      </Text>
    </Container>
  );
};
