import Head from "next/head";

import {
  Text,
  Container,
  createStyles,
  rem,
  Image,
  Title,
  List,
  SimpleGrid,
  ThemeIcon,
  Box,
  Paper,
  Anchor,
  Button,
  Group,
  Alert,
} from "@mantine/core";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";

import { SectionTitle, Showcase } from "@/components/Commons";
import { Blossom, Briefcase, Emoji, Watch } from "@/styles/emoji";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBusinessplan,
  IconGift,
  IconMapPinOff,
  IconMoodHappyFilled,
  IconReceipt2,
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
      <WhoYouAre />
      <PerksAndBenefits />
      <HowWeWork />
      <OpenRoles />
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
          <Text size={20} maw={425}>
            Join our mission to reinvent how humans and computers think, work and live together.
          </Text>
          <Group my={20}>
            <Button size="md" radius="lg" rightIcon={<IconArrowRight />}>
              Explore Open Roles
            </Button>
            <Button size="md" radius="lg" variant="light" color="green">
              About Us
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
        Early computing pioneers envisioned a future where machines on our desks could amplify our imagination, extend
        our intellect, and help us model information in ways never before seen. This is the type of tool we want to
        build together at Notion — one that gives you the software you can mold and shape like clay to solve your
        problems your way.
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
      <Showcase
        size={1.25}
        content={[
          <Box>
            <Title order={2}>Who We Are?</Title>
            <Title order={3} color="dimmed">
              Join a Team of Makers.
            </Title>
            <Text my={10}>
              We are designers and engineers. Problem solvers and storytellers. We are a diverse team of individuals,
              all makers at heart.
            </Text>
            <Text my={10}>
              People at Dorkodu typically share a strong sense of mission, desire for autonomy and ownership over a
              domain, and a strong generalist skillset within or across disciplines.
            </Text>
          </Box>,
          <Box>
            <Text>People here are passionate about learning and gaining mastery over one or multiple skills.</Text>
          </Box>,
        ]}
      />
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
      icon: <IconReceipt2 size={32} />,
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
    <Container my={50} px={0}>
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

const WhoYouAre = () => {
  const jobBenefits: SmallCardData[] = [
    {
      icon: <IconBusinessplan size={32} />,
      title: "Stock Options",
    },
  ];

  return (
    <Container my={50} px={0}>
      <Showcase
        size={0.8}
        content={[
          <SectionTitle
            icon={<Emoji size={40} emoji={Blossom} />}
            title="Who You Are?"
            text="What we look for in you."
          />,
          <Text>
            <b>We are a bootstrapped startup.</b> Soon to become profitable, don't expect too much. If you believe in
            our mission and you are a long-term thinker, you found your place!
          </Text>,
        ]}
      />
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

type SmallCardData = { icon?: React.ReactNode; title?: React.ReactNode; text?: React.ReactNode };

const SmallCardWithIcon = ({ data: { icon, title, text } }: { data: SmallCardData }) => (
  <Paper p={10}>
    {icon && (
      <ThemeIcon mb={8} size={48} variant="gradient" gradient={{ from: "indigo", to: "cyan" }} radius="lg">
        {icon}
      </ThemeIcon>
    )}
    {title && (
      <Text weight={600} mb={5}>
        {title}
      </Text>
    )}
    {text && (
      <Text weight={500} color="dimmed">
        {text}
      </Text>
    )}
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
  <Showcase
    size={1.5}
    content={[
      <Container py={50} px={0}>
        <SectionTitle
          icon={<Emoji size={40} emoji={Watch} />}
          title="How We Work?"
          text="First know, then trust the process."
        />
        <Text my={20}></Text>
        <List
          center
          icon={<></>}
          spacing={15}
          styles={($) => ({
            item: {
              borderWidth: 1,
              borderColor: $.colorScheme == "dark" ? $.colors.dark[9] : $.colors.gray[2],
              background: $.colorScheme == "dark" ? $.colors.dark[8] : $.colors.gray[1],
              borderStyle: "solid",
              borderRadius: 10,
              padding: 10,
              paddingLeft: 0,
            },
          })}
        >
          <List.Item>
            <Text weight={700} mb={5}>
              Highly Aligned, Loosely Coupled.
            </Text>
            <Text>Members of our team understand high-level company goals, are autonomous, and show initiative.</Text>
          </List.Item>
          <List.Item>
            <Text weight={700} mb={5}>
              Ambition Shapes Reality.
            </Text>
            <Text>
              We are extremely ambitious in what we can accomplish. We set high standards, expecting to fail in the
              short-term but knowing that failure guides us to learn and ultimately succeed.
            </Text>
          </List.Item>
          <List.Item>
            <Text weight={700} mb={5}>
              Product-Driven.
            </Text>
            <Text>
              We invest in a world-class experience that reduces massive friction for our users and speaks for itself.
            </Text>
          </List.Item>
          <List.Item>
            <Text weight={700} mb={5}>
              Asynchronous Productivity.
            </Text>
            <Text>
              We are a globally distributed and diverse team that values deep, asynchronous work, effective and clear
              communication.
            </Text>
          </List.Item>
          <List.Item>
            <Text weight={700} mb={5}>
              Learn Through Building
            </Text>
            <Text>
              It's time to build! We ship frequently, connect with our community, and iterate until we get it perfect.
            </Text>
          </List.Item>
        </List>
      </Container>,
      <Box>
        <Image src="/images/undraw/in-the-office.svg" alt="People in the office." maw={400} />
      </Box>,
    ]}
  />
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