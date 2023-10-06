import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Divider,
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

import { IStoryElement, StoryElement } from "@/components/story";
import { randomId } from "@mantine/hooks";
import { lazy } from "react";

const Highlights = lazy(() => import("@/components/Highlights"));

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
            src="/images/berk-student.jpg"
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
            I'm Berk Remzi, a <b>Creator</b>, <b>Technologist</b> and{" "}
            <b>Founder</b> from <b>Istanbul</b>. My focus is on software,
            games and business.
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
                I build products and manage our software @&nbsp;
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
              I design and develop video games also @&nbsp;
              <Anchor
                href="https://dorkodu.com"
                color="blue"
                weight={600}
                td="underline">
                Dorkodu
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
          I'm the Co-Founder & Chief Technologist @{" "}
          <Anchor href="https://dorkodu.com" color="blue" td="underline">
            Dorkodu
          </Anchor>
        </>
      ),
      text: "I lead our technology team, build products and software.",
      subtext: `We are a humane technology company to create social & gamified products and open source technology to liberate the humankind.`,
    },
    {
      icon: <IconCode size={32} />,
      title: `I have 6+ years of experience in software.`,
      text: (
        <>
          {`Full-stack · Web Development · Product`}
          <Group spacing={4} mt={10}>
            {[
              "TypeScript",
              "JavaScript",
              "React",
              "VueJS",
              "NextJS",
              "Node.js",
              "Express",
              "Zustand",
              "Redux",
              "WebSockets",
              "Socket.IO",
              "Mantine UI",
              "i18Next",
              "Electron",
              "Vite",
              "HTML",
              "CSS",
              "Postgres",
              "MySQL",
              "SQLite",
              "Redis",
              "MongoDB",
              "Nginx",
              "Linux",
              "Docker",
              "C#",
              "Unity",
            ].map(($) => (
              <Badge variant="dot" color="gray" size="md" key={$}>
                {$}
              </Badge>
            ))}
          </Group>
        </>
      ),
    },
    {
      icon: <IconSchool size={32} />,
      title: `I am a student @ Istanbul University`,
      text: `I am a freshman, and I am studying Linguistics.`,
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
          <StoryElement {...item} key={randomId()} />
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
            ["Games", "cyan"],
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
      link: "https://twitter.com/bercrobat",
      icon: <IconBrandTwitter size={30} />,
    },
    {
      link: "https://instagram.com/bercrobat",
      icon: <IconBrandInstagram size={32} />,
    },
    {
      link: "https://github.com/berkcambaz",
      icon: <IconBrandGithub size={30} />,
    },
    {
      link: "https://linkedin.com/in/berkcambaz",
      icon: <IconBrandLinkedin size={32} />,
    },
    {
      link: "https://t.me/bercrobat",
      icon: <IconBrandTelegram size={32} />,
    },
    {
      link: "mailto:berk@dorkodu.com",
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
