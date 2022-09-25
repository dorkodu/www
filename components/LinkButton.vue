<script lang="ts" setup>
const { action, title, link } = defineProps<{
  action: string;
  title: string;
  link: string;
}>();
</script>

<template>
  <a class="LinkButton" :href="link">
    <span class="action">{{ action }}</span>
    <p class="title">{{ title }}</p>
  </a>
</template>

<style lang="scss" scoped>
@import "styles";

.LinkButton {
  display: inline-block;
  margin: .5rem 0;
  margin-right: .5rem;
  padding: .5rem 1.5rem .5rem 1rem;
  border-radius: .75rem;
  border: .25em solid $reference-color-gray-95;
  min-width: 12.5rem;
  text-align: left;
  color: $reference-color-gray-70 !important;

  &:hover,
  &:focus {
    border-color: $reference-color-gray-90 !important;
    text-decoration: underline;

    .action {
      color: $reference-color-gray-60 !important;
    }
  }

  .title {
    display: block;
    font-size: 1.35rem;
    line-height: 1.75rem;
    padding: 0;
    font-weight: 700;
    color: $reference-color-gray-10 !important;
    margin: 0;
  }

  .action {
    display: block;
    color: $reference-color-gray-70 !important;
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
  }
}
</style>
