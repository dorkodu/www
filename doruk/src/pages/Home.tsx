import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Divider,
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
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBriefcase,
  IconCode,
  IconGlobe,
  IconMail,
  IconSchool,
} from "@tabler/icons-react";

import { Showcase } from "@shared/components/commons";
import {
  Earth,
  Emoji,
  SmilingEyes,
  SparklingHeart,
} from "@shared/styles/emoji";

import { GitHubProfileCard } from "@/components/Github";
import { IStoryElement, StoryElement } from "@/components/story";
import { randomId } from "@mantine/hooks";

export default function Page() {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <InANutshell />
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
        <Stack spacing={0} maw={500} mx="auto">
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
              onClick={() => navigate("/story")}
              size="md"
              radius="lg"
              variant="light">
              My Story
            </Button>
          </Group>
        </Stack>,
      ]}
    />
  );
};

const InANutshell = () => {
  const story: IStoryElement[] = [
    {
      icon: <IconBriefcase size={32} />,
      title: (
        <>
          I'm the Founder & Chief @{" "}
          <Anchor href="https://dorkodu.com" color="blue" td="underline">
            Dorkodu
          </Anchor>
        </>
      ),
      text: "I lead our team, design products and build software.",
      subtext: `We are a humane technology company to create social & gamified products and open source technology to liberate the humankind.`,
    },
    {
      icon: <IconCode size={32} />,
      title: `I have 8+ years of experience in software.`,
      text: (
        <>
          {`Web Platform · Product · Front-end · UI/UX`}
          <Group spacing={4} mt={10}>
            {[
              "TypeScript",
              "JavaScript",
              "React",
              "Node.js",
              "Vite",
              "Linux",
              "Postgres",
              "MySQL",
              "Nginx",
              "Docker",
              "PHP",
              "HTML",
              "CSS",
            ].map(($) => (
              <Badge variant="dot" color="gray" size="md">
                {$}
              </Badge>
            ))}
          </Group>
        </>
      ),
    },
    {
      icon: <IconSchool size={32} />,
      title: `I am a student @ Bogazici University`,
      text: `I am a freshman, and I want to study Cognitive Science.`,
      subtext: `
        I graduated from Vefa Lisesi, a historical and well-established high school in Istanbul 
        ∗ Computer Science, Industrial Design, Philosophy and Business.
      `,
    },
    {
      icon: <IconGlobe size={32} />,
      title: `I want to help the future of human civilization.`,
      text: `By contributing to critical areas like and Informatics-related fields.`,
      subtext: `Agriculture · Water · Green Energy · AI · Space · Education · Genetics`,
    },
    {
      icon: ``,
      title: ``,
      text: ``,
      subtext: ``,
    },
    {
      icon: ``,
      title: ``,
      text: ``,
      subtext: ``,
    },
  ];

  return (
    <Container size={600} my={50}>
      <Title order={2}>In a nutshell</Title>
      <Divider mb={25} />
      <Stack spacing={25} mt={10}>
        {story.map((item) => (
          <div key={randomId()}>
            <StoryElement {...item} />
          </div>
        ))}
      </Stack>
    </Container>
  );
};

const AboutMe = () => (
  <Showcase
    content={[
      <MissionStatement />,
      <Box>
        <Badge variant="dot" size="lg" mb={16}>
          My Interests
        </Badge>

        <Group maw={450} mx="auto" spacing={8}>
          {[
            ["Software", "blue"],
            ["Music", "cyan"],
            ["Industrial Design", "red"],
            ["Artificial Intelligence", "indigo"],
            ["Theory of Knowledge", "violet"],
            ["Psychology", "grape"],
            ["UI/UX Design", "orange"],
            ["Cryptoeconomics", "yellow"],
            ["Gamification", "lime"],
            ["Decentralized Web", "green"],
            ["Semantics", "teal"],
          ].map((text) => (
            <Badge
              key={text[0]}
              variant="light"
              color={text[1]}
              radius={6}
              size="lg">
              {text[0]}
            </Badge>
          ))}
        </Group>
      </Box>,
    ]}
  />
);

export const MissionStatement = () => {
  const theme = useMantineTheme();

  return (
    <Box py={20} pl={12}>
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
        height="400"
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
              href="https://github.com/dorukeray"
              size="md"
              radius="lg"
              color="dark"
              leftIcon={<IconBrandGithub />}>
              See My GitHub
            </Button>
          </Box>,
          <Flex align="flex-end">
            <GitHub />
          </Flex>,
        ]}
      />

      <Showcase
        size={0.65}
        content={[
          <Stack maw={400} mx="auto">
            <Title order={2}>🔖 We're on Substack.</Title>
            <Text>
              Dorkodu has a newsletter and community on Substack. You may like
              our weekly publication, notes and podcasts about technology,
              design, business and more.
            </Text>
          </Stack>,
          <Substack />,
        ]}
      />

      <Showcase
        size={0.65}
        content={[
          <Stack maw={400} mx="auto">
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
