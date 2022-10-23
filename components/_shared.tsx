import { css } from "@emotion/react";
import Link from "next/link";
import { ui, tokens, color } from "../styles/prism";
import Button from "./Button";

export const JoinUsBanner = () => {
  const style = {
    JoinUsBanner: css`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
      max-width: 480px;
      margin: 0 auto;

      background-color: ${ui.color.primary(90)};
      border-radius: 1rem;
      border: 0.25rem dashed ${ui.color.primary(80)};

      * {
        margin: 0;
      }

      h3 {
        text-align: left;
      }

      a {
        border-radius: 1rem;
        padding: 0.5rem 1rem;
        text-align: center;
        font-size: 1.35rem;
        font-weight: 700;
        margin-top: 0.25rem;
        color: ${ui.color.primary(100)};
        background-color: ${ui.color.primary(50)};

        &:hover,
        &:focus {
          background-color: ${ui.color.primary(60)};
        }
      }
    `,
  };

  return (
    <div css={style.JoinUsBanner}>
      <h3>world needs you.</h3>
      <p>dorkodu is the best place for next generation of work.</p>
      <Link href="/work">
        <a>
          <span>join us!</span>
        </a>
      </Link>
    </div>
  );
};

export const DorkoduPunchline = () => {
  const style = {
    title: css`
      text-align: left;
      font-size: 1.9rem;
      line-height: 2.05rem;
      margin: 0;
      color: ${ui.color.neutral(35)};
      font-weight: 650;

      @media (min-width: ${tokens.viewpoint.tablet}) {
        font-size: 2.05rem;
        line-height: 2.1rem;
      }

      span {
        display: block;
      }
    `,
    tuneIn: css`
      font-size: 2.25rem;
      line-height: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.05rem;
      color: ${ui.color.primary(40)};

      background: linear-gradient(
        0deg,
        ${ui.color.primary(40)},
        ${color(110, 75, 65)}
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: ${tokens.viewpoint.tablet}) {
        font-size: 2.95rem;
        line-height: 3rem;
      }
    `,
    turnOn: css`
      font-weight: 750;
      letter-spacing: -0.065rem;
      color: ${ui.color.neutral(75)};
    `,
    dropOut: css`
      font-weight: 700;
      color: ${ui.color.neutral(15)};
      line-height: 1.2;
    `,
  };

  return (
    <h1 css={style.title}>
      <span css={style.turnOn}>we are your</span>
      <span css={style.tuneIn}>dream fulfillment</span>
      <span css={style.dropOut}>technology company.</span>
    </h1>
  );
};
