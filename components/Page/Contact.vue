<template>
  <article>
    <h3 style="margin-bottom: .5rem;">
      <Icon name="fluent-emoji-flat:call-me-hand-light" size="36" />
      contact
    </h3>
    <p style="margin: 0; margin-bottom: 1rem; text-align: center;">wanna reach out? wave a hand!</p>
    <CardDeck :columns="2">
      <div class="IconItem">
        <Icon name="tabler:brand-twitter" />
        <div>
          <span><a href="https://twitter.com/dorkodu">twitter</a></span>
          <span><b>@dorkodu</b><br>(news)</span>
        </div>
      </div>
      <div class="IconItem">
        <Icon name="tabler:brand-github" />
        <div>
          <span><a href="https://github.com/dorkodu">github</a></span>
          <span><b>@dorkodu</b><br>(open source)</span>
        </div>
      </div>
      <div class="IconItem">
        <Icon name="tabler:brand-instagram" />
        <div>
          <span><a href="https://instagram.com/d0rukeray">instagram</a></span>
          <span><b>@dorkodu</b><br>(social)</span>
        </div>
      </div>
      <div class="IconItem">
        <Icon name="tabler:mail-opened" />
        <div>
          <span><a href="mailto:doruk@dorkodu.com">email</a></span>
          <span><b>hey@dorkodu.com</b><br>(officials)</span>
        </div>
      </div>
    </CardDeck>
  </article>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>

</style>
