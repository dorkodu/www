import { css } from "@emotion/react";
import type { NextPage } from "next";
import { tokens, ui, color } from "../styles/prism";
import { Icon } from "@iconify-icon/react";

// components
import { Project } from "../types/dorkodu";

import {
  ButtonContainer,
  Showcase,
  ParagraphTagline,
  Badge,
  ArrowList,
} from "../styles/elements";
import LinkButton from "../components/LinkButton";
import Member from "../components/Member";
import CardDeck from "../components/CardDeck";
import Page from "../components/Page";
import Bulletpoint from "../components/Bulletpoint";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Polaroid from "../components/Polaroid";

import {
  IconHeading,
  JoinUsBanner,
  SectionRuler,
} from "../components/Page/shared";

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
      <Motto />
      <Mission />
      <br />
      <TheDorkoduWay />
      <br />
      <OurWork />
      <br />
      <People />
      <br />
      <Story />
      <section>
        <JoinUsBanner />
      </section>
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

//?::: REUSABLE PAGE SECTIONS :::?//

const Mission = () => (
  <section>
    <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
      <ParagraphTagline>
        <span>our purpose</span>
      </ParagraphTagline>
      <p css={style.largeParagraph}>we want to help people...</p>
      <ul css={ArrowList}>
        <li>find their true purpose & passion.</li>
        <li>actualize themselves.</li>
        <li>create a free and happy life experience for everyone.</li>
        <li>build the utopian dream of heaven on earth.</li>
      </ul>
    </Bulletpoint>
    <Bulletpoint icon="twemoji:bullseye">
      <ParagraphTagline>
        <span>our mission</span>
      </ParagraphTagline>
      <p css={style.largeParagraph}>
        we combine <em>gamification</em>, <em>human-centric design</em> and{" "}
        <em>our superior technology</em> to create products which{" "}
        <em>liberate the humankind.</em>
      </p>
    </Bulletpoint>
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
        "freelance creative. illustrator, visual arts. social justice warrior.",
      icons: ["tabler:brush", "tabler:palette"],
    },
    aziz: {
      name: "aziz öçmaz",
      title: "rookie",
      about:
        "gamification apprentice, graphics design, media. gnome chieftain.",
      icons: ["tabler:device-gamepad-2", "tabler:abacus"],
    },
  };

  const rookieWrapper = css`
    max-width: 25rem !important;
    margin: 0 auto !important;
  `;

  return (
    <section>
      <IconHeading icon="icon-park-twotone:peoples-two">our people</IconHeading>
      <br />
      <Member member={members.doruk} />
      <Member member={members.berk} />
      <hr />
      <CardDeck columns={2}>
        <div css={rookieWrapper}>
          <Member member={members.berra} />
        </div>
        <div css={rookieWrapper}>
          <Member member={members.aziz} />
        </div>
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
      gap: 1.5rem;

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
          color: ${ui.color.primary(35)};
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
        <IconHeading icon="icon-park-twotone:mac-finder">our work</IconHeading>
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

const TheDorkoduWay = () => {
  const style = {
    TheDorkoduWay: css`
      display: flex;
      flex-direction: column;
      max-width: 64rem;
      margin: 0 auto;
      padding: 1rem;
      gap: 1rem;

      * {
        text-align: center !important;
      }

      @media (min-width: ${tokens.viewpoint.desktop.S}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;

        * {
          padding: 0;
          margin: 0;
          text-align: left !important;
        }

        p {
        }
      }
    `,
    title: css`
      display: block;
      font-size: 2.05rem;
      color: ${ui.color.neutral(65)};
      line-height: 2.25rem;
      font-weight: 450;
      word-wrap: normal;
      margin: 0 auto;
      max-width: 32rem;

      i {
        font-style: normal;
        font-weight: 600;
        letter-spacing: -0.05rem;
      }

      .dorkodu {
        color: ${ui.color.primary(45)};
      }

      .tech {
        display: inline;
        color: ${tokens.color.blue(50)};
        line-height: 2.75rem;
      }

      .human {
        color: ${tokens.color.indigo(50)};
      }

      .ideal {
        color: ${tokens.color.gray(20)};
      }

      @media (min-width: ${tokens.viewpoint.desktop.S}) {
        width: 40%;
      }
    `,
    paragraph: css`
      font-size: 1.5rem;
      margin: 0 auto;
      max-width: 37rem;

      em,
      i {
        font-style: normal;
        display: inline;
      }

      em {
        font-weight: 550;
      }

      i {
        font-weight: 500;
      }

      @media (min-width: ${tokens.viewpoint.desktop.S}) {
        display: inline-block;
        width: 60%;
        height: fit-content;
      }
    `,
  };

  return (
    <div css={style.TheDorkoduWay}>
      <h3 css={style.title}>
        <i className="dorkodu">dorkodu</i> stands for a&nbsp;
        <i className="ideal">higher ideal</i> of&nbsp;
        <i className="human">human</i> and <i className="tech">technology</i>.
      </h3>
      <p css={style.paragraph}>
        our culture is inspired by <i>emotions</i> which express&nbsp; the{" "}
        <i>vibe</i> of an authentic <em>human experience.</em>
      </p>
    </div>
  );
};

const Motto = () => {
  const Motto = css`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 1rem 0 !important;
    background-color: ${ui.color.primary(85)};
    border-radius: 1rem;
    gap: 0.5rem;

    @media (min-width: ${tokens.viewpoint.mobile.XL}) {
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem !important;
    }

    p {
      width: calc(100% - 5rem);
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 450;
      color: ${ui.color.primary(40)};
      letter-spacing: -0.025rem;
      margin: 0;
      text-align: center;

      i {
        font-style: normal;
        font-weight: 500;
        color: ${ui.color.primary(35)};
      }
    }
  `;

  return (
    <section>
      <div css={Motto}>
        <div style={{ display: "flex" }}>
          <Icon
            icon="icon-park-twotone:torch"
            width={56}
            height={56}
            style={{
              color: ui.color.primary(40),
              backgroundColor: ui.color.primary(75),
              padding: ".25rem",
              borderRadius: "1rem",
            }}
          />
        </div>
        <p>
          We are here to put the{" "}
          <i style={{ textDecoration: "underline" }}>humane spirit</i> into the{" "}
          <i>products</i> and <i>technology</i> again.
        </p>
      </div>
    </section>
  );
};

const Why = () => {
  const local = {};

  return (
    <>
      <Hero
        title="why?"
        tagline="liberate the humankind"
        head={
          <Icon icon="icon-park-twotone:brain" width={48} css={Badge.DuoTone} />
        }
        center
      >
        <p
          css={css`
            font-size: 1.6rem;
            text-align: center;
            padding: 0;
            margin: 0;
            font-weight: 450;
          `}
        >
          with meaningful technology
        </p>
      </Hero>
    </>
  );
};

const Story = () => {
  "icon-park-twotone:book-one";
};
