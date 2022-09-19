<template>
  <div>
    <header class="header">
      <div class="__container">
        <a class="__logo" href="/">
          <img src="/images/dorkodu.svg" title="dorkodu" />
        </a>
        <nav class="__nav">
          <NuxtLink to="/" rel="dofollow">
            <Icon name="twemoji:open-book" size="32" />
            <span>about</span>
          </NuxtLink>
          <NuxtLink to="/work" rel="dofollow">
            <Icon name="twemoji:floppy-disk" size="30" />
            <span style="margin-top: 2px;">work</span>
          </NuxtLink>
          <NuxtLink to="/business" rel="dofollow">
            <Icon name="noto:dollar-banknote" size="32" />
            <span>business</span>
          </NuxtLink>
        </nav>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@import "styles";

.header {
  padding: 0.64rem;

  .__container {
    display: flex;
    margin: 0 auto;
    max-width: $system-layout-breakpoint;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .__logo {
    img {
      display: block;
      width: 20rem;
      height: auto;
      margin: 1rem auto;
    }
  }

  .__nav {
    display: flex;
    font-size: 1rem;
    line-height: 1.25rem;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    a {
      display: flex;
      align-items: center;
      gap: .5rem;
      padding: .5rem;
      border-radius: .5rem;
      line-height: 1.5;
      font-size: 1.25rem;
      font-weight: 600;
      color: $reference-color-gray-60;
      text-decoration: none;

      &:hover {
        background-color: $reference-color-green-90;
        color: $reference-color-green-30;

        svg {
          color: $reference-color-gray-50;
        }
      }
    }
  }
}

@media (min-width: 425px) {
  .header {
    .__nav {
      flex-direction: row;
      align-items: center;
      gap: .25rem;
    }
  }
}

@media (min-width: $system-viewpoint-tablet) {
  .header {
    margin: 1rem auto;

    .__logo img {
      width: 24rem;
    }
  }
}

@media (min-width: $system-viewpoint-desktop-S) {
  .header {
    .__container {
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }

    .__logo img {
      width: 25rem;
    }

    .__nav {
      width: calc(100% - 25rem);
      gap: 1rem;
      color: $reference-color-gray-60;
    }
  }
}
</style>
