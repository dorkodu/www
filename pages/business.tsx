import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import { ButtonContainer, Showcase } from "../styles/blame";
import { tokens, ui } from "../styles/prism";
import Page from "../components/Page";
import Bulletpoint from "../components/Bulletpoint";
import { ParagraphTagline } from "../styles/blame";
import { Icon } from "@iconify-icon/react";
import SectionRuler from "../components/SectionRuler";
import Testimonial from "../components/Testimonial";

// images
import IntroIllustration from "../public/images/undraw_dorkodu-work-culture.png";
import DescriptiveList from "../components/DescriptiveList";
import DescriptiveItem from "../components/DescriptiveItem";
import Quote from "../components/Quote";

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

const Work: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Showcase>
        <Hero
          {...{
            title: `our business`,
            tagline: `company insights for investors, sponsors and our community.`,
            statement: `dorkodu is not a conventional company. we do not intend to be one. staying humble and focusing on creating
          value is our only ambition.`,
          }}
        >
          <p css={style.hashtag}>
            #software #ui/ux #graphics
            <br />
            #design #economics #knowledge
          </p>
          <ButtonContainer>
            <Button type="fill" link="#story">
              continue
            </Button>
            <Button type="tonal" link="/business">
              be an investor<i>!</i>
            </Button>
          </ButtonContainer>
        </Hero>
        <Polaroid source={image.intro} />
      </Showcase>

      <section>
        <article>
          <h3>letʼs work together!</h3>
          <p>
            at dorkodu, we understand that our worldwide success can only come
            from our diverse workforce.
          </p>
          <Polaroid source={image.intro} description="our team & culture." />
        </article>
      </section>

      <section>
        <Showcase>
          <Testimonial
            {...{
              quote: `
            i founded dorkodu because i believed we can create a technology company with humane principles;
            this was my dream at first;
            then became dorkodu's mission.`,
              name: "doruk eray",
              title: "founder & chief",
            }}
          />
          <Polaroid source={image.intro} />
        </Showcase>
      </section>
    </>
  );
};

export default Work;

/*
 <script lang="ts" setup>

definePageMeta();

</script> 
  
<template>
  <main>
    <Showcase>
      <template #main>
      </template>
      <template #side>

      </template>
    </Showcase>

    <section>
      <h2>
        <span>hello, again.</span>&nbsp;
        <Icon name="fluent-emoji-flat:waving-hand-light" size="36" />
      </h2>
      <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">our purpose</span>
          <br><b>liberate the humankind.</b>
        </p>
      </Bulletpoint>
      <Bulletpoint icon="twemoji:bullseye">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">our mission</span>
          <br>
          we combine gamification, human-centric design with our superior technology
          and create products that help people...
          <br>create a free and happy life experience for everyone,
          <br>build the utopian dream of heaven on earth,
          <br><b>...with our meaningful products & technology.</b>
        </p>
      </Bulletpoint>
      <SectionRuler />
    </section>

    <section>
      <h2>our people</h2>
      <TeamMember name="doruk eray" title="founder & chief"
        about="cult leader, product polymath, creative psychedelic, progressive craftsman, lunatic. software, ui/ux, artwork, business."
        avatar="/images/doruk--green.png">
        <template #icons>
          <Icon name="tabler:flag-3" size="32" />
          <Icon name="tabler:tools" size="32" />
          <Icon name="tabler:building-bank" size="32" />
        </template>
        <template #more></template>
      </TeamMember>
      <hr>
      <TeamMember name="berk cambaz" title="technologist"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, enim. Dolorem doloremque similique dolorum repellat minus sequi fugiat nihil?"
        avatar="/images/berk.png">
        <template #icons>
          <Icon name="tabler:brand-open-source" size="32" />
          <Icon name="tabler:cpu" size="32" />
          <Icon name="tabler:code" size="32" />
        </template>
        <template #more></template>
      </TeamMember>
    </section>

    <PageContact />

    <Break />

    <PageLegend />

    <Break />
  </main>
</template>
<style lang="scss">
@import "styles";
</style>
    */
