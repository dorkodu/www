import { css } from "@emotion/react";
import type { NextPage } from "next";
import { tokens, ui } from "../styles/prism";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";

// components
import { ButtonContainer, Showcase, ParagraphTagline } from "../styles/blame";
import SectionRuler from "../components/SectionRuler";
import LinkButton from "../components/LinkButton";
import Member from "../components/Member";
import CardDeck from "../components/CardDeck";
import Page from "../components/Page";
import Bulletpoint from "../components/Bulletpoint";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Polaroid from "../components/Polaroid";
import { JoinUsBanner } from "../components/_shared";

// images
import IntroIllustration from "../public/images/undraw_dorkodu-work-culture.png";
import ExpertsIllustration from "../public/images/undraw_experts_re_i40h.svg";

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
  p: {
    mission: css`
      font-size: 1.25rem;
      margin: 0;
      font-weight: 400;
    `,
  },
};

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

const Home: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Showcase>
        <Hero
          title="welcome!"
          tagline="dorkodu is the meaningful technology company."
          statement="we combine gamification, human-centric design with our superior technology
        to create products that help people actualize themselves."
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

      <Hero title="why?" tagline="liberate the humankind." statement="" center>
        <p css={style.p.mission}>
          we are a community of artists, who doesn’t just paint, dance, write
          poems or play songs. we create products and technology to make the
          world actually a better place. not just by communicating our opinions
          through our artwork, but we walk towards our utopia by doing something
          impactful and inspirational.
        </p>
      </Hero>

      <section>
        <h2>
          <span>hello, again.</span>&nbsp;
          <Icon icon="fluent-emoji-flat:waving-hand-light" size={36} />
        </h2>
        <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
          <p css={style.p.mission}>
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
          <p css={style.p.mission}>
            <b>...with our meaningful products & technology.</b>
          </p>
        </Bulletpoint>
        <Bulletpoint icon="twemoji:bullseye">
          <p css={style.p.mission}>
            <ParagraphTagline>our mission</ParagraphTagline>
            we combine gamification, human-centric design and our superior
            technology; to create products which empower human brilliance.
          </p>
        </Bulletpoint>
        <SectionRuler />
      </section>

      <section>
        <div
          css={css`
            text-align: center;
          `}
        >
          <LinkButton action="read more" title="work @ dorkodu" link="/work" />
          <LinkButton
            action="read more"
            title="our business"
            link="/business"
          />
        </div>
      </section>

      <section>
        <h2>our people</h2>
        <Polaroid source={image.team} />
        <p>Lorem ipsum dolor sit amet.</p>
        <Member member={members.doruk} />
        <Member member={members.berk} />
        <hr />
        <CardDeck columns={2}>
          <Member member={members.berra} />
          <JoinUsBanner />
        </CardDeck>
      </section>

      <Page.Contact />
      <br />
    </>
  );
};

export default Home;
