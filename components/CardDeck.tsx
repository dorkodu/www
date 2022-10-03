import styled from "@emotion/styled";
import { tokens, ui } from "../styles/prism";

interface Props {
  columns?: number;
  children: React.ReactNode;
}

export default function Card({ columns, children }: Props) {
  const attrs = columns ? " --" + columns : "";

  return <Deck className={attrs}>{children}</Deck>;
}

const Deck = styled.div`
  display: grid;
  padding: 1rem;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-gap: 1rem 1rem;
  grid-auto-rows: minmax(4rem, auto);
  grid-template-columns: 1fr;
  max-width: 76rem;
  margin: 0 auto;

  > .Card {
    max-width: 28rem;
    margin: 0 auto;
  }

  > .Picture {
    padding: 0 !important;
    margin: 0 !important;
  }

  @media (min-width: ${tokens.viewpoint.tablet}) {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;

    &.--2 {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    &.--2 {
      grid-template-columns: 1fr 1fr;
    }

    &.--3 {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
