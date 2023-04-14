import { WIP } from "@/components/Commons";
import Meta from "@/components/Meta";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { Emoji, PottedPlant, Store } from "@/styles/emoji";
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
      <WIP />
    </WebsiteLayout>
  );
};

export default Page;

const Hero = () => {
  return (
    <Container size={600}>
      <Emoji size={64} emoji={Store} />
      <Title
        order={1}
        mt={10}
        sx={(theme) => ({
          letterSpacing: -1.25,
          color: theme.colorScheme == "dark" ? theme.white : theme.black,
        })}
      >
        <Text variant="gradient" gradient={{ from: "#00cc40", to: "lime", deg: 180 }} span>
          Dorkodu
        </Text>
        &nbsp;For Business
      </Title>
      <Title
        order={2}
        size="h3"
        color="dimmed"
        sx={{
          letterSpacing: -0.25,
        }}
      >
        Build and grow, together.
      </Title>
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
