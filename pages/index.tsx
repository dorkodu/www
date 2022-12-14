import { css } from "@emotion/react";
import type { NextPage } from "next";
import { tokens, ui, color } from "../styles/prism";

// components

import { ButtonContainer, Showcase, Space } from "../styles/elements";
import LinkButton from "../components/LinkButton";
import Page from "../components/Page";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";

import {
  Contact,
  JoinUsBanner,
  Mission,
  Motto,
  OurWork,
  People,
  Story,
  TheDorkoduWay,
  Why,
} from "../components/Page/shared";

// images
import IntroIllustration from "../public/images/undraw_dorkodu-work-culture.svg";
import ExpertsIllustration from "../public/images/undraw_experts_re_i40h.svg";
import FriendsUnderTreeIllustration from "../public/images/undraw_friendship.svg";

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

const image = {
  intro: IntroIllustration,
  team: ExpertsIllustration,
  storyMission: FriendsUnderTreeIllustration,
};

const style = {
  hashtag: css`
    color: ${tokens.color.blue(48)};
    font-size: 1.15rem;
    font-weight: 500;
    padding: 0;
    margin: 0 !important;
  `,
  largeParagraph: css`
    font-size: 1.25rem;
    margin: 0;

    em {
      font-style: normal;
      font-weight: 450;
    }
  `,
};

const Home: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Intro />
      <Why />
      <Mission />

      <Space />

      <TheDorkoduWay />

      <Space />

      <OurWork />

      <Space />

      <People />

      <Space />

      <Story />

      <Promoted />

      <Contact />

      <Space />
    </>
  );
};

export default Home;

const Intro = () => (
  <Showcase>
    <Hero
      statement="we combine gamification, human-centric design with our superior technology
        to create products that help people fulfill their dreams."
      head={<DorkoduPunchline />}
    >
      <p css={style.hashtag}>
        #life #gamification #productivity
        <br />
        #crypto #economics #social #knowledge
      </p>
    </Hero>
    <Polaroid source={image.intro} />
  </Showcase>
);

const DorkoduPunchline = () => {
  const style = {
    title: css`
      text-align: left;
      font-size: 1.9rem;
      line-height: 2.05rem;
      margin: 0;
      color: ${ui.color.neutral(35)};
      font-weight: 650;

      @media (min-width: ${tokens.viewpoint.tablet}) {
        font-size: 2.25rem;
        line-height: 2.3rem;
      }

      span {
        display: block;

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `,
    turnOn: css`
      font-weight: 750;
      letter-spacing: -0.075rem;
      color: ${ui.color.neutral(75)};

      background: linear-gradient(
        0deg,
        ${ui.color.neutral(70)},
        ${ui.color.neutral(90)}
      );
    `,
    tuneIn: css`
      font-size: 2.25rem;
      line-height: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.075rem;

      background: linear-gradient(
        0deg,
        ${ui.color.primary(42.5)} 10%,
        ${color(90, 80, 65)}
      );

      @media (min-width: ${tokens.viewpoint.tablet}) {
        font-size: 3.05rem;
        line-height: 3.15rem;
      }
    `,
    dropOut: css`
      font-weight: 700;
      color: ${ui.color.neutral(15)};

      background: linear-gradient(
        0deg,
        ${ui.color.neutral(0)},
        ${ui.color.neutral(40)}
      );

      @media (min-width: ${tokens.viewpoint.tablet}) {
        line-height: 115%;
      }
    `,
  };

  return (
    <h1 css={style.title}>
      <span css={style.turnOn}>we are your</span>
      <span css={style.tuneIn}>dream fulfillment</span>
      <span css={style.dropOut}>technology company.</span>
    </h1>
  );
};

const Promoted = () => (
  <section>
    <Motto />
    <Space />
    <Polaroid source={image.storyMission} />
    <p
      style={{
        fontSize: "1.4rem",
        letterSpacing: "-0.015rem",
        margin: "1rem 0",
      }}
    >
      When our founders got together, they aspired to{" "}
      <em style={{ fontWeight: "450", fontStyle: "normal" }}>
        create liberating life experiences for everyone
      </em>{" "}
      and help people{" "}
      <em style={{ fontWeight: "450", fontStyle: "normal" }}>
        fulfill their dreams.
      </em>
    </p>
    <Space />
    <JoinUsBanner />
    <Space />
    <ButtonContainer style={{ textAlign: "center" }}>
      <LinkButton action="read more" title="work @ dorkodu" link="/work" />
      <LinkButton action="read more" title="our business" link="/business" />
    </ButtonContainer>
  </section>
);
