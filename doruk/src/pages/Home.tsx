import {
  Box,
  Button,
  Container,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

import {
  IconBookmark,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandYoutube,
  IconExternalLink,
  IconMailOpened,
} from "@tabler/icons-react";

import { ContactInfo, ContactInfoCard } from "@/components/Contact";

import { SectionTitle, Showcase } from "@shared/components/commons";
import {
  ArrowRight,
  Bullseye,
  Earth,
  Emoji,
  Leaf,
  SmilingEyes,
  SparklingHeart,
} from "@shared/styles/emoji";

export default function Page() {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <Mission />
      <SocialLinks />
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
        <Text mt={12} size="lg">
          I'm Doruk Eray, a <b>Founder</b>, <b>Polymath</b> and <b>Craftsman</b>{" "}
          based in <b>Istanbul</b>.
        </Text>
        <Group my={16}>
          <Button size="lg" radius="lg">
            Let's Work Together!
          </Button>
          <Button
            size="md"
            radius="lg"
            variant="light"
            rightIcon={<IconExternalLink />}>
            Our Company
          </Button>
        </Group>
      </Stack>,
    ]}
  />
);

const AboutMe = () => (
  <Showcase
    content={[
      <Stack>
        <Title order={2}>In a nutshell...</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus mollitia architecto ea in consectetur neque at nulla
          nobis. Error quaerat nobis exercitationem dolorum nihil
          necessitatibus?
        </Text>
      </Stack>,
      <List icon={"∗"}>
        <List.Item>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            eius?
          </Text>
        </List.Item>
      </List>,
    ]}
  />
);

export const Mission = () => {
  const theme = useMantineTheme();

  return (
    <Container my={25} p={0}>
      <Showcase
        content={[
          <SectionTitle
            title="Our Purpose"
            text="Why we do this?"
            icon={Leaf}
          />,
          <Box component="section" id="our-purpose" py={20}>
            <List spacing={8} center>
              <List.Item icon={<Emoji size={24} emoji={SparklingHeart} />}>
                Help people find and pursue their true purpose.
              </List.Item>
              <List.Item icon={<Emoji size={24} emoji={SmilingEyes} />}>
                Create a meaningful life experience for everyone.
              </List.Item>
              <List.Item icon={<Emoji size={24} emoji={Earth} />}>
                Build the utopian dream of heaven on earth.
              </List.Item>
            </List>
          </Box>,
        ]}
      />

      <Showcase
        content={[
          <SectionTitle
            title="Our Mission"
            text="Our roadmap and objectives."
            icon={Bullseye}
          />,
          <Box component="section" id="our-purpose" py={20}>
            <Box>
              <Text
                size={24}
                weight={800}
                color={theme.colorScheme == "dark" ? theme.white : theme.black}>
                Liberate the Humankind;
              </Text>
              <Text size={18} weight={500} color="dimmed">
                with meaningful technology.
              </Text>
            </Box>
            <List
              icon={<Emoji size={24} emoji={ArrowRight} />}
              spacing={20}
              my="md"
              center>
              <List.Item>
                <Text weight={700}>Empowering the world’s best minds.</Text>
                <Text>From students and hobbyists to startups.</Text>
              </List.Item>
            </List>
          </Box>,
        ]}
      />
    </Container>
  );
};

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

export const Section = () => {
  return (
    <Container size={600} pt={50}>
      <Title order={2} align="center" mb={8}>
        Contact Us
      </Title>
      <Text maw={400} align="center" mx="auto">
        For any question, problem, wish or suggestion; you can reach us out via
        any related platform below.
      </Text>
      <SimpleGrid
        my={25}
        cols={2}
        breakpoints={[{ maxWidth: "540", cols: 1, spacing: "sm" }]}
        spacing={20}
        verticalSpacing={20}>
        {contactInfo.map((info) => (
          <Box key={info.platform}>
            <Contact.ContactInfoCard info={info} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export const contactInfo: Info[] = [
  {
    platform: "Twitter",
    tag: "@dorkodu",
    link: "https://twitter.com/dorkodu",
    icon: <IconBrandTwitter width={28} height={28} />,
  },
  {
    platform: "Instagram",
    tag: "@dorkodu",
    link: "https://instagram.com/dorkodu",
    icon: <IconBrandInstagram width={34} height={34} />,
  },
  {
    platform: "GitHub",
    tag: "@dorkodu",
    link: "https://github.com/dorkodu",
    icon: <IconBrandGithub width={30} height={30} />,
  },
  {
    platform: "Substack",
    tag: "dorkodu",
    link: "https://dorkodu.substack.com",
    icon: <IconBookmark width={28} height={28} />,
  },
  {
    platform: "YouTube",
    tag: "@dorkodu",
    link: "https://youtube.com/@dorkodu",
    icon: <IconBrandYoutube width={32} height={32} />,
  },
  {
    platform: "TikTok",
    tag: "@dorkodu",
    link: "https://tiktok.com/@dorkodu",
    icon: <IconBrandTiktok width={28} height={28} />,
  },
  {
    platform: "LinkedIn",
    tag: "@dorkodu",
    link: "https://linkedin.com/company/dorkodu",
    icon: <IconBrandLinkedin width={32} height={32} />,
  },
  {
    platform: "Email",
    tag: "hey@dorkodu.com",
    link: "mailto:hey@dorkodu.com",
    icon: <IconMailOpened width={30} height={30} />,
  },
];

export const Section = () => {
  return (
    <Container size={600} pt={50}>
      <Title order={2} align="center" mb={8}>
        Contact Us
      </Title>
      <Text maw={400} align="center" mx="auto">
        For any question, problem, wish or suggestion; you can reach us out via
        any related platform below.
      </Text>
      <SimpleGrid
        my={25}
        cols={2}
        breakpoints={[{ maxWidth: "540", cols: 1, spacing: "sm" }]}
        spacing={20}
        verticalSpacing={20}>
        {contactInfo.map((info) => (
          <Box key={info.platform}>
            <Contact.ContactInfoCard info={info} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};
