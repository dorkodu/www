import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  List,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
  IconExternalLink,
  IconMail,
} from "@tabler/icons-react";

import { Showcase } from "@shared/components/commons";
import {
  Earth,
  Emoji,
  SmilingEyes,
  SparklingHeart,
} from "@shared/styles/emoji";

import { GitHubProfileCard } from "@/components/Github";

export default function Page() {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <FeaturedNotes />
      <Highlights />
      <Portfolio />
    </Container>
  );
}

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Showcase
      size={1}
      content={[
        <Group p={10} spacing={10} position="right">
          <Image
            src="/images/doruk-student.png"
            maw={320}
            mah={320}
            radius={8}
          />
        </Group>,
        <Stack spacing={0}>
          <Title order={1} weight={800} size={36} sx={{ letterSpacing: -1 }}>
            Hello, world!
          </Title>
          <Title order={2} weight={600} size={20} color="dimmed">
            Welcome to my personal website.
          </Title>
          <Text mt={12} size="md">
            I'm Doruk Eray, a <b>Founder</b>, <b>Polymath</b> and{" "}
            <b>Craftsman</b> from <b>Istanbul</b>. My focus is on software,
            music and business.
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
            <Button
              onClick={() => navigate("/portfolio")}
              size="md"
              radius="lg">
              See My Portfolio
            </Button>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dorukeray"
              size="md"
              radius="lg"
              variant="light"
              rightIcon={<IconExternalLink />}>
              Dorkodu
            </Button>
          </Group>
        </Stack>,
      ]}
    />
  );
};

const AboutMe = () => (
  <Showcase
    content={[
      <Stack pr={20}>
        <Title order={2}>🌰 In a nutshell...</Title>
        <Text>
          I design products, build software, lead a tech company, recently
          graduated high school, singing/songwriting and composing albums with
          my band.
        </Text>
        <Group spacing={4}>
          {[
            ["Software", "blue"],
            ["Music", "cyan"],
            ["Industrial Design", "red"],
            ["Artificial Intelligence", "indigo"],
            ["Knowledge Theory", "violet"],
            ["Psychology", "grape"],
            ["UI/UX Design", "orange"],
            ["Cryptoeconomics", "yellow"],
            ["Gamification", "lime"],
            ["Decentralized Web", "green"],
            ["Semantics", "teal"],
          ].map((text) => (
            <Badge variant="light" color={text[1]} radius={10} size="lg">
              {text[0]}
            </Badge>
          ))}
        </Group>
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
        <Badge variant="dot" size="lg" my={8}>
          My Life Mission
        </Badge>
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

const Portfolio = () => <Container px={0}></Container>;
const FeaturedNotes = () => <Container px={0}></Container>;

const SocialLinks = () => {
  const social: { link: string; icon: JSX.Element }[] = [
    {
      link: "https://twitter.com/d0rukeray",
      icon: <IconBrandTwitter size={30} />,
    },
    {
      link: "https://instagram.com/d0rukeray",
      icon: <IconBrandInstagram size={32} />,
    },
    {
      link: "https://github.com/dorukeray",
      icon: <IconBrandGithub size={30} />,
    },
    {
      link: "https://linkedin.com/in/dorukeray",
      icon: <IconBrandLinkedin size={32} />,
    },
    {
      link: "https://t.me/dorukeray",
      icon: <IconBrandTelegram size={32} />,
    },
    {
      link: "mailto:doruk@dorkodu.com",
      icon: <IconMail size={30} />,
    },
  ];

  return (
    <Group spacing={8} my={10}>
      {social.map((link) => (
        <a href={link.link} target="_blank" key={link.link}>
          <ActionIcon variant="default" radius={12} size={40}>
            {link.icon}
          </ActionIcon>
        </a>
      ))}
    </Group>
  );
};

const Highlights = () => {
  const Spotify = () => (
    <Container py={20} size={600} px={0}>
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

  const Substack = () => (
    <iframe
      src="https://dorkodu.substack.com/embed"
      width="100%"
      style={{
        background: "white",
        borderRadius: 16,
        height: 400,
        marginTop: 20,
      }}
      frameBorder="0"
      scrolling="no"></iframe>
  );

  const GitHub = () => (
    <Container py={20} size={600} px={0}>
      <GitHubProfileCard commitGraph width={400} username="dorukeray" />{" "}
    </Container>
  );

  return (
    <Container px={0}>
      <Showcase
        size={0.8}
        content={[
          <Stack>
            <Title order={2}>I ❤️ Open Source</Title>
            <Text>
              Since my teenage years, I've built many open source projects;
              libraries, tools and even some components of Dorkodu's
              products/services are open to public.
            </Text>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dorukeray"
              size="md"
              radius="lg"
              rightIcon={<IconExternalLink />}>
              See My GitHub Page
            </Button>
          </Stack>,
          <Flex align="flex-end">
            <GitHub />
          </Flex>,
        ]}
      />

      <Container size={600} px={0}>
        <Title order={2} align="center" my={12}>
          🔖 We're on Substack.
        </Title>
        <Text>
          Dorkodu has a newsletter and community on Substack. You may like our
          weekly publication, notes and podcasts about technology, design,
          business and more.
        </Text>
        <Substack />
      </Container>

      <Showcase
        size={0.65}
        content={[
          <Stack>
            <Title order={2}>💽 I'm on Spotify.</Title>
            <Text>
              I curate <i>concept album</i> playlists, usually following our
              studio sessions with my band.
            </Text>
            <Text weight={600} color="dimmed">
              Ever dreamed about a “superalbum” of songs by different artists
              but they vibe together?
            </Text>
          </Stack>,
          <Spotify />,
        ]}
      />
    </Container>
  );
};
