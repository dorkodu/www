import { css } from "@emotion/react";
import Link from "next/link";
import { ui } from "../styles/prism";
import Button from "./Button";

export const JoinUsBanner = () => (
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
