import { css } from "@emotion/react";
import { tokens } from "./prism";

export default css`
  html {
    font-family: ${tokens.typescale.body.font}, sans-serif;
    font-weight: normal;
    font-size: 1rem;
    text-transform: lowercase;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.25;

    a {
      font-weight: inherit;
      line-height: inherit;
    }
  }

  // Text Styles

  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
  }

  .--uppercase {
    text-transform: uppercase;
  }

  .--lowercase {
    text-transform: lowercase;
  }
`;
