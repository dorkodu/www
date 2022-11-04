import { Theme } from "@emotion/react";
import styled, { Interpolation } from "@emotion/styled";
import { tokens, ui } from "../styles/prism";

interface Props {
  type?: string;
  link: string;
  children?: React.ReactNode;
}

export default function Button({ type, link, children }: Props) {
  let zort = type ? "--" + type : "";

  return (
    <TheButton className={zort} href={link}>
      {children}
    </TheButton>
  );
}

const TheButton = styled.a`
  display: inline-flex;
  padding: 0.5rem 1.5rem;
  border-radius: 1.25rem;
  line-height: 130%;
  font-size: 1.36rem;
  font-weight: 700;
  background-color: ${ui.color.neutral(80)};
  color: ${ui.color.neutral(40)};
  border-bottom: 0.25rem solid ${ui.color.neutral(75)};
  cursor: pointer;
  text-decoration: none !important;

  &:hover,
  &:focus {
    background-color: ${ui.color.neutral(90)};
    border-bottom-color: ${ui.color.neutral(85)};
    color: ${ui.color.neutral(50)};
  }

  //? Primary Button
  &.--fill {
    background-color: ${ui.color.primary(48)};
    color: ${ui.color.primary(100)};
    border-bottom-color: ${ui.color.primary(40)};

    &:hover,
    &:focus {
      background-color: ${ui.color.primary(55)};
      border-bottom-color: ${ui.color.primary(45)};
    }
  }

  //? Secondary Button
  &.--tonal {
    background-color: ${ui.color.primary(80)};
    color: ${ui.color.primary(30)};
    border-bottom-color: ${ui.color.primary(70)};

    &:hover,
    &:focus {
      color: ${ui.color.primary(40)};
      background-color: ${ui.color.primary(85)};
      border-bottom-color: ${ui.color.primary(75)};
    }
  }

  //? Outlined Button
  &.--outline {
    background-color: unset;
    padding: 0.3rem 1.4rem;
    border: 0.25rem solid ${ui.color.primary(70)} !important;
    color: ${ui.color.primary(40)};

    &:hover,
    &:focus {
      color: ${ui.color.primary(30)};
      border-color: ${ui.color.primary(60)};
      background-color: ${ui.color.primary(90)};
    }
  }

  //? Text-only Button
  &.--text {
    background-color: unset;
    color: ${ui.color.primary(40)};

    &:hover,
    &:focus {
      color: ${ui.color.primary(60)};
    }
  }
`;
