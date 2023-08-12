import {
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Showcase } from "@shared/components/commons";

import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";

export default function Page() {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <SocialLinks />
      <FeaturedNotes />
      <Highlights />
      <Portfolio />
    </Container>
  );
}

const Hero = () => (
  <Showcase
    size={1}
    content={[
      <Group p={10} spacing={10} position="right">
        <Image src="/images/doruk-student.png" maw={320} mah={320} radius={8} />
      </Group>,
      <Stack spacing={0}>
        <Title order={1} weight={800} size={36} sx={{ letterSpacing: -1 }}>
          Hello, world!
        </Title>
        <Title order={2} weight={600} size={20} color="dimmed">
          Welcome to my personal website.
        </Title>
        <Text mt={12}>
          I'm Doruk Eray, a <b>founder</b>, <b>polymath</b> and <b>craftsman</b>{" "}
          based in <b>Istanbul</b>.
        </Text>
        <Group my={16}>
          <Button size="lg" radius="lg" rightIcon={<IconArrowRight />}>
            Let's Work Together!
          </Button>
        </Group>
      </Stack>,
    ]}
  />
);

const AboutMe = () => (
  <Container>
    <Title order={2}>About Me</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dicta
      voluptatem deleniti culpa? Eveniet alias pariatur, tempora enim sequi
      perspiciatis tenetur obcaecati iure architecto excepturi ab. Ab neque
      laudantium adipisci?
    </Text>
  </Container>
);

const SocialLinks = () => <></>;
const FeaturedNotes = () => <></>;

const Highlights = () => (
  <Container px={0}>
    <Twitter />
    <GitHub />
    <Substack />
    <Spotify />
  </Container>
);

const Substack = () => (
  <Container px={0}>
    <Title order={2}>Portfolio</Title>
  </Container>
);

const Spotify = () => (
  <Container px={0}>
    <Title order={2}>Portfolio</Title>
  </Container>
);

const GitHub = () => (
  <Container px={0}>
    <Title order={2}>Portfolio</Title>
  </Container>
);

const Twitter = () => (
  <Container px={0}>
    <Title order={2}>Portfolio</Title>
  </Container>
);

const Portfolio = () => (
  <Container px={0}>
    <Title order={2}>Portfolio</Title>
  </Container>
);
