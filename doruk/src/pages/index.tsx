import { Container, Stack, Text, Title } from "@mantine/core";
import { Showcase } from "@shared/components/commons";

export default function Page() {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <Portfolio />
    </Container>
  );
}

const Hero = () => (
  <Showcase
    content={[
      <Stack spacing={0}>
        <Title order={1} weight={800}>
          I am Doruk Eray.
        </Title>
        <Title order={2} weight={600}>
          Founder ✦ Polymath ✦ Craftsman
        </Title>
        <Text></Text>
      </Stack>,
      <></>,
    ]}
  />
);

const AboutMe = () => <>AboutMe</>;

const Portfolio = () => <>Portfolio</>;
