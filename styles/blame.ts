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

export const Badge = styled.div`
  padding: 0.5rem !important;
  border-radius: ${ui.layout.curve};
  height: 3rem !important;
  width: 3rem !important;

  background-color: ${ui.color.primary(80)};
  color: ${ui.color.primary(45)};
  stroke-width: 2.25;
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

export const ParagraphTagline = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 1.35rem !important;
  font-weight: 650;
  color: ${tokens.color.gray(60)};
`;
