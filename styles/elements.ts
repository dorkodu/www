import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { tokens, ui } from "./prism";

export const SectionIcon = styled.div`
  display: block;
  width: 4rem;
  height: 4rem;
  padding: 0.25rem !important;
  margin: 0 auto;
  stroke-width: 2.25;
  stroke: ${ui.color.neutral(70)};
`;

export const Badge = {
  DuoTone: css`
    color: ${ui.color.primary(45)} !important;
  `,
  Flat: css`
    padding: 0.5rem !important;
    border-radius: ${ui.layout.curve};

    background-color: ${ui.color.primary(85)} !important;
    color: ${ui.color.primary(45)} !important;
    stroke: ${ui.color.primary(45)} !important;
    fill: ${ui.color.primary(45)} !important;
  `,
};

export const IconTitle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: 36rem;

  div {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 0;
      margin: 0;
      margin-bottom: 0.25rem;
      text-align: left;
    }

    p {
      padding: 0;
      margin: 0;
    }
  }
`;

export const ArrowList = css`
  position: relative;
  list-style: none;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 1.5em;
  font-size: 1.25rem;

  li:before {
    content: "⇢";
    position: absolute;
    left: 0;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: ${tokens.color.gray(75)};
    font-family: Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  li {
    margin-bottom: 0.25rem;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0.5rem 0;

  a,
  button {
    margin: 0.25rem 0 !important;
    margin-right: 0.5rem !important;
  }
`;

export const Showcase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  max-width: ${ui.layout.breakpoint};
  margin: 0 auto;
  padding: 0 1rem;

  > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const ParagraphTagline = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 1.5rem !important;
  font-weight: 700;
  color: ${ui.color.neutral(85)};
  text-decoration: underline;
  margin-bottom: 0.25rem;

  span {
    color: ${ui.color.neutral(15)};
    font-weight: 600;
  }
`;

export const Space = styled.hr`
  display: block;
  height: 2.5vw;
  border: 0;
  margin: 0;
  padding: 0;
`;
