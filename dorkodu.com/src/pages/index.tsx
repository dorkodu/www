import Head from "next/head";

import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  rem,
  useMantineTheme,
  Card,
  Title,
  Text,
  Box,
  Paper,
  Group,
  createStyles,
  Button,
  ThemeIcon,
  Col,
  Stack,
  List,
  Image,
  CSSObject,
} from "@mantine/core";

import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from "@tabler/icons-react";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";

import Meta from "@/components/Meta";
import { HeroIndex } from "@/components/Hero/HeroIndex";
import { EmailBanner } from "@/components/Newsletter";

import ForumIcon from "@/assets/logos/forum_Icon.svg";
import IDIcon from "@/assets/logos/id_Icon.svg";

import { ProductShowcaseGrid } from "@/components/Product";
import { FeaturedUseCases } from "@/components/Features";
import { FAQs } from "@/components/FAQ";
import { HeroWithBackground } from "@/components/Hero/HeroWithBackground";
import { FeaturedUsecases } from "@/data/featured";
import Dorkodu from "@/types/dorkodu";
import { projects } from "@/data/products";

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
      <HeroIndex />
      <Products />
      <Punchline />
      <FeaturedUseCases {...FeaturedUsecases} />
      <ProsConsList />
      <Mission />
      <FAQs />
      <LeadGrid />
      <Newsletter />
    </WebsiteLayout>
  );
};

const styles = {
  FeaturesWithTitle: createStyles((theme) => ({
    wrapper: {
      padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },

    title: {
      fontSize: rem(36),
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  })),
};

const Products = () => {
  const products: Dorkodu.Project[] = [
    { title: "Forum", tagline: "Social Discourse", image: ForumIcon.src, link: "/products/forum" },
    { title: "ID", tagline: "Your Digital Identity", image: IDIcon.src, link: "/products/id" },
  ];

  return (
    <Box my={60}>
      <Title order={2} weight={800}>
        Our Apps
      </Title>
      <ProductShowcaseGrid products={products} />
    </Box>
  );
};

const ProsConsList = () => {
  return <></>;
};

const Punchline = () => {
  return <></>;
};

const Newsletter = () => {
  return <EmailBanner />;
};

export const Mission = () => {
  return (
    <section>
      <Stack>
        <Title>Our Purpose</Title>
        <Text>we want to help people...</Text>
        <List>
          <List.Item>find their true purpose & passion.</List.Item>
          <List.Item>actualize themselves.</List.Item>
          <List.Item>create a free and happy life experience for everyone.</List.Item>
          <List.Item>build the utopian dream of heaven on earth.</List.Item>
        </List>
      </Stack>

      <Stack>
        <Title>Our Mission</Title>
        <Text>
          we combine <em>gamification</em>, <em>human-centric design</em> and <em>our superior technology</em> to create
          products which <em>free the human spirit.</em>
        </Text>
      </Stack>
    </section>
  );
};

export const OurWork = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.title} />
          <h4>{project.title}</h4>
          <p>{project.tagline}</p>
          <p>
            <span>{project.type}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

const LeadGrid = () => {
  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = rem(300);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} bg="blue" radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} bg="blue" radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} bg="blue" radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
