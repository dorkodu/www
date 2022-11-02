import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Badge } from "../styles/blame";
import { ui } from "../styles/prism";
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

      border-radius: 2.25rem;
      background-color: ${ui.color.primary(90)};
      border: 0.5rem solid ${ui.color.primary(95)};

      * {
        margin: 0;
      }
    `,
    icon: css``,
    title: css`
      text-align: left;
    `,
    message: css``,
    buttons: css`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      * {
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        justify-content: center;
      }
    `,
  };

  return (
    <div css={style.JoinUsBanner}>
      <div css={style.icon}>
        <Icon
          icon="fa6-solid:earth-americas"
          width={36}
          height={36}
          css={Badge.Flat}
        />
      </div>
      <h3 css={style.title}>world needs you.</h3>
      <p css={style.message}>
        are you passionate about what you do? dorkodu is the best place for the
        next generation of work.
      </p>
      <p>
        <b>vive la révolution! 🔥</b>
      </p>
      <div css={style.buttons}>
        <Button link="/work" type="fill">
          <span>join us</span>
        </Button>
        <Button link="/business" type="tonal">
          <span>invest</span>
        </Button>
      </div>
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
