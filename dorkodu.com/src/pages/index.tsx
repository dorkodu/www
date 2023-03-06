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
} from "@mantine/core";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";

import { HeroIndex } from "@/components/Hero/HeroIndex";
import { FunctionComponent } from "react";

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
        <HeroIndex />
        <Products />
        <ProsConsList />
        <Mission />
        <LeadGrid />
        <Punchline />
        <Newsletter />
      </main>
    </WebsiteLayout>
  );
};

const Products = () => {
  return <></>;
};

const Mission = () => {
  return <></>;
};

const ProsConsList = () => {
  return <></>;
};

const Punchline = () => {
  return <></>;
};

const Newsletter = () => {
  return <></>;
};

const LeadGrid = () => {
  const theme = useMantineTheme();

  const PRIMARY_COL_HEIGHT = rem(300);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container my="xl">
      <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <Paper>
          <Title order={3}>Lorem, ipsum.</Title>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio maiores esse impedit natus ipsam commodi eum
            dolorem libero tempora vitae!
          </Text>
        </Paper>
        <Grid gutter="lg">
          <Grid.Col>
            <Paper>
              <Title order={3}>Lorem, ipsum.</Title>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio maiores esse impedit natus ipsam commodi
                eum dolorem libero tempora vitae!
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper>
              <Title order={3}>Lorem, ipsum.</Title>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio maiores esse impedit natus ipsam commodi
                eum dolorem libero tempora vitae!
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper>
              <Title order={3}>Lorem, ipsum.</Title>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio maiores esse impedit natus ipsam commodi
                eum dolorem libero tempora vitae!
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
