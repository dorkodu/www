import Meta from "@/components/Meta";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { createStyles, Title, Text, Button, Container, Group, rem, Stack, Image, List, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";
import { NextPage } from "next";
import Head from "next/head";

const meta = {
  title: "README",
  description: `A Story of...`,
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

      <Hero />

      <Container size={600} my={50}>
        <ActI />
        <ActI />
        <ActI />
      </Container>

      <Jobs />
    </WebsiteLayout>
  );
};

export default Readme;

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
            README
          </Title>
          <Title order={2} size="h1" weight={800} className={$.headline}>
            The Dorkodu Manifesto
          </Title>
          <Text my={8} size={18} maw={425}>
            <div>A story of tools for the human mind.</div>
          </Text>
          <Text size={18} maw={425} color="dimmed">
            <div>
              Your very own set of tools to build and explore the new internet. From private notes to decentralized
              communities.
            </div>
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

const ActI = () => {
  return (
    <StoryAct>
      <Title>Act I.</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui. Molestias expedita, alias sit maiores porro
        nam veniam architecto itaque quo inventore laudantium obcaecati totam.
      </Text>
    </StoryAct>
  );
};

const StoryAct = ({ children }: { children: React.ReactNode }) => {};

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
