import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { GitHubProfileCard } from "./Github";
import { Showcase } from "@shared/components/commons";
import { IconBrandGithub } from "@tabler/icons-react";

//? Lazy-loading Optimization
const SubstackEmbed = React.lazy(
  () => import(`@/components/embeds/SubstackEmbed`)
);

const OpenSource = () => (
  <Showcase
    size={0.8}
    content={[
      <Box maw={500} mx="auto">
        <Title order={2}>I ❤️ Open Source</Title>
        <Text my={12}>
          Since my teenage years, I've built many open source projects;
          libraries, tools and even some components of Dorkodu's
          products/services are open to public.
        </Text>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/berkcambaz"
          size="md"
          radius="lg"
          color="dark"
          leftIcon={<IconBrandGithub />}>
          See My GitHub
        </Button>
      </Box>,
      <Flex align="flex-end">
        <Container py={20} size={600} px={0}>
          <GitHubProfileCard commitGraph width={400} username="berkcambaz" />
        </Container>
      </Flex>,
    ]}
  />
);

const Writing = () => (
  <Showcase
    size={0.65}
    content={[
      <Stack maw={400} mx="auto">
        <Title order={2}>🔖 We're on Substack.</Title>
        <Text>
          Dorkodu has a newsletter and community on Substack. You may like our
          weekly publication, notes and podcasts about technology, design,
          business and more.
        </Text>
      </Stack>,
      <SubstackEmbed />,
    ]}
  />
);

export default function Highlights() {
  return (
    <Container px={0}>
      <OpenSource />
      <Writing />
    </Container>
  );
}
