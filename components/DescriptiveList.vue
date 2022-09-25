<template>
  <dl class="descriptive-list">
    <Icon v-if="icon" :name="icon" class="badge" size="32" />
    <h2 v-if="title" class="__title">{{ title }}</h2>
    <p v-if="message" class="__message">{{ message }}</p>
    <div class="__contents">
      <slot></slot>
    </div>
  </dl>
</template>

<script setup lang="ts">
const { icon, title, message } = defineProps<{
  icon?: string;
  title?: string;
  message?: string;
}>();
</script>

<style lang="scss" scoped>
@import "styles";

.descriptive-list {
  padding: 0 1rem;
  max-width: 32rem;
  margin: 0 auto;

  .__title {
    text-align: left !important;
    padding: 0 !important;
    margin: .5rem 0;
  }

  .__message {
    padding: 0 !important;
    margin: .5rem 0 2rem;
    font-size: 1.15rem !important;
  }

  .__contents {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
