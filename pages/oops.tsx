import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import { ButtonContainer, Showcase } from "../styles/elements";
import { tokens, ui } from "../styles/prism";
import Page from "../components/Page";

// images
import VoidIllustration from "../public/images/undraw-void.svg";

const meta = {
  title: "oops! — dorkodu",
  description: "something's gone wrong.",
  keywords: "404, oops, not found",
  url: "/oops",
  image: {
    src: "/public/images/dorkodu-single.png",
    alt: "dorkodu logo with single letter.",
  },
};

const image = {
  intro: VoidIllustration,
};

const Oops: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Showcase>
        <Hero
          title="oops!"
          tagline="something's gone wrong."
          statement="you shouldn't be here. you can use the links to surf the website, or just go back home page."
        >
          <ButtonContainer>
            <Button type="fill" link="/">
              go back ↺
            </Button>
          </ButtonContainer>
        </Hero>
        <Polaroid source={image.intro} />
      </Showcase>
      <br />
      <section>
        <hr />
        <Page.Contact />
      </section>
    </>
  );
};

export default Oops;
