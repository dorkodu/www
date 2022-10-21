import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import { ButtonContainer, Showcase } from "../styles/blame";
import { tokens, ui } from "../styles/prism";
import Page from "../components/Page";
import PlaceholderImage from "../public/images/workdesk.jpg";

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
  intro: PlaceholderImage,
};

const Oops: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Showcase>
        <Hero
          title="oops!"
          tagline="something's gone wrong."
          statement="you shouldn't be here. you can use the links to surf the website, or just go back to the home page."
        >
          <ButtonContainer>
            <Button type="fill" link="/">
              back to home ↗
            </Button>
          </ButtonContainer>
        </Hero>
        <Polaroid source={image.intro} />
      </Showcase>
      <br />
    </>
  );
};

export default Oops;
