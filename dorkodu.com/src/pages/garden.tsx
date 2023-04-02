import Meta from "@/components/Meta";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { Emoji, PottedPlant } from "@/styles/twemoji";
import { Badge, Container, Group, Paper, Text, Title } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";

const meta = {
  title: `Dorkodu's Digital Garden`,
  description: `Our ideas seedling for the public.`,
  keywords: `dorkodu garden, digital garden`,
  url: "/garden",
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
        sx={{
          letterSpacing: -0.75,
        }}
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
      <Text my={10}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nulla accusantium voluptates distinctio,
        dignissimos provident facilis officia veritatis molestias illum ea nostrum debitis fugiat et temporibus harum ut
        ipsa incidunt?
      </Text>
    </Container>
  );
};

const Garden = () => {};

const Idea = ({ title, text, tags }: { title: string; text: string; tags: string[] }) => {
  return (
    <Paper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Group>
        {tags.map((item) => (
          <Badge variant="light" color="blue" px={8}>
            {item}
          </Badge>
        ))}
      </Group>
    </Paper>
  );
};
