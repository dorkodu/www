<script lang="ts" setup>
const hero = {
  title: "we are dorkodu.",
  tagline: "the meaningful technology company.",
  statement: `we liberate the human. this is our mission.`,
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
        <Icon name="fluent-emoji-flat:thinking-face" size="32" />&nbsp;
        <span>who we are?</span>
      </h2>

      <p style="font-size: 1.25rem; margin: 0;">
        <span class="paragraph-tagline">what we do;</span>
        <br>
        <br>find their unique spark & actualize themselves
        <br>build the utopian dream of heaven on earth;
        <br>create a free and happy life experience, for everyone;
        <br><b>liberate the human with meaningful technology.</b>
      </p>
      <p>— yep. this is why i wake up every day.</p>
      <SectionRuler />
    </article>

    <article>
      <h2>
        <span>hello, again.</span>&nbsp;
        <Icon name="fluent-emoji-flat:waving-hand-light" size="36" />
      </h2>
      <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">our purpose;</span>
          <br><b>liberate the humankind.</b>
        </p>
      </Bulletpoint>
      <Bulletpoint icon="twemoji:bullseye">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">my mission;</span>
          <br>
          we combine gamification, human-centric design with our superior technology
          and create products that help people...
          <br>create a free and happy life experience for everyone,
          <br>build the utopian dream of heaven on earth,
          <br><b>...with our meaningful products & technology.</b>
        </p>
      </Bulletpoint>
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
  