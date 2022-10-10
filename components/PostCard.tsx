import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import { tokens } from "../styles/prism";

interface PostCardProps {
  token: string;
  value: string;
  tag: string;
  title: string;
  content: string;
  person: {
    name: string;
    avatar: string;
    role?: string;
  };
}

const PostCard: FunctionComponent<PostCardProps> = ({
  token,
  value,
  tag,
  title,
  content,
  person,
}) => {
  return (
    <div css={style.root}>
      <div css={style.container}>
        <div css={style.badge.__}>
          <span css={style.badge.token}>{token}</span>
          <span css={style.badge.divider}></span>
          <span css={style.badge.value}>{value}</span>
        </div>
        <div css={style.main}>
          {tag && (
            <div>
              <h2 css={style.tag}>{tag}</h2>
            </div>
          )}
          <h1 css={style.title}>{title}</h1>
          <p css={style.content}>{content}</p>
          <a css={style.person.__}>
            <img alt="blog" src={person.avatar} css={style.person.avatar} />
            <span css={style.person.about}>
              <span css={style.person.name}>{person.name}</span>
              <span css={style.person.role}>{person.role}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

const style = {
  root: css`
    padding: 2rem 1rem;
    max-width: 32rem;
  `,
  container: css`
    display: flex;
    align-items: flex-start;
    height: 100%;
  `,
  badge: {
    __: css`
      display: flex;
      line-height: 1;
      text-align: center;
      flex-direction: column;
      flex-shrink: 0;
      width: 3rem;
      gap: 0.75rem;
    `,
    token: css`
      color: ${tokens.color.gray(60)};
      font-weight: 600;
      font-size: 1.15rem;
      line-height: 1.15rem;
    `,
    divider: css`
      display: block;
      width: 3rem;
      height: 0.25rem;
      background-color: ${tokens.color.gray(90)};
      border-radius: 0.25rem;
    `,
    value: css`
      color: #1f2937;
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 700;
      line-height: 1;
    `,
  },
  main: css`
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
    flex-grow: 1;
    gap: 0.5rem;
  `,
  tag: css`
    display: inline-block;
    margin: 0;
    padding: 0.25rem 0.5rem;
    border-radius: 0.4rem;
    color: ${tokens.color.green(40)};
    background-color: ${tokens.color.green(90)};
    font-size: 1.15rem;
    font-weight: 750;
    letter-spacing: 0.025rem;
    text-align: left;
  `,
  title: css`
    margin: 0 !important;
    color: ${tokens.color.gray(10)};
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 700;
    text-align: left;
    padding: 0;
  `,
  content: css`
    margin: 0 !important;
    padding: 0 !important;
    text-align: left;
    font-size: 1.15rem;
  `,
  person: {
    __: css`
      display: inline-flex;
      align-items: center;
      padding: 0;
      margin: 0;
      margin-top: 0.25rem;
    `,
    avatar: css`
      object-fit: cover;
      object-position: center;
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      border-radius: 9999px;
    `,
    about: css`
      display: flex;
      padding-left: 0.75rem;
      flex-direction: column;
      flex-grow: 1;
    `,
    name: css`
      color: ${tokens.color.gray(40)};
      font-size: 1.15rem;
      font-weight: 700;
    `,
    role: css`
      color: ${tokens.color.gray(70)};
      font-size: 1rem;
      font-weight: 600;
    `,
  },
};
