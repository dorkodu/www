<script lang="ts" setup>
const hero = {
  title: "we are dorkodu.",
  tagline: "the gamification company.",
  statement: `we liberate the human with meaningful technology.`,
  picture: {
    source: "/images/doruk--green.png",
    title: "pixelated, natively digital 💽"
  },
};

definePageMeta({
  title: "welcome!",
  description: `liberate the human!`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
});
</script> 

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="hero.title" :tagline="hero.tagline" :statement="hero.statement" style="margin-top: 0 !important;">
          <template #head>
            <Icon name="twemoji:leaf-fluttering-in-wind" size="48" />
          </template>
          <template #content>
            <p class="hashtag">#gamification #web3 #knowledge #artworks</p>
            <div class="button-container">
              <Button type="fill" link="/story">our story</Button>
              <Button type="tonal" link="/work">join us!</Button>
            </div>
          </template>
        </Hero>
      </template>
      <template #side>
        <Picture :source="hero.picture.source" :title="hero.picture.title" />
      </template>
    </Showcase>

    <Break />

    <article>
      <h2>
        <Icon name="fluent-emoji-flat:thinking-face" size="36" />&nbsp;
        <span>who we are?</span>
      </h2>
      <p style="font-size: 1.25rem; margin: 0;">
        <span class="paragraph-tagline">i want to...</span>
        <br>build the utopian dream of heaven on earth;
        <br>create a free and happy life experience, for everyone;
        <br><b>liberate the human with meaningful technology.</b>
      </p>
      <p>— yep. this is why i wake up every day.</p>
      <SectionRuler />
    </article>


    <PageContact />

    <Break />

    <PageLegend />

    <Break />
  </main>
</template>
<style lang="scss">
@import "styles";
</style>
  