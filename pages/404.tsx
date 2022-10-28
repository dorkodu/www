import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import Page from "../components/Page";
import { ButtonContainer, Showcase } from "../styles/blame";

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

export default function Custom404() {
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
}
