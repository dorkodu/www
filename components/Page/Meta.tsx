import { FunctionComponent } from "react";

interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

<script setup>
const route = useRoute();

const WEBSITE_ROOT = "https://dorkodu.com";

useHead({
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
})
</script>
  
<template>
  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
  
<style lang="scss">
@import "scss/styles.scss";
</style>
  

const Meta: FunctionComponent<MetaProps> = ({
  title,
  description,
  keywords,
  image,
}) => {
  return (
  <>
    <title>{title}</title>
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#20df30" />
    <link rel="shortcut icon" href="/favicon.ico?v=2" />
    <meta name="msapplication-TileColor" content="#20df30" />
    <meta name="msapplication-TileImage" content="/mstile-144x144.png?v=2" />
    <meta name="msapplication-config" content="/browserconfig.xml?v=2" />
    <meta name="theme-color" content="#20df30" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta charSet="UTF-8" />
  </>
  );
};

export default Meta;
