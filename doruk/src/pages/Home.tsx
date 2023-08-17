import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

import { ContactInfoIcon } from "@/components/Contact";

import { Showcase } from "@shared/components/commons";
import {
  Earth,
  Emoji,
  SmilingEyes,
  SparklingHeart,
} from "@shared/styles/emoji";
import { website } from "@/website";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";
import { GitHubProfileCard, GithubUserCard } from "@/components/Github";

export default function Page() {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <FeaturedNotes />
      <Highlights />
      <Portfolio />
      <ContactMe />
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
        <Text mt={12} size="md">
          I'm Doruk Eray, a <b>Founder</b>, <b>Polymath</b> and <b>Craftsman</b>{" "}
          from <b>Istanbul</b>. My focus is on software, music and business.
        </Text>

        <List
          icon={
            <Text weight={500} size={18}>
              ∗
            </Text>
          }
          center
          spacing={5}
          mt={10}>
          <List.Item>
            <Text>
              I design products and build software @&nbsp;
              <Anchor
                href="https://dorkodu.com"
                color="blue"
                weight={600}
                td="underline">
                Dorkodu
              </Anchor>
              .
            </Text>
          </List.Item>
          <List.Item>
            I sing, write songs and play guitar @&nbsp;
            <Anchor
              href="https://instagram.com/theterraspark"
              color="blue"
              weight={600}
              td="underline">
              Terraspark
            </Anchor>
            .
          </List.Item>
        </List>

        <SocialLinks />

        <Group my={5}>
          <Button size="md" radius="lg">
            See My Portfolio
          </Button>
          <Button size="md" radius="lg" variant="light">
            Read My Story
          </Button>
        </Group>
      </Stack>,
    ]}
  />
);

const AboutMe = () => (
  <Showcase
    content={[
      <Stack pr={20}>
        <Title order={2}>In a nutshell...</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus mollitia architecto ea in consectetur neque at nulla
          nobis. Error quaerat nobis exercitationem dolorum nihil
          necessitatibus?
        </Text>
      </Stack>,
      <MissionStatement />,
    ]}
  />
);

export const MissionStatement = () => {
  const theme = useMantineTheme();

  return (
    <Box component="section" id="our-purpose" py={20}>
      <Box mb={10}>
        <Text
          size={24}
          weight={800}
          color={theme.colorScheme == "dark" ? theme.white : theme.black}>
          Liberate the Humankind;
        </Text>
        <Text size={20} weight={500} color="dimmed">
          with meaningful art & technology.
        </Text>
      </Box>
      <List spacing={5} center>
        <List.Item icon={<Emoji size={24} emoji={SparklingHeart} />}>
          Help people find and pursue their life purpose.
        </List.Item>
        <List.Item icon={<Emoji size={24} emoji={SmilingEyes} />}>
          Create a meaningful life experience for everyone.
        </List.Item>
        <List.Item icon={<Emoji size={24} emoji={Earth} />}>
          Build the utopian dream of heaven on earth.
        </List.Item>
      </List>
    </Box>
  );
};

const SocialLinks = () => {
  const social: { link: string; icon: JSX.Element }[] = [
    { link: "", icon: <></> },
  ];

  return (
    <Group spacing={5} my={10}>
      <ActionIcon<"a"> variant="default" radius={12} size={40}>
        <IconBrandInstagram size={32} stroke={2.15} />
      </ActionIcon>
      <ActionIcon variant="default" radius={12} size={40}>
        <IconBrandTwitter size={30} stroke={2.15} />
      </ActionIcon>
      <ActionIcon variant="default" radius={12} size={40}>
        <IconBrandLinkedin size={30} stroke={2.15} />
      </ActionIcon>
      <ActionIcon variant="default" radius={12} size={40}>
        <IconBrandGithub size={30} stroke={2.15} />
      </ActionIcon>
      <ActionIcon variant="default" radius={12} size={40}>
        <IconMail size={30} stroke={2.15} />
      </ActionIcon>
    </Group>
  );
};
const FeaturedNotes = () => <></>;

const Highlights = () => {
  const Spotify = () => (
    <Container py={20} size={600}>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/1JjHkm5GrtUt6bGogDce5e?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    </Container>
  );

  const GitHub = () => (
    <Container size={600} sx={{ border: "1px solid #ccc" }}>
      <Title>Github</Title>
      <GitHubProfileCard width={400} username="dorukeray" />
      <Text>·</Text>
    </Container>
  );

  return (
    <Container px={0}>
      <GitHub />
      <Substack />
      <Spotify />
    </Container>
  );
};

const Substack = () => (
  <Container size={600} px={0}>
    <iframe
      src="https://dorkodu.substack.com/embed"
      width="100%"
      style={{
        background: "white",
        borderRadius: 10,
        height: 400,
      }}
      frameBorder="0"
      scrolling="no"></iframe>
  </Container>
);

const Portfolio = () => (
  <Container px={0}>
    <Title order={2}>Portfolio</Title>
  </Container>
);

export const ContactMe = () => {
  return (
    <Container size={600} pt={50}>
      <Title order={2} align="center" mb={8}>
        Contact Me
      </Title>
      <Text maw={400} align="center" mx="auto">
        For any question, problem, wish or suggestion; you can reach me via any
        related platform below.
      </Text>
      <SimpleGrid
        my={25}
        cols={2}
        breakpoints={[{ maxWidth: "540", cols: 1, spacing: "sm" }]}
        spacing={20}
        verticalSpacing={20}>
        {website.contact.map((info) => (
          <Box key={info.title}>
            <ContactInfoIcon info={info} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};
