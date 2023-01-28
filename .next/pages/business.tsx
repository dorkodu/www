import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import {
  ButtonContainer,
  Showcase,
  IconTitle,
  Space,
} from "../styles/elements";
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
import DorukPixelart from "../public/images/doruk--green.png";

import {
  Contact,
  ContactChannels,
  IconHeading,
} from "../components/Page/shared";

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

const Business: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Intro />
      <Mission />
      <Story />
      <Values />
      <CorporateOverview />

      <section
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 0;
        `}
      >
        <ContactChannels />
      </section>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          max-width: 55rem;
          margin: 1rem auto;
          align-items: center;
          padding: 1rem;

          @media (min-width: 900px) {
            flex-direction: row;
            gap: 1rem;
          }
        `}
      >
        <Image
          src={DorukPixelart}
          style={{
            width: "auto",
            maxWidth: "15rem",
            maxHeight: "15rem",
            height: "auto",
            borderRadius: "1rem",
          }}
          alt="doruk eray's pixel art"
        />
        <Testimonial
          {...{
            quote: `
            we bet our lives on dorkodu. because we believe
            world needs a human-friendly technology company.
            this was my dream at first,
            then became dorkodu's mission.`,
            name: "doruk eray",
            title: "founder & chief",
          }}
        />
      </div>
      <Space />
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
        statement: `dorkodu is not a conventional company. staying humble & focusing on creating value for everyone is our only ambition.`,
      }}
    >
      <ButtonContainer style={{ margin: 0 }}>
        <Button type="fill" link="#overview">
          read more
        </Button>
        <Button type="tonal" link="#contact">
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
  return (
    <section>
      <p></p>
    </section>
  );
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
      <br />
      <article>
        <p>
          <b>We bootstrapped Dorkodu by ourselves</b>, <u>two teenagers</u> as a
          side-hustle to our school life (now the opposite). We hold meetings at
          the school during breaks, and mostly online during the pandemic.
          Thanks to our minimalist engineering principles, we only needed to
          rent a shared hosting.
        </p>
        <p>
          <b>But we are aware of our potential to do really big things.</b>
          <br />
          Although <b>we are not incorporated yet</b>, sooner we need to.
        </p>
        <p>
          If you want to talk with us about <em>investment</em>,{" "}
          <em>sponsorship</em> or <em>business partnership</em>; please contact
          us. We appreciate your help<i>!</i> 😇
        </p>
      </article>
    </section>
  );
};
