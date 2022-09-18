<script setup>
const route = useRoute();

const WEBSITE_ROOT = "https://dorkodu.com";

useHead({
  titleTemplate: `${route.meta.title} — dorkodu`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  meta: [
    { name: 'title', content: `${route.meta.title}` },
    { name: 'description', content: `${route.meta.description}` },
    { name: 'keywords', content: `${route.meta.keywords}` },
    // open graph meta tags
    { name: 'og:type', content: `website` },
    { name: 'og:url', content: `${WEBSITE_ROOT + route.fullPath}` },
    { name: 'og:title', content: `${route.meta.title}` },
    { name: 'og:description', content: `${route.meta.description}` },

    // twitter meta tags
    { name: 'twitter:card', content: `summary` },
    { name: 'twitter:url', content: `${WEBSITE_ROOT + route.fullPath}` },
    { name: 'twitter:title', content: `${route.meta.title}` },
    { name: 'twitter:description', content: `${route.meta.description}` },
  ],
  bodyAttrs: {
    class: 'body'
  },
  htmlAttrs: {
    lang: "en"
  },
  script: [],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
  ],
})
</script>
  
<template>
  <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
  <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
  <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
  <Link rel="manifest" href="/site.webmanifest" />
  <Link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#20df30" />
  <Link rel="shortcut icon" href="/favicon.ico?v=2" />
  <Meta name="msapplication-TileColor" content="#20df30" />
  <Meta name="msapplication-TileImage" content="/mstile-144x144.png?v=2" />
  <Meta name="msapplication-config" content="/browserconfig.xml?v=2" />
  <Meta name="theme-color" content="#20df30" />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
  
<style lang="scss">
@import "scss/styles.scss";
</style>
  