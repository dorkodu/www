import Head from "next/head";

import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  rem,
  useMantineTheme,
  Card,
  Title,
  Text,
  Box,
  Paper,
  Group,
  createStyles,
  Button,
  ThemeIcon,
  Col,
  Stack,
  List,
  Image,
  CSSObject,
  Space,
  UnstyledButton,
} from "@mantine/core";

import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
  IconBrandTwitter,
  IconBrandTwitterFilled,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconMail,
  IconAt,
  IconMailOpened,
  IconBookmark,
  IconBrandTiktok,
  IconLinkOff,
  IconExternalLink,
} from "@tabler/icons-react";

import WebsiteLayout from "@/layouts/WebsiteLayout";

import Meta from "@/components/Meta";
import { EmailBanner } from "@/components/Newsletter";

import ForumIcon from "@/assets/logos/forum_Icon.svg";
import IDIcon from "@/assets/logos/id_Icon.svg";

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
  GrowingHeart,
  Leaf,
  Postbox,
  SmilingEyes,
  SparklingHeart,
} from "@/styles/emoji";
import { IconArrowRight } from "@tabler/icons-react";

const meta = {
  title: "Game",
  description: `Just Like Chess, Better.`,
  keywords: `dorkodu game`,
  url: "/",
};

export default function Home() {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <Headline />
      <Hero />
      <Products />
      <Punchline />
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

const Headline = () => {
  const { classes: $, theme } = styles.Hero();

  return (
    <Container size={500} p={0}>
      <Title
        order={1}
        size={48}
        color="dimmed"
        variant="gradient"
        gradient={{ from: "#00cc44", to: "lime", deg: 180 }}
        className={$.title}
        align="center"
      >
        Jobs
      </Title>
      <Title order={2} size="h1" weight={800} className={$.headline} align="center">
        Work @ Dorkodu
      </Title>
      <Text my={8} size={18} weight={500} color="dimmed" align="center">
        Join the revolution.
      </Text>
    </Container>
  );
};

const Hero = () => {
  const { classes: $, theme } = styles.Hero();

  return (
    <Container mt={25} mb={100}>
      <div className={$.inner}>
        <div className={$.content}>
          <Text size={20} maw={425}>
            Join our mission to reinvent how humans and computers think, work and live together.
          </Text>
          <Group my={20}>
            <Button size="md" radius="lg" rightIcon={<IconArrowRight />}>
              Explore Open Roles
            </Button>
            <Button size="md" radius="lg" variant="light" color="green">
              About Us
            </Button>
          </Group>
        </div>
        <Image src="/images/undraw/pair-programming.svg" className={$.image} />
      </div>
    </Container>
  );
};

const styles = {
  Hero: createStyles((theme) => ({
    title: {
      color: theme.colorScheme == "dark" ? theme.colors.gray[6] : theme.colors.gray[5],
      fontSize: rem(40),
      lineHeight: 1,
      fontWeight: 900,
      letterSpacing: -1,

      [theme.fn.smallerThan("xs")]: {
        fontSize: rem(28),
      },
    },

    headline: {
      color: theme.colorScheme == "dark" ? theme.white : theme.black,
      letterSpacing: -0.8,
    },

    description: {},

    inner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,

      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
        alignItems: "center",
        gap: 40,
      },
    },

    content: {
      maxWidth: rem(600),
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },

    image: {
      maxWidth: 400,
    },
  })),
};

const Products = () => {
  const products: Dorkodu.Project[] = [
    { title: "Forum", tagline: "Social Discourse", image: ForumIcon.src, link: "/products/forum" },
    { title: "ID", tagline: "Your Digital Identity", image: IDIcon.src, link: "/products/id" },
  ];

  return (
    <Container my={60}>
      <Title order={2} weight={800}>
        Our Apps
      </Title>
      <ProductShowcaseGrid products={products} />
    </Container>
  );
};

const YesAndNoList = () => {
  const Pros = (
    <List icon={<Emoji size={20} emoji={Checkbox} />} center spacing={8}>
      <List.Item>
        Founded by two inventor kids,
        <br />
        as their dream tech company.
      </List.Item>
      <List.Item>Homebrew open source technology.</List.Item>
      <List.Item>Human-friendly design.</List.Item>
      <List.Item>You own your data.</List.Item>
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
    <Container size={760}>
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
            We're a small team on a mission to build the open technology for empowering human wisdom.
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
              OWN YOUR DATA
            </Text>
            <Text>No more lock-in. Own your data, own your identity. Credible exit.</Text>
          </List.Item>
          <List.Item>
            <Text weight={800} mb={5}>
              FREEDOM
            </Text>
            <Text>Permissionless and composable protocols. Open app. Build what you want on top.</Text>
          </List.Item>
          <List.Item>
            <Text weight={800} mb={5}></Text>
            <Text>Built on the Wander network, inspired by the web. A universal repository for human knowledge.</Text>
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
        <Image maw={300} mx={"auto"} src="/images/logos/wander_Brand.svg" />,
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
          <Text>An open software protocol for building the collective digital mind of the humankind.</Text>
          <List icon={<Emoji emoji={Checkbox} size={20} />} center spacing={4} my={10}>
            <List.Item>Decentralized</List.Item>
            <List.Item>Permissionless</List.Item>
            <List.Item>Self-Sovereign</List.Item>
            <List.Item>Open Source</List.Item>
          </List>
          <Text>Collaborate across a worldwide network of digital objects.</Text>
          <Text>
            Wander is an open protocol that prioritizes user-ownership. Your data belongs to you. Wander belongs to
            everybody.
          </Text>
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
      ]}
    />
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
