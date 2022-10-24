import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { FunctionComponent } from "react";
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

export const ContactItem: FunctionComponent<{
  icon: string;
  link: string;
  type: string;
  address: string;
  description?: string;
}> = ({ icon, link, type, address, description }) => {
  const style = {
    self: css`
      display: flex;
      max-width: 250px;
      gap: 1rem;
      font-size: 1.25rem;
    `,
    icon: css`
      color: ${ui.color.neutral(75)};
    `,
    link: css`
      font-weight: 600;
      font-size: 1.35rem;

      a {
        color: ${ui.color.secondary(50)} !important;
        text-decoration: underline;
        padding-bottom: 0.25rem;

        &:hover {
          color: ${ui.color.secondary(65)} !important;
        }
      }
    `,
    body: css`
      span {
        display: block;
        line-height: 1.25;
      }
    `,
  };

  return (
    <div css={style.self}>
      <Icon icon={icon} css={style.icon} width={40} height={40} />
      <div css={style.body}>
        <span css={style.link}>
          <a href={link}>{type}</a>
        </span>
        <span style={{ lineHeight: 1.3 }}>
          <b>{address}</b>
          <br />
          {description}
        </span>
      </div>
    </div>
  );
};

export const SectionRuler = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.25rem dashed ${ui.color.neutral(90)};
`;
