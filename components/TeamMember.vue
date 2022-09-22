<template>
  <div>
    <div class="TeamMember">
      <div class="__container">
        <img class="avatar" :src="avatar" :alt="name">
        <div class="__info">
          <div class="icons">
            <slot name="icons"></slot>
          </div>
          <p class="name">{{ name }}</p>
          <p class="title">{{ title }}</p>
          <p class="about">{{ about }}</p>
          <div class="__more">
            <slot name="more"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { name, title, about, avatar }
  = defineProps<{
    name: string;
    title: string;
    about: string;
    avatar?: string;
  }>();
</script>

<style lang="scss" scoped>
@import "styles";

.TeamMember {
  display: flex;
  padding: 1rem;
  justify-content: center;

  .__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    height: 100%;
    max-width: 28rem;
  }

  .avatar {
    object-fit: cover;
    object-position: center;
    align-self: flex-start;
    flex-shrink: 0;
    width: 7.5rem;
    height: 7.5rem;
    border-radius: $system-layout-curve;
  }

  .__info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    p {
      padding: 0;
      margin: 0;
    }
  }

  .icons {
    display: flex;
    color: $reference-color-gray-60;
    margin-bottom: .15rem;

    * {
      stroke-width: 3;
    }
  }

  .name {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .title {
    margin-bottom: 0.75rem;
    color: $reference-color-gray-70;
    font-size: 1.15rem;
    font-weight: 700;
  }

  .about {
    font-size: 1.15rem;
    line-height: 1.5rem;
    font-weight: 450;
    color: $reference-color-gray-30;
  }
}

@media (min-width: 640px) {
  .TeamMember {

    .__container {
      text-align: left;
      flex-direction: row;
      justify-content: flex-start;
      gap: 1rem;
      max-width: 36rem;
    }

    .avatar {
      margin: 0;
    }
  }
}
</style>
