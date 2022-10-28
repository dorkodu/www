import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { ui } from "../styles/prism";

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
      <Icon
        icon="fluent-emoji-flat:raised-fist-medium-light"
        width={48}
        height={48}
      />
      <h3>world needs you.</h3>
      <p>
        dorkodu is the best place for the next generation of work.&nbsp;
        <b>set the stage on fire! 🔥</b>
      </p>
      <Link href="/work">
        <span>join us!</span>
      </Link>
    </div>
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
