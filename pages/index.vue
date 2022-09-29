<script lang="ts" setup>

definePageMeta({
  title: 'welcome! — dorkodu',
  description: `liberate the humankind.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
});

</script> 

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :data="{
          title: `welcome!`,
          tagline: `dorkodu is the meaningful technology company.`,
          statement: `we combine gamification, human-centric design with our superior technology
          to create products that help people actualize themselves.`
        }" style="margin-top: 0 !important;">
          <template #content>
            <p class="hashtag">#gamification #web3 #knowledge #artwork</p>
            <div class="button-container">
              <Button type="fill" link="#story">our story</Button>
              <Button type="tonal" link="/work">join us!</Button>
            </div>
          </template>
        </Hero>
      </template>
      <template #side>
        <Picture source="/images/undraw_dorkodu-work-culture.png" />
      </template>
    </Showcase>

    <Break />

    <Hero :data="{
      title: `why?`,
      tagline: `liberate the humankind.`,
      statement: ``
    }" center>
      <template #head>

      </template>
      <template #content>
        <p style="font-size:1.25rem; text-align: left;">
          we are a community of artists, who doesn’t just paint, dance, write poems or play songs. we create products
          and technology to make the world actually a better place. not just by communicating our opinions through our
          artwork, but we walk towards our utopia by doing something impactful and inspirational.
        </p>
      </template>
    </Hero>

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
      <div style="text-align: center;">
        <LinkButton action="read more" title="work @ dorkodu" link="/work" />
        <LinkButton action="read more" title="our business" link="/business" />
      </div>
    </section>

    <section>
      <h2>our people</h2>
      <Picture source="/images/undraw_experts_re_i40h.svg" />
      <TeamMember name="doruk eray" title="founder & chief"
        about="cult leader, product polymath, lunatic craftsman. revolutionist. software, ui/ux, artwork, business."
        avatar="/images/doruk--green.png">
        <template #icons>
          <Icon name="tabler:flag-3" size="32" />
          <Icon name="tabler:tools" size="32" />
          <Icon name="tabler:building-bank" size="32" />
        </template>
        <template #more></template>
      </TeamMember>
      <TeamMember name="berk cambaz" title="technologist"
        about="founding engineer, swiss-knife, homebrew software, research & development, open source."
        avatar="/images/berk.png">
        <template #icons>
          <Icon name="tabler:brand-open-source" size="32" />
          <Icon name="tabler:cpu" size="32" />
          <Icon name="tabler:code" size="32" />
        </template>
        <template #more></template>
      </TeamMember>
      <hr>
      <CardDeck :columns="2">
        <TeamMember style="max-width: 360px; margin: 0 auto;" name="berra" title="rookie"
          about="freelance creative. graphics, visual arts, media. social justice warrior.">
          <template #icons>
            <Icon name="tabler:brush" size="32" />
            <Icon name="tabler:palette" size="32" />
            <Icon name="tabler:device-tv-old" size="32" />
          </template>
          <template #more></template>
        </TeamMember>

        <div class="JoinUsAd">
          h4
        </div>

        <TeamMember class="TeamAdBanner" name="be the next rookie?" title=""
          about="dorkodu is the best place to work for gen-z. anarchist community">

        </TeamMember>

      </CardDeck>
    </section>

    <Break />

    <PageContact />

    <Break />
  </main>
</template>
<style lang="scss">
@import "styles";

.JoinUsAd {
  max-width: 360px;
  margin: 0 auto;
  border-radius: 1rem;
  background-color: $system-color-primary-95;
}
</style>
  