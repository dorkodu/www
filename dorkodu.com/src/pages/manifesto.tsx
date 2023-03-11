import Head from "next/head";

import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Container,
  Title,
  Card,
} from "@mantine/core";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";

import { HeroIndex } from "@/components/Hero/HeroIndex";

const meta = {
  title: "Our Manifesto — Dorkodu",
  description: `Values & Goals`,
  keywords: `dorkodu manifesto, manifesto dorkodu, dorkodu our manifesto`,
  url: "/manifesto",
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
      <Container>
        <Title order={1} size="h3" color="dimmed">
          Our Manifesto
        </Title>
        <Title order={2} size="h2">
          Our mission is to empower sustainable cooperation, building tools for thought, freedom and trust.
        </Title>

        <Card>
          <Text>
            Humanity has entered the Information Age. It all began in the 15th century with the invention of the
            printing press as a new way to transfer knowledge. The invention of the transistor in Bell Labs in 1947 was
            the final stroke that freed the information of the world.
          </Text>
        </Card>

        <Card>
          <Text>
            With each wave of evolution, the world is reshaping. In the post-computing world, software is central to the
            most transformative era of value creation in human history. As society and technology continue to
            accelerate, so too will the influence of software.
          </Text>

          <Text>
            One of the gravest misconceptions about software companies is that their value comes from the code, the
            algorithms, or the infrastructure. Code and algorithms deliver experiences, and infrastructure is
            responsible for storing, transferring and verifying information. However, the biggest value is in the
            information and networks that we – the people – create.
          </Text>

          <Text>
            Because when each of us creates an article, a post or a tweet, the whole system creates much more value than
            just the sum of its parts. This is how we get powerful search engines, great maps, recommendations, and our
            social graph. That is why the biggest software companies are worth trillions of dollars and are more
            powerful than most of the states — they own this positive sum that we, the people, created.
          </Text>
        </Card>

        <Card>
          <Title order={4}>Make your ideas stronger with each connection.</Title>
          <Text>By connecting ideas, notes, tasks, people into a graph, you can transform knowledge into insight.</Text>
        </Card>
        <Card>
          <Title order={4}>The Internet, owned and created by you.</Title>
          <Text>
            Welcome to Anytype, where the digital assets and communities you create are truly yours. Here, you can
            decide how your data is used, shared, and valued.
          </Text>
        </Card>
        <Card>
          <Title order={4}></Title>
          <Text>
            It doesn’t have to be this way. We have the technologies to build a different world, free of borders and big
            tech. A world built on the principles of freedom, sustainability, co-creation, and trust.
          </Text>
          <Text>
            We’re building a community-owned operating system that serves as the entrance to this new world. In it, all
            of us enjoy the privacy of our thoughts, messages, and years of memories. We can work together across
            continents and have full control over our digital life and assets.
          </Text>
          <Text>
            This new world is a place for creators and builders of all kinds - entrepreneurs, engineers, artists,
            writers, educators, scientists, curators, and their communities, everyone: amateur or professional. We want
            to open up the opportunities to innovate in all parts of the system to those who have ideas and passion to
            make it better. We invite everyone to build Anytype with us, not as employees but as co-owners.
          </Text>
        </Card>

        <Card>
          <Title order={4}></Title>
          <Text>
            We believe that the technologies we use today will define the society we'll live in tomorrow. With Anytype
            we are building a software that will allow people to self-organise, protect their privacy and freedom of
            speech and own what they create - all without an intermediary. It will allow people to be independent and
            sovereign. Ultimately, sovereign people will be able to choose their communities and their own forms of
            governance to live in the world they want to live.
          </Text>
          <Text>
            We have a chance to end the nation state's monopoly on trust the same way as the printing press ended the
            church’s monopoly on truth. This will enable greater freedom, greater trust, greater cooperation and a real
            chance for a sustainable world.
          </Text>
          <Text>The future will be the one you build.</Text>
        </Card>
      </Container>
    </WebsiteLayout>
  );
};

export default Home;
