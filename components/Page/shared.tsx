import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Badge } from "../../styles/blame";
import { ui } from "../../styles/prism";
import Button from "../Button";

export const JoinUsBanner = () => {
  const style = {
    JoinUsBanner: css`
      padding: 1.5rem;
      border-radius: 1.5rem;
      background-color: ${ui.color.primary(48)};
    `,
    wrapper: css`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0 auto;
      max-width: 30rem;

      * {
        margin: 0;
      }
    `,
    icon: css`
      color: ${ui.color.primary(90)};
      display: flex;
      justify-content: center;
    `,
    title: css`
      color: #ffffff;
      font-weight: 700;
      font-size: 1.85rem;
    `,
    message: css`
      color: #ffffff;
      font-weight: 450;
      text-align: center;

      font-size: 1.35rem;
    `,
    buttons: css`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;

      a {
        justify-content: center;
        padding: 0.5rem 2rem;
        background-color: ${ui.color.primary(90)} !important;
        border-bottom-color: ${ui.color.primary(75)} !important;
        color: ${ui.color.primary(30)} !important;

        &:hover,
        &:focus {
          background-color: ${ui.color.primary(95)} !important;
          border-bottom-color: ${ui.color.primary(80)} !important;
          color: ${ui.color.primary(35)} !important;
        }
      }
    `,
  };

  return (
    <article css={style.JoinUsBanner}>
      <div css={style.wrapper}>
        <div css={style.icon}>
          <Icon icon="icon-park-twotone:yep" width={64} height={64} />
        </div>
        <h3 css={style.title}>world needs you.</h3>
        <p css={style.message}>
          are you passionate at your craft?&nbsp;
          <b>dorkodu</b> is the best place for the next generation of work.
        </p>
        <div css={style.buttons}>
          <Button link="/work" type="tonal">
            <span>
              join us<i>!</i>
            </span>
          </Button>
        </div>
      </div>
    </article>
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
