import { css } from "@emotion/react";
import type { NextPage } from "next";
import { tokens, ui, color } from "../styles/prism";
import { Icon } from "@iconify-icon/react";

// components
import { Project } from "../types/dorkodu";

import { ButtonContainer, Showcase, ParagraphTagline } from "../styles/blame";
import LinkButton from "../components/LinkButton";
import Member from "../components/Member";
import CardDeck from "../components/CardDeck";
import Page from "../components/Page";
import Bulletpoint from "../components/Bulletpoint";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Polaroid from "../components/Polaroid";

import { JoinUsBanner, SectionRuler } from "../components/_shared";

// images
import IntroIllustration from "../public/images/undraw_dorkodu-work-culture.png";
import ExpertsIllustration from "../public/images/undraw_experts_re_i40h.svg";
import styled from "@emotion/styled";
import Card from "../components/Card";

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
};

const style = {
  hashtag: css`
    color: ${tokens.color.blue(48)};
    font-size: 1.15rem;
    font-weight: 500;
    padding: 0;
    margin: 0 !important;
  `,
  arrowList: css`
    position: relative;
    list-style: none;
    margin: 0 !important;
    padding-left: 1.5em;
    font-size: 1.25rem;

    li:before {
      content: "⇢";
      position: absolute;
      left: 0;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.5rem;
      color: ${tokens.color.gray(75)};
    }
  `,
  largeParagraph: css`
    font-size: 1.25rem;
    margin: 0;
    font-weight: 400;
  `,
};

const Home: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />
      <Showcase>
        <Hero
          statement="we combine gamification, human-centric design with our superior technology
        to create products that help people actualize themselves."
          head={<DorkoduPunchline />}
        >
          <p css={style.hashtag}>
            #life #gamification #productivity
            <br />
            #crypto #economics #social #knowledge
          </p>
          <ButtonContainer>
            <Button type="fill" link="#story">
              our story
            </Button>
            <Button type="tonal" link="/work">
              join us<i>!</i>
            </Button>
          </ButtonContainer>
        </Hero>
        <Polaroid source={image.intro} />
      </Showcase>
      <Hero
        title="why?"
        tagline="liberate the humankind."
        statement=""
        center
      ></Hero>
      <Mission />
      <OurWork />
      <People />
      <section>
        <ButtonContainer style={{ textAlign: "center" }}>
          <LinkButton action="read more" title="work @ dorkodu" link="/work" />
          <LinkButton
            action="read more"
            title="our business"
            link="/business"
          />
        </ButtonContainer>
      </section>

      <Page.Contact />
      <br />
    </>
  );
};

export default Home;

//?::: REUSABLE PAGE SECTIONS :::?//

const Mission = () => (
  <section>
    <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
      <p css={style.largeParagraph}>
        <ParagraphTagline>our purpose</ParagraphTagline>
        <b>we liberate the humankind. </b>
        <br />
        we want to help people...
      </p>
      <ul css={style.arrowList}>
        <li>find their true purpose & passion.</li>
        <li>actualize themselves.</li>
        <li>create a free and happy life experience for everyone.</li>
        <li>build the utopian dream of heaven on earth.</li>
      </ul>
      <p css={style.largeParagraph}>
        <b>...with our meaningful products & technology.</b>
      </p>
    </Bulletpoint>
    <Bulletpoint icon="twemoji:bullseye">
      <p css={style.largeParagraph}>
        <ParagraphTagline>our mission</ParagraphTagline>
        we combine gamification, human-centric design and our superior
        technology; to create products which empower human brilliance.
      </p>
    </Bulletpoint>
    <SectionRuler />
  </section>
);

const People = () => {
  // team members data
  const members = {
    doruk: {
      name: "doruk eray",
      title: "founder & chief",
      about:
        "cult leader, product polymath, lunatic craftsman. revolutionist. software, ui/ux, artwork, business.",
      avatar: "/images/doruk--green.png",
      icons: ["tabler:flag-3", "tabler:tools", "tabler:building-bank"],
    },
    berk: {
      name: "berk cambaz",
      title: "technologist",
      about:
        "founding engineer, swiss-knife, homebrew software, research & development, open source.",
      avatar: "/images/berk.png",
      icons: ["tabler:brand-open-source", "tabler:cpu", "tabler:code"],
    },
    berra: {
      name: "berra uslu",
      title: "rookie",
      about:
        "freelance creative. graphics, visual arts, media. social justice warrior.",
      icons: ["tabler:brush", "tabler:palette", "tabler:device-tv-old"],
    },
  };

  return (
    <section>
      <h2>our people</h2>
      <Member member={members.doruk} />
      <Member member={members.berk} />
      <hr />
      <CardDeck columns={2}>
        <Member member={members.berra} />
        <JoinUsBanner />
      </CardDeck>
    </section>
  );
};

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
        font-size: 2.05rem;
        line-height: 2.1rem;
      }

      span {
        display: block;

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `,
    tuneIn: css`
      font-size: 2.25rem;
      line-height: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.05rem;
      color: ${ui.color.primary(40)};

      background: linear-gradient(
        0deg,
        ${ui.color.primary(42.5)} 25%,
        ${color(100, 75, 75)}
      );

      @media (min-width: ${tokens.viewpoint.tablet}) {
        font-size: 2.95rem;
        line-height: 3rem;
      }
    `,
    turnOn: css`
      font-weight: 750;
      letter-spacing: -0.065rem;
      color: ${ui.color.neutral(75)};

      background: linear-gradient(
        0deg,
        ${ui.color.neutral(65)},
        ${ui.color.neutral(85)}
      );
    `,
    dropOut: css`
      font-weight: 700;
      color: ${ui.color.neutral(15)};
      line-height: 105%;
      margin-top: 0.25rem;

      background: linear-gradient(
        0deg,
        ${ui.color.neutral(0)},
        ${ui.color.neutral(30)}
      );
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

const OurWork = () => {
  const projects: Project[] = [
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

  const localStyle = {
    container: css`
      display: flex;
      justify-content: center;
      gap: 1rem;

      flex-wrap: wrap;
      padding: 1rem;
    `,
    item: css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-basis: 20rem;
      gap: 0.25rem;

      * {
        margin: 0;
        padding: 0;
      }

      p {
        font-size: 1.25rem;
        text-align: center;
        color: ${ui.color.neutral(60)};
        font-weight: 500;
        line-height: 1.15;

        span {
          display: inline-block;
          color: ${ui.color.primary(40)};
          background-color: ${ui.color.primary(85)};
          padding: 0.25rem 0.5rem;
          margin: 0.25rem;
          border-radius: 0.5rem;
          font-size: 1rem !important;
        }
      }

      h4 {
        font-weight: 700;
        font-size: 1.65rem !important;
        margin-top: 0.5rem;
        color: ${ui.color.neutral(40)};
      }

      img {
        padding: 0 0.5rem;
      }

      hr {
        width: 100%;
      }
    `,

    mission: css`
      font-weight: 1.25rem;
    `,
  };

  return (
    <>
      <section>
        <article>
          <h2>our work</h2>
          <p css={style.largeParagraph}>
            we are a community of creatives who create impactful and
            inspirational products with humane technology to make the world
            actually a better place.
          </p>
        </article>
      </section>
      <div css={localStyle.container}>
        {projects.map((project, index) => (
          <div css={localStyle.item} key={index}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.tagline}</p>
            <p>
              <span>{project.type}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
