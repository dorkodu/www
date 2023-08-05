import Head from "next/head";

import {
  Container,
  SimpleGrid,
  rem,
  useMantineTheme,
  Title,
  Text,
  Box,
  Paper,
  Group,
  Button,
  ThemeIcon,
  List,
  UnstyledButton,
  Image,
  Stack,
  Card,
  Badge,
  Divider,
  Center,
} from "@mantine/core";

import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconMailOpened,
  IconBookmark,
  IconBrandTiktok,
  IconExternalLink,
  IconExclamationMark,
  IconAlertTriangleFilled,
  IconHourglass,
  IconStar,
  IconStarFilled,
  IconApps,
} from "@tabler/icons-react";

import WebsiteLayout from "@/layouts/WebsiteLayout";

import Meta from "@/components/Meta";
import { HeroIndex } from "@/components/Hero/HeroIndex";
import { EmailBanner } from "@/components/Newsletter";

import ForumIcon from "@/assets/logos/forum_Icon.svg";
import IDIcon from "@/assets/logos/id_Icon.svg";
import CrewlandsIcon from "@/assets/logos/crewlands_Icon.svg";

import { ProductShowcaseGrid } from "@/components/Product";
import { FeaturedUseCases } from "@/components/Features";
import { FAQs } from "@/components/FAQ";
import { FeaturedUsecases } from "@/data/featured";
import Dorkodu from "@/types/dorkodu";
import { projects } from "@/data/products";
import { SectionTitle, Showcase } from "@/components/Commons";
import {
  ArrowRight,
  Bullseye,
  Checkbox,
  CrossMark,
  Earth,
  Emoji,
  Leaf,
  SmilingEyes,
  SparklingHeart,
} from "@/styles/emoji";

const meta = {
  title: "Dorkodu",
  description: `Your Digital Life, In One Place.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
  url: "/",
  image: {
    src: "/images/dorkodu-single.png",
    alt: "dorkodu logo with single letter.",
  },
};

export default function Home() {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <HeroIndex />
      <Products />
      <Punchline />
      <CrewlandsPromo />
      <FeaturedUseCases {...FeaturedUsecases} />
      <AboutWander />
      <YesAndNoList />
      <Mission />
      <FAQs />
      <ContactUs />
      <Newsletter />
    </WebsiteLayout>
  );
}

const Products = () => {
  const products: Dorkodu.Project[] = [
    { title: "Forum", tagline: "Social Discourse", image: ForumIcon.src, link: "https://forum.dorkodu.com" },
    { title: "ID", tagline: "Your Digital Identity", image: IDIcon.src, link: "https://id.dorkodu.com" },
    {
      title: "Crewlands",
      tagline: "Turn-based Strategy Game",
      image: CrewlandsIcon.src,
      link: "https://crewlands.dorkodu.com",
    },
  ];

  return (
    <Container my={60} p={0}>
      <Divider
        variant="solid"
        labelPosition="center"
        label={
          <Text weight={500} size="lg">
            Our Apps
          </Text>
        }
      />
      <ProductShowcaseGrid products={products} />
    </Container>
  );

  const x = (
    <Group
      align="center"
      position="center"
      spacing={8}
      sx={($) => ({
        backgroundColor: $.fn.variant({ color: "green", variant: "light" }).background,
        color: $.fn.variant({ color: "green", variant: "light" }).color,
        border: "1px solid " + $.fn.variant({ color: "green", variant: "light" }).border,
        padding: "5px",
        borderRadius: 10,
      })}
    >
      <ThemeIcon color="green" size="lg" variant="filled">
        <IconApps size={24} />
      </ThemeIcon>
      <Text weight={700} size={24} pr={4}>
        Our Apps
      </Text>
    </Group>
  );
};

const YesAndNoList = () => {
  const Pros = (
    <List icon={<Emoji size={20} emoji={Checkbox} />} center spacing={8}>
      <List.Item>Founded by two inventor kids.</List.Item>
      <List.Item>Homebrew open source technology.</List.Item>
      <List.Item>Human-friendly design.</List.Item>
      <List.Item>You own your data & identity.</List.Item>
    </List>
  );

  const Cons = (
    <List icon={<Emoji size={20} emoji={CrossMark} />} center spacing={8}>
      <List.Item>Not backed by your favorite VCs.</List.Item>
      <List.Item>No founders from Ivy League.</List.Item>
      <List.Item>No eyes on an exit.</List.Item>
      <List.Item>Never abuse your privacy.</List.Item>
      <List.Item>Never exploit your attention.</List.Item>
    </List>
  );

  return (
    <Container size={760} my={20}>
      <Title order={2}>Our Yes & No List</Title>
      <Showcase noCenter content={[Pros, Cons]} />
    </Container>
  );
};

const Punchline = () => {
  return (
    <Showcase
      content={[
        <Container>
          <Title
            sx={(theme) => ({
              lineHeight: 0.85,
              letterSpacing: -0.75,
              fontSize: rem(30),
              maxWidth: rem(400),
              fontWeight: 800,
              color: theme.colorScheme == "dark" ? theme.white : theme.black,
            })}
            order={1}
          >
            We are bringing{" "}
            <Text variant="gradient" span gradient={{ from: "indigo", to: "blue" }}>
              meaning
            </Text>{" "}
            back to{" "}
            <Text variant="gradient" span gradient={{ from: "#00cc45", to: "lime" }}>
              technology
            </Text>{" "}
            again.
          </Title>
          <Text color="dimmed" size="lg" mt={12} weight={500}>
            We're a passionate team on a mission to build the open technology for liberating human wisdom.
          </Text>
        </Container>,
        <List
          icon={<></>}
          spacing={20}
          center
          styles={($) => ({
            item: {
              borderWidth: 1,
              borderColor: $.colorScheme == "light" ? $.colors.gray[3] : $.colors.dark[5],
              borderRadius: 10,
              borderStyle: "solid",
              padding: 15,
              paddingLeft: 5,
            },
          })}
        >
          <List.Item>
            <Text weight={800} mb={5}>
              YOUR DIGITAL LIFE IN ONE PLACE
            </Text>
            <Text>
              Welcome to your digital mind. Everything is connected and work in harmony. One account to rule 'em all.
            </Text>
          </List.Item>
          <List.Item>
            <Text weight={800} mb={5}>
              FOLKS OWN THE INTERNET
            </Text>
            <Text>Own your data, own your identity and own your social circle. No more lock-in. Credible exit.</Text>
          </List.Item>

          <List.Item>
            <Text weight={800} mb={5}>
              FREE AS IN FREEDOM
            </Text>
            <Text>
              Composable and permissionless protocols. With an open ecosystem. Build tools and communities freely.
            </Text>
          </List.Item>
        </List>,
      ]}
    />
  );
};

const AboutWander = () => {
  return (
    <Showcase
      content={[
        <Container>
          <Title
            order={2}
            sx={($) => ({
              color: $.colorScheme == "dark" ? $.white : $.black,
            })}
          >
            Wander
          </Title>
          <Text weight={500} mb={10} color="dimmed">
            The Second Brain Protocol
          </Text>
          <Text>An open software protocol for building the collective wisdom of the humankind.</Text>
          <List icon={<Emoji emoji={Checkbox} size={20} />} center spacing={4} my={10}>
            <List.Item>Decentralized</List.Item>
            <List.Item>Permissionless</List.Item>
            <List.Item>Self-Sovereign</List.Item>
            <List.Item>Open Source</List.Item>
          </List>

          <Group my={20}>
            <Button
              component="a"
              href="https://github.com/dorkodu/wander"
              variant="gradient"
              rightIcon={<IconExternalLink />}
              size="md"
              radius="lg"
            >
              Read the Docs
            </Button>
            <Button
              component="a"
              href="https://github.com/dorkodu/wander"
              color="dark"
              leftIcon={<IconBrandGithub />}
              size="md"
              radius="lg"
            >
              GitHub
            </Button>
          </Group>
        </Container>,
        <Container>
          <Text weight={600}>A universal knowlededge graph...</Text>
          <List icon={<Emoji emoji={ArrowRight} size={20} />} center my={8}>
            <List.Item>hosted by a decentralized network.</List.Item>
            <List.Item>exchanges semantic information.</List.Item>
            <List.Item>owned by its users.</List.Item>
            <List.Item>social by nature.</List.Item>
          </List>
          <Text>
            Wander is an open protocol that prioritizes user-ownership. Your data belongs to you. Wander belongs to
            everybody.
          </Text>
        </Container>,
      ]}
    />
  );
};

const CrewlandsPromo = () => {
  const theme = useMantineTheme();

  return (
    <Box my={25}>
      <Divider
        color="green"
        labelPosition="center"
        label={
          <Badge color="green" sx={($) => ({})} p={10} size="xl" radius="md">
            <Group align="center" position="center" spacing={8}>
              <IconStarFilled size={16} />
              <Text>Featured</Text>
            </Group>
          </Badge>
        }
      />

      <Paper withBorder shadow="lg" p={10} my={20} radius={20} sx={($) => ({})}>
        <Showcase
          content={[
            <Container>
              <Image
                src={
                  theme.colorScheme == "dark"
                    ? "/images/logos/crewlands_Brand-White.svg"
                    : "/images/logos/crewlands_Brand.svg"
                }
              />
              <Text my={20} color="dimmed" align="center" weight={500}>
                Finally a turn-based strategy game for everyone.
              </Text>
              <Group my={20} position="center">
                <Button
                  component="a"
                  href="https://crewlands.dorkodu.com"
                  leftIcon={<IconExternalLink />}
                  size="md"
                  radius="lg"
                  disabled
                >
                  Play Crewlands
                </Button>
                <Badge px={10} size="lg" radius="md" color="red" variant="filled">
                  Coming Soon<i>!</i>
                </Badge>
              </Group>
              <Stack spacing={4}>
                <Text align="center">Fight with/against other players and capture lands.</Text>
                <Text align="center" maw={400} mx={"auto"}>
                  Play <b>online</b> by opening a room and sharing the link, or <b>offline</b> on the same device,{" "}
                  <b>like a board game!</b>
                </Text>
              </Stack>
            </Container>,
            <Container>
              <Title
                order={2}
                sx={($) => ({
                  color: $.colorScheme == "dark" ? $.white : $.black,
                })}
              >
                Crewlands
              </Title>
              <Text weight={500} mb={10} color="dimmed">
                Social & Turn-based Strategy Game
              </Text>
              <List icon={<Emoji emoji={ArrowRight} size={20} />} spacing={5} lh={1.5} my={8}>
                <List.Item>
                  <Text>
                    <b>Easy-to-learn and fun to master.</b> For all ages and different tastes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <b>Multiplayer.</b> Against offline local players & bots on the same device, or online with other
                    players.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <b>Built-in chat.</b> Enables and enriches the social interactions in the game.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <b>Bots</b> with different difficulty levels.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <b>Rich map generation</b> unlocks the endless potential of war and peace.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <b>Like a social chess.</b> Limitless interaction and diplomacy, without all the complex and boring
                    features.
                  </Text>
                </List.Item>
              </List>
            </Container>,
          ]}
        />
      </Paper>
    </Box>
  );
};

const Newsletter = () => {
  return (
    <Box mt={80}>
      <EmailBanner />
    </Box>
  );
};

export const Mission = () => {
  const theme = useMantineTheme();

  return (
    <Container my={25} p={0}>
      <Showcase
        content={[
          <SectionTitle title="Our Purpose" text="Why we do this?" icon={Leaf} />,
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
          <SectionTitle title="Our Mission" text="Our roadmap and objectives." icon={Bullseye} />,
          <Box component="section" id="our-purpose" py={20}>
            <Box>
              <Text size={24} weight={800} color={theme.colorScheme == "dark" ? theme.white : theme.black}>
                Liberate the Humankind;
              </Text>
              <Text size={18} weight={500} color="dimmed">
                with meaningful technology.
              </Text>
            </Box>
            <List icon={<Emoji size={24} emoji={ArrowRight} />} spacing={20} my="md" center>
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

export const OurWork = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.title} />
          <h4>{project.title}</h4>
          <p>{project.tagline}</p>
          <p>
            <span>{project.type}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export const ContactUs = () => {
  type ContactInfo = {
    platform: string;
    tag: string;
    link: string;
    icon: React.ReactNode;
  };

  const contactInfo: ContactInfo[] = [
    {
      platform: "Twitter",
      tag: "@dorkodu",
      link: "https://twitter.com/dorkodu",
      icon: (
        <ThemeIcon color="blue" size={40} radius={10}>
          <IconBrandTwitter width={28} height={28} />
        </ThemeIcon>
      ),
    },
    {
      platform: "Instagram",
      tag: "@dorkodu",
      link: "https://instagram.com/dorkodu",
      icon: (
        <ThemeIcon variant="gradient" gradient={{ from: "orange", to: "grape" }} size={40} radius={10}>
          <IconBrandInstagram width={34} height={34} />
        </ThemeIcon>
      ),
    },
    {
      platform: "GitHub",
      tag: "@dorkodu",
      link: "https://github.com/dorkodu",
      icon: (
        <ThemeIcon variant="gradient" gradient={{ from: "black", to: "gray" }} size={40} radius={10}>
          <IconBrandGithub width={30} height={30} />
        </ThemeIcon>
      ),
    },
    {
      platform: "Substack",
      tag: "dorkodu",
      link: "https://dorkodu.substack.com",
      icon: (
        <ThemeIcon variant="gradient" gradient={{ from: "orange", to: "yellow" }} size={40} radius={10}>
          <IconBookmark width={28} height={28} />
        </ThemeIcon>
      ),
    },
    {
      platform: "YouTube",
      tag: "@dorkodu",
      link: "https://youtube.com/@dorkodu",
      icon: (
        <ThemeIcon color="red" size={40} radius={10}>
          <IconBrandYoutube width={32} height={32} />
        </ThemeIcon>
      ),
    },
    {
      platform: "TikTok",
      tag: "@dorkodu",
      link: "https://tiktok.com/@dorkodu",
      icon: (
        <ThemeIcon variant="gradient" gradient={{ from: "black", to: "#16163E" }} size={40} radius={10}>
          <IconBrandTiktok width={28} height={28} />
        </ThemeIcon>
      ),
    },
    {
      platform: "LinkedIn",
      tag: "@dorkodu",
      link: "https://linkedin.com/company/dorkodu",
      icon: (
        <ThemeIcon variant="gradient" gradient={{ from: "blue", to: "cyan" }} size={40} radius={10}>
          <IconBrandLinkedin width={32} height={32} />
        </ThemeIcon>
      ),
    },
    {
      platform: "Email",
      tag: "hey@dorkodu.com",
      link: "mailto:hey@dorkodu.com",
      icon: (
        <ThemeIcon variant="gradient" gradient={{ from: "green", to: "lime" }} size={40} radius={10}>
          <IconMailOpened width={30} height={30} />
        </ThemeIcon>
      ),
    },
  ];

  const ContactInfoCard = ({ info }: { info: ContactInfo }) => {
    return (
      <Box maw={250} mx="auto">
        <UnstyledButton component="a" href={info.link} title={info.platform}>
          <Paper withBorder p={10} radius="lg">
            <Group noWrap>
              {info.icon}
              <div>
                <Text weight={500}>{info.platform}</Text>
                <Text color="blue" weight={500} underline>
                  {info.tag}
                </Text>
              </div>
            </Group>
          </Paper>
        </UnstyledButton>
      </Box>
    );
  };

  return (
    <Container size={600} pt={50}>
      <Title order={2} align="center" mb={8}>
        Contact Us
      </Title>
      <Text maw={400} align="center" mx="auto">
        For any question, problem, wish or suggestion; you can reach us out via any related platform below.
      </Text>
      <SimpleGrid
        my={25}
        cols={2}
        breakpoints={[{ maxWidth: "540", cols: 1, spacing: "sm" }]}
        spacing={20}
        verticalSpacing={20}
      >
        {contactInfo.map((info) => (
          <Box key={info.platform}>
            <ContactInfoCard info={info} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};
