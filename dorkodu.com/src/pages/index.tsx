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
} from "@tabler/icons-react";

import WebsiteLayout from "@/layouts/WebsiteLayout";

import Meta from "@/components/Meta";
import { HeroIndex } from "@/components/Hero/HeroIndex";
import { EmailBanner, SubstackEmbeddedForm } from "@/components/Newsletter";

import ForumIcon from "@/assets/logos/forum_Icon.svg";
import IDIcon from "@/assets/logos/id_Icon.svg";

import { ProductShowcaseGrid } from "@/components/Product";
import { FeaturedUseCases } from "@/components/Features";
import { FAQs } from "@/components/FAQ";
import { HeroWithBackground } from "@/components/Hero/HeroWithBackground";
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

const meta = {
  title: "Dorkodu",
  description: `Just Like Your Digital Mind.`,
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
      <FeaturedUseCases {...FeaturedUsecases} />
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
      <List.Item>No board of directors.</List.Item>
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
            Our culture is inspired by emotions which express the vibe of an authentic life experience.
          </Text>
        </Container>,
        <List icon={<Emoji size={24} emoji={ArrowRight} />} spacing={20} center>
          <List.Item>
            <Text>
              When our founders got together, they aspired to create liberating life experiences for everyone and help
              people fulfill their dreams.
            </Text>
          </List.Item>
          <List.Item>
            <Text weight={700}>Empowering the world’s best minds.</Text>
            <Text>From students and hobbyists to startups.</Text>
          </List.Item>
          <List.Item>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel non esse saepe voluptatem ratione?
            </Text>
          </List.Item>
        </List>,
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
            <List icon={<Emoji size={24} emoji={ArrowRight} />} spacing={20} my={20} center>
              <List.Item>
                <Text>
                  When our founders got together, they aspired to create liberating life experiences for everyone and
                  help people fulfill their dreams.
                </Text>
              </List.Item>
              <List.Item>
                <Text>Empowering the world’s best minds. From students and hobbyists to startups.</Text>
              </List.Item>
              <List.Item>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel non esse saepe voluptatem
                  ratione?
                </Text>
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
          <Box>
            <ContactInfoCard info={info} key={info.platform} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};
