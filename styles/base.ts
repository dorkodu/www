import { css } from "@emotion/react";
import { tokens, ui, color } from "./prism";

export default css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
    font-size: ${tokens.typescale.baseSize};
  }

  body {
    -webkit-text-size-adjust: 100%;
  }

  @media (min-width: 1600px) {
    html {
      font-size: calc(${tokens.typescale.baseSize} + 2px);
    }
  }

  @media (min-width: 2000px) {
    html {
      font-size: calc(${tokens.typescale.baseSize} + 4px);
    }
  }

  div {
    overflow: hidden;
    font-family: ${tokens.typescale.font}, sans-serif;
  }

  p {
    font-family: inherit;
    font-size: 1rem;
    color: ${ui.color.neutral(10)};
  }

  a {
    color: ${ui.color.secondary(40)};
    text-decoration: none;
    font-family: inherit;

    &:hover {
      color: ${ui.color.secondary(10)};
    }
  }

  img,
  video {
    border: 0;
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: mononoki, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Roboto Mono", "Courier New", ui-monospace, monospace !important;
    font-weight: 400;
    line-height: 1.25rem;
    background-color: ${tokens.color.gray(90)};
    border-radius: 0.4rem;
    padding: 0.25rem;
  }

  li code,
  p code {
    font-size: 1rem;
    color: ${tokens.color.gray(20)};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${ui.color.neutral(10)};
    letter-spacing: -0.025rem;
    text-rendering: optimizelegibility;
    font-family: ${tokens.typescale.headline.font};
    margin-bottom: 0.5rem;
  }

  @supports (font-stretch: 100%) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-stretch: 40% !important;
    }
  }

  h1 {
    font-weight: 800;
  }

  h2 {
    font-weight: 700;
  }

  h3 {
    font-weight: 650;
  }

  h4,
  h5 {
    font-weight: 600;
  }

  h6 {
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  main {
    margin: 0 auto;
    min-height: 100vh !important;
  }

  hr {
    height: 0;
    margin: 1rem 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 0.25rem solid ${ui.color.neutral(95)};
  }

  article,
  section {
    max-width: 48rem;
    margin: 0 auto;
    padding: 1rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin: 0.5rem 1rem !important;
      list-style: disc inside U+25B3;

      li {
        color: ${ui.color.neutral(10)};
        font-size: inherit;

        p {
          padding-left: 0 !important;
          margin-left: 0 !important;
          margin: 0;
          padding: 0.4rem 0.7rem !important;
          font-weight: normal;
        }

        &::marker {
          color: ${ui.color.neutral(60)} !important;
        }

        h4 {
          margin: 0.3125rem 0 !important;
          text-align: left !important;
        }
      }
    }

    h1,
    h2,
    h3 {
      text-align: center;
    }

    h4,
    h5,
    h6 {
      padding: 0 0.5rem;
    }

    h1 {
      font-size: 1.95rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.55rem;
    }

    h4 {
      font-size: 1.35rem;
    }

    h5 {
      font-size: 1.25rem;
    }

    h6 {
      font-size: 1.15rem;
    }

    p {
      margin: 0.5rem;
      margin-bottom: 2rem;
      font-size: 1.15rem;
      line-height: 1.35;
      text-align: left;

      a {
        color: ${ui.color.secondary(50)};
        font-weight: 600;
        text-decoration: underline;

        &:hover {
          color: ${ui.color.secondary(30)};
        }
      }
    }

    &.--wide {
      width: 100%;
      max-width: none;

      .Picture,
      > p {
        width: 60%;
        margin: 0.5rem auto;
      }
    }
  }

  span.--highlight {
    background: top center / auto 1.5rem padding-box space no-repeat,
      ${ui.color.primary(50)} content-box;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    color: ${ui.color.neutral(10)};
    display: inline;
    line-height: 125%;
  }

  strong,
  b {
    font-weight: 600 !important;
  }
`;
