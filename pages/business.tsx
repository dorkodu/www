<script lang="ts" setup>

definePageMeta({
  title: "business — dorkodu",
  description: `liberate the humankind.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
});

</script> 
  
<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :data="{
          title: `our business`,
          tagline: `company insights for investors, sponsors and our community.`,
          statement: `dorkodu is not a conventional company. we do not intend to be one. staying humble and focusing on creating
          value is our only ambition.`
        }" style="margin-top: 0 !important;">
        </Hero>
      </template>
      <template #side>
        <Picture source="/images/undraw_experts_re_i40h.svg" />
      </template>
    </Showcase>

    <Break />

    <Hero :data="{
      title: `hello`,
      tagline: `hello`,
      statement: `hello`
    }" center>
      <template #head></template>
      <template #content></template>
    </Hero>

    <Showcase>
      <template #main>
        <DescriptiveList icon="tabler:building" title="company overview" message="">

          <DescriptiveItem title="our name"
            description="our founder doruk eray wanted to create a unique word for easily getting a .com domain. so our name ended up being 'dorkodu', doruk + code.">
            <Icon name="twemoji:fire" size="32" />
          </DescriptiveItem>

          <DescriptiveItem title="technology"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aspernatur.">
            <Icon name="twemoji:fire" size="32" />
          </DescriptiveItem>

          <DescriptiveItem title="business"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aspernatur.">
            <Icon name="twemoji:fire" size="32" />
          </DescriptiveItem>

          <DescriptiveItem title="culture"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aspernatur.">
            <Icon name="twemoji:fire" size="32" />
          </DescriptiveItem>

          <DescriptiveItem title="management"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aspernatur.">
            <Icon name="twemoji:fire" size="32" />
          </DescriptiveItem>

          <DescriptiveItem title="goals" description="we want dorkodu to be the best gamification">
            <Icon name="twemoji:fire" size="32" />
          </DescriptiveItem>

        </DescriptiveList>
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
    