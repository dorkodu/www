import { Container, Image, Stack, Text, Title } from "@mantine/core";
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
        <Title order={1} weight={800} size={36} sx={{ letterSpacing: -1 }}>
          I'm Doruk Eray
        </Title>
        <Title order={2} weight={600} size={20} color="dimmed">
          Founder ∗ Polymath ∗ Craftsman
        </Title>
        <Text></Text>
      </Stack>,
      <Stack>
        <Image src="/images/doruk.png" maw={300} mah={300} my={0} mx={0} />
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
    <Substack />
    <Spotify />
    <GitHub />
    <Twitter />
  </Container>
);

const SocialLinks = () => <></>;
const FeaturedNotes = () => <></>;

const Substack = () => <></>;
const Spotify = () => <></>;
const GitHub = () => <></>;
const Twitter = () => <></>;

const Portfolio = () => <>Portfolio</>;
