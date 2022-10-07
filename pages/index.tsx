import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";

const meta = {
  title: "welcome! — dorkodu",
  description: `liberate the humankind.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
};

const hero = {};

const Home: NextPage = () => {
  return (
    <>
      <div css={css``}></div>

      <Hero
        title="welcome!"
        tagline="dorkodu is the meaningful technology company."
        statement="we combine gamification, human-centric design with our superior technology
        to create products that help people actualize themselves."
      >
        <p className="hashtag">#gamification #web3 #knowledge #artwork</p>
        <div className="button-container">
          <Button type="fill" link="#story">
            our story
          </Button>
          <Button type="tonal" link="/work">
            join us!
          </Button>
        </div>
      </Hero>
    </>
  );
};

export default Home;
