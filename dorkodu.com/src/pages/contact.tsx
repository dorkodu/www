import Meta from "@/components/Meta";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { Emoji, PottedPlant } from "@/styles/emoji";
import { Container, Title } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";

const meta = {
  title: `Contact Us — Dorkodu`,
  description: `Let's have a talk!`,
  keywords: `contact us, contact, dorkodu`,
  url: "/contact",
};

const Page: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <Hero />
    </WebsiteLayout>
  );
};

export default Page;

const Hero = () => {
  return (
    <Container size={600}>
      <Emoji size={80} emoji={PottedPlant} />
      <Title
        order={1}
        mt={10}
        sx={(theme) => ({
          letterSpacing: -0.75,
          color: theme.colorScheme == "dark" ? theme.white : theme.black,
        })}
      >
        Dorkodu's Digital Garden
      </Title>
      <Title
        order={2}
        size="h3"
        color="dimmed"
        sx={{
          letterSpacing: -0.25,
        }}
      >
        Our ideas seedling for the public.
      </Title>
    </Container>
  );
};
