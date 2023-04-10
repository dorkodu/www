import Head from "next/head";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Meta from "@/components/Meta";

import { HeroIndex } from "@/components/Hero/HeroIndex";
import { Image, List, Text, ThemeIcon, Title } from "@mantine/core";
import { IconBuildingCommunity } from "@tabler/icons-react";
import { Showcase } from "@/components/Commons";
import { ArrowRight, Emoji } from "@/styles/emoji";

const meta = {
  title: `Dorkodu ID — Dorkodu`,
  description: `Dorkodu ID is your digital identity.`,
  keywords: `dorkodu id`,
  url: "/products/id",
};

const Home: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <main>
        <Image src="/images/logos/forum_Icon.svg" alt="Dorkodu ID" width={100} height={100} my={20} />

        <Title>Dorkodu Forum</Title>
        <Text size={24} weight={500} color="dimmed">
          Social Discourse
        </Text>

        <Text maw={500} mt={16} size="lg">
          {`
          Redefining social media as we know it. 
          
          With our platform, you'll experience engaging in long-form discussions
          about a wide range of topics. 
          
          Say goodbye to endless scrolling and meaningless posts 
          
          - at Dorkodu Forum, we're all about quality over quantity. 

          With Dorkodu Forum, you can connect with like-minded individuals,
          discuss a wide range of topics, and share your knowledge with others in a community-driven environment.

          Whether you're a student, a professional, or just a curious mind, Dorkodu Forum provides a space where you can
          explore and learn from others.

          So why settle for social media platforms that leave you feeling disconnected
          and unsatisfied?

          Join the Dorkodu Forum community today and experience the power of knowledge-sharing in a
          whole new way!

          create a dynamic and
          engaging platform for sharing and learning.
          
          Here's how it works: 
          you create a profile
          dive into the public discussions, 
          each of which is a carefully crafted markdown document that provides you with all the
          pre-required information about the topic. 
          
          Whether you're exploring the latest tech trends or discussing the
          implications of climate change, Dorkodu Forum has something for everyone. 
          
          So why wait? Join the Dorkodu Forum
          community today and start exploring the world of knowledge-sharing like never before!

          Join Dorkodu Forum for in-depth discussions with people who share your interests, 
          as well as those who hold different viewpoints. 
          
          Write and comment on arguments, and upvote or downvote the most engaging content. 
          
          Start exploring the world of knowledge-sharing today!
          `}
        </Text>
        <Text>Introducing Dorkodu Forum - the app that combines the best of Twitter and Wikipedia to</Text>

        <Showcase
          content={[
            <></>,
            <List icon={<Emoji size={24} emoji={ArrowRight} />}>
              <List.Item>Explore discussions.</List.Item>
              <List.Item>Join or create communities.</List.Item>
              <List.Item>Add positive/negative arguments</List.Item>
              <List.Item>Comment on posts</List.Item>
              <List.Item>Vote arguments</List.Item>
            </List>,
          ]}
        />
      </main>
    </WebsiteLayout>
  );
};

export default Home;
