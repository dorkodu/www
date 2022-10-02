import { css } from "@emotion/react";
import { tokens, ui } from "./prism";

export default css`
  .paragraph-tagline {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: ;
    margin: 0;
  }

  .badge {
    padding: 0.5rem !important;
    border-radius: ${ui.layout.curve};
    height: 3rem !important;
    width: 3rem !important;

    background-color: ${ui.color.primary(80)};
    color: ${ui.color.primary(40)};
    stroke-width: 2.25;
  }

  .symbol {
    padding: 0.25rem !important;
    height: 3rem !important;
    width: 3rem !important;

    color: ${ui.color.neutral(70)};
    stroke-width: 2.25;
  }

  article > .Picture {
    padding: 1rem 0 !important;
  }

  .section-icon {
    display: block;
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    stroke: ${ui.color.neutral(70)};
  }

  .Picture.--undraw > img {
    padding: 0 1rem;
  }

  .--lightgray {
    color: ${ui.color.neutral(60)};
  }

  .header .logo {
    margin-bottom: 1rem !important;
  }

  .button-container {
    padding: 0.5rem 0;
    text-align: left;

    &.--center {
      text-align: center !important;
    }

    .button {
      margin: 0.25rem 0 !important;
      margin-right: 0.5rem !important;
    }
  }

  /*----------  Feature Showcase  ----------*/

  .feature-showcase .column.--aside .Picture {
    margin: 0 auto !important;
  }

  .feature-showcase .column.--main .descriptive-list {
    max-width: 36rem;
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    .feature-showcase .column.--main .descriptive-list {
      float: right;
      margin-left: 2rem;
    }

    .feature-showcase .column.--aside .Picture {
      margin: 4rem auto 0 !important;
      float: left;
    }

    .feature-showcase > .column.--main {
      width: 60%;
      float: left;
    }

    .feature-showcase > .column.--aside {
      width: 40%;
      float: left;
    }
  }
`;
