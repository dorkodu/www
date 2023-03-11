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
} from "@mantine/core";

import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from "@tabler/icons-react";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";

import Meta from "@/components/Meta";
import { HeroIndex } from "@/components/Hero/HeroIndex";
import { EmailBanner } from "@/components/Newsletter";

import ForumIcon from "@/assets/logos/forum_Icon.svg";
import IDIcon from "@/assets/logos/id_Icon.svg";

import { ProductCardData, ProductShowcaseGrid } from "@/components/Product";
import { FeaturedUseCases } from "@/components/Features";
import { FAQs } from "@/components/FAQ";
import { HeroWithBackground } from "@/components/Hero/HeroWithBackground";

const meta = {
  title: "welcome! — dorkodu",
  description: `liberate the humankind.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
  url: "/",
  image: {
    src: "/public/images/dorkodu-single.png",
    alt: "dorkodu logo with single letter.",
  },
};

const Home: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <Stack spacing={60}>
        <HeroIndex />
        <Products />
        <FeaturedUseCases {...data_FeaturedUseCases} />
        <FeaturesWithTitle />
        <ProsConsList />
        <HeroWithBackground />
        <Mission />
        <FAQs />
        <LeadGrid />
        <Punchline />
        <Newsletter />
      </Stack>
    </WebsiteLayout>
  );
};

const styles = {
  FeaturesWithTitle: createStyles((theme) => ({
    wrapper: {
      padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },

    title: {
      fontSize: rem(36),
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  })),
};

const data_FeaturedUseCases = {
  supTitle: "Use cases",
  title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, perspiciatis assumenda consequatur excepturi ut amet illum consectetur sunt tempore, totam vero delectus asperiores porro molestiae!",
  useCases: [
    {
      icon: (
        <>
          <path fill="#77B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"></path>
          <path
            fill="#FFF"
            d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"
          ></path>
        </>
      ),
      title: "Pharmacists",
      description: "Azurill can be seen bouncing and playing on its big, rubbery tail",
    },
    {
      icon: (
        <>
          <path fill="#66757F" d="M27.815 4h1.996v2.391h-1.996z"></path>
          <path fill="#55ACEE" d="M29 4H9a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z"></path>
          <path fill="#CCD6DD" d="M27 4H7a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z"></path>
          <path
            fill="#99AAB5"
            d="M28 15a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm0 5a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm0 5a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm-8 5a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1z"
          ></path>
          <path
            fill="#292F33"
            d="M7.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M8.543 7.083c-.055-.48-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.021-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.76.276 1.224-.447 1.16-1.026z"
          ></path>
          <path
            fill="#292F33"
            d="M13.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M14.543 7.083c-.055-.48-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.02-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.76.276 1.224-.447 1.16-1.026z"
          ></path>
          <path
            fill="#292F33"
            d="M19.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M20.543 7.083c-.055-.48-.374-.792-.728-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.02-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.759.276 1.223-.447 1.159-1.026z"
          ></path>
          <path
            fill="#292F33"
            d="M25.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M26.543 7.083c-.055-.48-.374-.792-.728-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.02-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.759.276 1.223-.447 1.159-1.026z"
          ></path>
        </>
      ),
      title: "Lawyers",
      description: "Fans obsess over the particular length and angle of its arms",
    },
    {
      icon: (
        <>
          <path fill="#66757F" d="M27.815 4h1.996v2.391h-1.996z"></path>
          <path fill="#55ACEE" d="M29 4H9a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z"></path>
          <path fill="#CCD6DD" d="M27 4H7a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z"></path>
          <path
            fill="#99AAB5"
            d="M28 15a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm0 5a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm0 5a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm-8 5a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1z"
          ></path>
          <path
            fill="#292F33"
            d="M7.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M8.543 7.083c-.055-.48-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.021-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.76.276 1.224-.447 1.16-1.026z"
          ></path>
          <path
            fill="#292F33"
            d="M13.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M14.543 7.083c-.055-.48-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.02-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.76.276 1.224-.447 1.16-1.026z"
          ></path>
          <path
            fill="#292F33"
            d="M19.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M20.543 7.083c-.055-.48-.374-.792-.728-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.02-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.759.276 1.223-.447 1.159-1.026z"
          ></path>
          <path
            fill="#292F33"
            d="M25.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M26.543 7.083c-.055-.48-.374-.792-.728-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.02-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.759.276 1.223-.447 1.159-1.026z"
          ></path>
        </>
      ),
      title: "Bank owners",
      description: "They divvy up their prey evenly among the members of their pack",
    },
    {
      icon: (
        <>
          <path fill="#66757F" d="M27.815 4h1.996v2.391h-1.996z"></path>
          <path fill="#55ACEE" d="M29 4H9a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z"></path>
          <path fill="#CCD6DD" d="M27 4H7a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z"></path>
          <path
            fill="#99AAB5"
            d="M28 15a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm0 5a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm0 5a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1zm-8 5a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1z"
          ></path>
          <path
            fill="#292F33"
            d="M7.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M8.543 7.083c-.055-.48-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.021-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.76.276 1.224-.447 1.16-1.026z"
          ></path>
          <path
            fill="#292F33"
            d="M13.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M14.543 7.083c-.055-.48-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.02-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.76.276 1.224-.447 1.16-1.026z"
          ></path>
          <path
            fill="#292F33"
            d="M19.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M20.543 7.083c-.055-.48-.374-.792-.728-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.02-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.759.276 1.223-.447 1.159-1.026z"
          ></path>
          <path
            fill="#292F33"
            d="M25.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489z"
          ></path>
          <path
            fill="#66757F"
            d="M26.543 7.083c-.055-.48-.374-.792-.728-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.996c-.02-2-1.575-3.821-3.496-3.821c-1.934 0-3.5 1.819-3.5 4.005c0 1.853 1.045 3.371 2.569 3.926c.759.276 1.223-.447 1.159-1.026z"
          ></path>
        </>
      ),
      title: "Others",
      description: "Phanpy uses its long nose to shower itself",
    },
  ],
};

const Products = () => {
  const products: ProductCardData[] = [
    { title: "Forum", tagline: "Social Discourse", icon: ForumIcon.src, link: "/products/forum" },
    { title: "ID", tagline: "Your Digital Identity", icon: IDIcon.src, link: "/products/id" },
  ];

  return (
    <Box my={60}>
      <Title order={2} weight={800}>
        Our Products
      </Title>
      {<ProductShowcaseGrid products={products} />}
    </Box>
  );
};

const ProsConsList = () => {
  return <></>;
};

const Punchline = () => {
  return <></>;
};

const Newsletter = () => {
  return <EmailBanner />;
};

export const Mission = () => {
  return (
    <section>
      <Stack>
        <Title>Our Purpose</Title>
        <Text>we want to help people...</Text>
        <List>
          <List.Item>find their true purpose & passion.</List.Item>
          <List.Item>actualize themselves.</List.Item>
          <List.Item>create a free and happy life experience for everyone.</List.Item>
          <List.Item>build the utopian dream of heaven on earth.</List.Item>
        </List>
      </Stack>

      <Stack>
        <Title>Our Mission</Title>
        <Text>
          we combine <em>gamification</em>, <em>human-centric design</em> and <em>our superior technology</em> to create
          products which <em>free the human spirit.</em>
        </Text>
      </Stack>
    </section>
  );
};

export const OurWork = () => {
  const projects = [
    {
      title: "trekie",
      tagline: "the social & gamified personal growth companion app",
      link: "/trekie",
      image: "/images/trekie-S.png",
      type: "product",
    },
    {
      title: "sage",
      tagline: "the marvelous data exchange protocol for web api's",
      link: "/sage",
      image: "/images/sage.png",
      type: "technology",
    },
    {
      title: "LIBRE",
      tagline: "open source @ dorkodu ",
      link: "https://libre.dorkodu.com",
      image: "/images/libre-compact-S.png",
      type: "community",
    },
  ];

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

const LeadGrid = () => {
  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = rem(300);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} bg="blue" radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} bg="blue" radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} bg="blue" radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

const FeaturesWithTitle = () => {
  const { classes } = styles.FeaturesWithTitle();

  const features = [
    {
      icon: IconReceiptOff,
      title: "Free and open source",
      description: "All packages are published under MIT license, you can use Mantine in any project",
    },
    {
      icon: IconFileCode,
      title: "TypeScript based",
      description: "Build type safe applications, all components and hooks export types",
    },
    {
      icon: IconCircleDotted,
      title: "No annoying focus ring",
      description: "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
    },
    {
      icon: IconFlame,
      title: "Flexible",
      description: "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
    },
  ];

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={48} variant="light" color="green">
        <feature.icon size={rem(32)} />
      </ThemeIcon>
      <Text fz="lg" mt="xs" fw={700}>
        {feature.title}
      </Text>
      <Text c="dimmed" mt="xs" fz="md" fw={450}>
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid>
        <Col span={8} md={5}>
          <Title className={classes.title}>A fully featured React components library for your next project</Title>
          <Text c="dimmed">
            Build fully functional accessible web applications faster than ever – Mantine includes more than 120
            customizable components and hooks to cover you in any situation
          </Text>

          <Button variant="gradient" gradient={{ deg: 133, from: "blue", to: "cyan" }} size="lg" radius="md" mt="xl">
            Get started
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
};

export default Home;
