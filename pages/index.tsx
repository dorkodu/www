import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import { ButtonContainer, Showcase } from "../styles/blame";
import { tokens, ui } from "../styles/prism";
import Page from "../components/Page";
import IntroIllustration from "../public/images/undraw_dorkodu-work-culture.png";
import Bulletpoint from "../components/Bulletpoint";
import { ParagraphTagline } from "../styles/blame";
import { Icon } from "@iconify-icon/react";
import SectionRuler from "../components/SectionRuler";

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
            we work to...
          </p>
          <ul css={style.arrowList}>
            <li>help people find and follow their true purpose.</li>
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
            we combine gamification, human-friendly design and our superior
            technology; to create masterpiece products which...
          </p>
          <ul css={style.arrowList}>
            <li>empower human brilliance.</li>
            <li>.</li>
          </ul>
        </Bulletpoint>
        <SectionRuler />
      </section>
    </>
  );
};

export default Home;

/*
<Hero :data="{
      title: `why?`,
      tagline: `liberate the humankind.`,
      statement: ``
    }" center>
      <template #head>

      </template>
      <template #content>
        
      </template>
    </Hero>


    <section>
      <div style="text-align: center;">
        <LinkButton action="read more" title="work @ dorkodu" link="/work" />
        <LinkButton action="read more" title="our business" link="/business" />
      </div>
    </section>

    <section>
      <h2>our people</h2>
      <Picture source="/images/undraw_experts_re_i40h.svg" />
      <TeamMember name="doruk eray" title="founder & chief"
        about="cult leader, product polymath, lunatic craftsman. revolutionist. software, ui/ux, artwork, business."
        avatar="/images/doruk--green.png">
        <template #icons>
          <Icon name="tabler:flag-3" size="32" />
          <Icon name="tabler:tools" size="32" />
          <Icon name="tabler:building-bank" size="32" />
        </template>
        <template #more></template>
      </TeamMember>
      <TeamMember name="berk cambaz" title="technologist"
        about="founding engineer, swiss-knife, homebrew software, research & development, open source."
        avatar="/images/berk.png">
        <template #icons>
          <Icon name="tabler:brand-open-source" size="32" />
          <Icon name="tabler:cpu" size="32" />
          <Icon name="tabler:code" size="32" />
        </template>
        <template #more></template>
      </TeamMember>
      <hr>
      <CardDeck :columns="2">
        <TeamMember style="max-width: 360px; margin: 0 auto;" name="berra" title="rookie"
          about="freelance creative. graphics, visual arts, media. social justice warrior.">
          <template #icons>
            <Icon name="tabler:brush" size="32" />
            <Icon name="tabler:palette" size="32" />
            <Icon name="tabler:device-tv-old" size="32" />
          </template>
          <template #more></template>
        </TeamMember>

        <div class="JoinUsAd">
          h4
        </div>

        <TeamMember class="TeamAdBanner" name="be the next rookie?" title=""
          about="dorkodu is the best place to work for gen-z. anarchist community">

        </TeamMember>

      </CardDeck>
    </section>

    <Break />

    <Page.Contact />

*/
