<script lang="ts" setup>
const hero = {
  title: "hello!",
  tagline: "i'm doruk eray.",
  statement: `founder, product polymath, forerunner of idealism, craftsman, lunatic, progressive, seeker of meaning.`,
  picture: {
    source: "/images/doruk--green.png",
    title: "pixelated, natively digital 💽"
  },
};

definePageMeta({
  title: "welcome!",
  description: `founder, product polymath, craftsman.`,
  keywords: `doruk eray, doruk, eray, mr. dorkodu, d0rukeray`,
});
</script>
  
<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="hero.title" :tagline="hero.tagline" :statement="hero.statement" style="margin-top: 0 !important;">
          <template #content>
            <p class="hashtag">#software #design #economics #art</p>
            <p style="font-size: 1.85rem;">
              <Icon name="twemoji:leaf-fluttering-in-wind" />
              <Icon name="fluent-emoji-flat:alien" />
              <Icon name="twemoji:crown" />
              <Icon name="fluent-emoji-flat:laptop" />
              <Icon name="twemoji:computer-disk" />
              <Icon name="twemoji:books" />
              <Icon name="twemoji:memo" />
              <Icon name="twemoji:artist-palette" />
              <Icon name="twemoji:performing-arts" />
              <Icon name="twemoji:classical-building" />
              <Icon name="twemoji:money-with-wings" />
              <Icon name="twemoji:statue-of-liberty" />
              <Icon name="fluent-emoji-flat:musical-score" size="36" />
              <Icon name="twemoji:studio-microphone" />
              <Icon name="fluent-emoji-flat:guitar" />
            </p>
            <div class="button-container">
              <Button type="fill" link="/story">read my story</Button>
              <Button type="tonal" link="/work">see my work</Button>
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
        <span>who i am?</span>
        <Icon name="fluent-emoji-flat:thinking-face" size="36" />
      </h2>
      <h3>and why you should care?</h3>
      <p style="font-size: 1.25rem; margin: 0;">
        <span class="paragraph-tagline">i want to...</span>
        <br>build the utopian dream of heaven on earth;
        <br>create a free and happy life experience, for everyone;
        <br><b>liberate the human with meaningful technology.</b>
      </p>
      <p>— yep. this is why i wake up every day.</p>
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
    