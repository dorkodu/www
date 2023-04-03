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
} from "@mantine/core";

import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from "@tabler/icons-react";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";

import Meta from "@/components/Meta";
import { HeroIndex } from "@/components/Hero/HeroIndex";
import { EmailBanner } from "@/components/Newsletter";

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
  SmilingEyes,
  SparklingHeart,
} from "@/styles/emoji";
import { ListItem } from "@mantine/core/lib/List/ListItem/ListItem";

const meta = {
  title: "Dorkodu",
  description: `Just Like A Digital Mind.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
  url: "/",
  image: {
    src: "/images/dorkodu-single.png",
    alt: "dorkodu logo with single letter.",
  },
};

const Home: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <HeroIndex />
      <Products />
      <Punchline />
      <FeaturedUseCases {...FeaturedUsecases} />
      <ProsConsList />
      <Mission />
      <FAQs />
      <Newsletter />
    </WebsiteLayout>
  );
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

const ProsConsList = () => {
  const Pros = (
    <List icon={<Emoji size={24} emoji={Checkbox} />} spacing={8}>
      <List.Item>a</List.Item>
      <List.Item>a</List.Item>
    </List>
  );

  const Cons = (
    <List icon={<Emoji size={24} emoji={CrossMark} />} spacing={8}>
      <List.Item>a</List.Item>
      <List.Item>a</List.Item>
    </List>
  );

  return (
    <Container size={760}>
      <Showcase content={[Pros, Cons]} />
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
              letterSpacing: -0.75,
              fontSize: rem(32),
              maxWidth: rem(400),
              fontWeight: 800,
              color: theme.colorScheme == "dark" ? theme.white : theme.black,
            })}
            order={1}
          >
            We are bringing{" "}
            <Text variant="gradient" span gradient={{ from: "violet", to: "cyan", deg: 45 }}>
              meaning
            </Text>{" "}
            back to{" "}
            <Text variant="gradient" span gradient={{ from: "lime", to: "#00cc45" }}>
              technology.
            </Text>
          </Title>
          <Text color="dimmed" size="lg" mt={12} weight={500}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, culpa! Et nesciunt expedita eveniet
            molestias.
          </Text>
        </Container>,
        <List icon={<Emoji size={24} emoji={ArrowRight} />} spacing={20} center>
          <List.Item>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel non esse saepe voluptatem ratione?
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel non esse saepe voluptatem ratione?
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel non esse saepe voluptatem ratione?
            </Text>
          </List.Item>
        </List>,
      ]}
    ></Showcase>
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
            <List spacing={8}>
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
            <Text size={24} weight={800} color={theme.colorScheme == "dark" ? theme.white : theme.black}>
              Liberate the Humankind;
            </Text>
            <Text size={18} weight={500} color="dimmed">
              with meaningful technology.
            </Text>
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

export default Home;
