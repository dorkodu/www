import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import { ButtonContainer, Showcase, IconTitle } from "../styles/elements";
import { tokens, ui } from "../styles/prism";
import Page from "../components/Page";
import Bulletpoint from "../components/Bulletpoint";
import { ParagraphTagline } from "../styles/elements";
import { Icon } from "@iconify-icon/react";
import DescriptiveList from "../components/DescriptiveList";
import DescriptiveItem from "../components/DescriptiveItem";
import Quote from "../components/Quote";

import Testimonial from "../components/Testimonial";

// images
import IntroIllustration from "../public/images/undraw_folder.svg";
import ExcaliburIllustration from "../public/images/undraw_excalibur.svg";
import { IconHeading } from "../components/Page/shared";

const meta = {
  title: "business — dorkodu",
  description: `join the revolution!`,
  keywords: `work @ dorkodu, careers at dorkodu, careers dorkodu, dorkodu jobs, work at dorkodu`,
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

const Business: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Intro />
      <Mission />
      <Story />
      <Values />
      <CorporateOverview />
      <Press />

      <Showcase>
        <Testimonial
          {...{
            quote: `
            i founded and bet my life dorkodu because i believe
            world needs a technology company with human-centric values;
            this was my dream at first;
            then became dorkodu's mission.`,
            name: "doruk eray",
            title: "founder & chief",
          }}
        />
        <Polaroid source={ExcaliburIllustration} />
      </Showcase>
    </>
  );
};

export default Business;

//?::: PAGE SECTIONS :::?//

const Intro = () => (
  <Showcase>
    <Hero
      {...{
        title: `our business`,
        tagline: `company insights for investors, sponsors and our community.`,
        statement: `dorkodu is not a conventional company. we do not intend to be one. staying humble and focusing on creating
    value is our only ambition.`,
      }}
    >
      <ButtonContainer style={{ margin: 0 }}>
        <Button type="fill" link="#overview">
          continue
        </Button>
        <Button type="tonal" link="#invest">
          be an investor<i>!</i>
        </Button>
      </ButtonContainer>
    </Hero>
    <Polaroid source={image.intro} />
  </Showcase>
);

const Mission = () => {
  const local = {};
  return <></>;
};

const Story = () => {
  const local = {};
  return <></>;
};

const Values = () => {
  const local = {};
  return <></>;
};

const CorporateOverview = () => {
  const local = {};
  return (
    <section id="overview">
      <IconHeading icon="icon-park-twotone:city">
        Corporate Overview
      </IconHeading>
      <article>
        <h3>tl;dr</h3>
        <p>
          <b>We bootstrapped Dorkodu by ourselves</b>, as a side-hustle to our
          school life (now the opposite). We hold meetings at the school during
          breaks or after school, and mostly online during the pandemic. Thanks
          to our own minimalist engineering approaches, we only needed to rent a
          shared hosting.
        </p>
        <p>
          <b>But we are aware of our potential to do really big things.</b>{" "}
          Although <b>we are not incorporated yet</b>, sooner we will need to.
        </p>
        <p>
          If you want to talk with us about investment, sponsorship or
          mentorship; please contact us. We appreciate your contributions :)
        </p>
      </article>
    </section>
  );
};

const Press = () => {
  const local = {};

  return (
    <section>
      <div css={IconTitle}>
        <Icon icon="twemoji:rolled-up-newspaper" width={48} height={48} />
        <div>
          <h2>press</h2>
          <p></p>
        </div>
      </div>
      <p>
        For questions or inquiries specific to Investor Relations or Community
        Membership matters, please email @dorkodu.com or visit our Investor
        Relations page
      </p>
      <p>
        For customer support, please contact us via a related platform below.
      </p>
      <Page.Contact />
    </section>
  );
};
