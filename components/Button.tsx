import styled from "@emotion/styled";
import { tokens, ui } from "../styles/prism";

interface Props {
  type: string;
  link: string;
  children: React.ReactNode;
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
  padding: 0.5rem 1.35rem;
  border: 0 !important;
  border-radius: 1.25rem;
  line-height: 130%;
  font-size: 1.36rem;
  font-weight: 700;
  background-color: ${ui.color.neutral(80)};
  color: ${ui.color.neutral(40)};
  cursor: pointer;
  text-decoration: none !important;

  &:hover,
  &:focus {
    background-color: ${ui.color.neutral(90)};
    color: ${ui.color.neutral(50)};
  }

  //? Primary Button
  &.--fill {
    background-color: ${ui.color.primary(50)};
    color: ${ui.color.primary(100)};

    &:hover,
    &:focus {
      background-color: ${ui.color.primary(60)};
    }
  }

  //? Secondary Button
  &.--tonal {
    background-color: ${ui.color.primary(80)};
    color: ${ui.color.primary(30)};

    &:hover,
    &:focus {
      color: ${ui.color.primary(40)};
      background-color: ${ui.color.primary(90)};
    }
  }

  //? Outlined Button
  &.--outline {
    background-color: unset;
    padding: 0.3rem 1.4rem;
    border: 0.2rem solid ${ui.color.primary(70)} !important;
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
