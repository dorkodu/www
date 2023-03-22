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
} from "@mantine/core";

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
      <Jobs />
      <Press />
    </WebsiteLayout>
  );
};

export default About;

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

const Press = () => {
  return (
    <Container size={600}>
      <Title order={2}>Press</Title>
      <Text color="dimmed">
        {`
          We're proud of our mission and the business we've built around it. 
          We work really hard, and most days we love our jobs. 
          Learn about working at Dorkodu and our current openings.
        `}
      </Text>
      <Button variant="gradient" rightIcon={<IconArrowRight />}>
        Explore Open Roles
      </Button>
      <Image src="" alt="" />
    </Container>
  );
};

const styles = {
  Hero: createStyles((theme) => ({
    title: {
      color: theme.colorScheme == "dark" ? theme.colors.gray[6] : theme.colors.gray[5],
    },
    tagline: {
      color: theme.colorScheme == "dark" ? theme.white : theme.black,
    },
    description: {},
  })),
};

const Hero = () => {
  const { classes: x, theme } = styles.Hero();

  return (
    <>
      <Title order={1} size="h2" color="dimmed" className={x.title}>
        About Dorkodu
      </Title>
      <Title order={2} size="h1" weight={800} className={x.tagline}>
        We are your <Text<"span"> variant="gradient">dream fulfillment</Text> <Text></Text> company.
      </Title>
    </>
  );
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

import { Button, ThemeIcon, rem } from "@mantine/core";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function HeroBullets() {
  const { classes: $ } = useStyles();

  return (
    <Container>
      <div className={$.inner}>
        <div className={$.content}>
          <Title className={$.title}>
            A <span className={$.highlight}>modern</span> React <br /> components library
          </Title>
          <Text color="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes more than 120
            customizable components and hooks to cover you in any situation
          </Text>

          <List mt={30}>
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all components and hooks export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when user navigates with keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={$.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={$.control}>
              Source code
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={$.image} />
      </div>
    </Container>
  );
}
