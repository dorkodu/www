import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { ui } from "../styles/prism";

interface MemberProps {
  name?: string;
  title?: string;
  about?: string;
  avatar?: string;
  icons?: React.ReactNode;
  children: React.ReactNode;
}

const Member: FunctionComponent<MemberProps> = ({
  name,
  title,
  about,
  avatar,
  icons,
  children,
}) => {
  return (
    <div css={style.root}>
      <div css={style.container}>
        {avatar && <img css={style.avatar} src={avatar} alt={name} />}
        <div css={style.info}>
          {icons && <div css={style.icons}>{icons}</div>}
          {name && <p css={style.name}>{name}</p>}
          {title && <p css={style.title}>{title}</p>}
          {about && <p css={style.about}>{about}</p>}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Member;

const style = {
  root: css`
    display: flex;
    padding: 1rem;
    justify-content: center;
  `,
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    max-width: 28rem;

    @media (min-width: 640px) {
      text-align: left;
      flex-direction: row;
      justify-content: flex-start;
      gap: 1rem;
      max-width: 36rem;
    }
  `,
  avatar: css`
    object-fit: cover;
    object-position: center;
    align-self: flex-start;
    flex-shrink: 0;
    width: 7.5rem;
    height: 7.5rem;
    border-radius: ${ui.layout.curve};

    @media (min-width: 640px) {
      margin: 0;
    }
  `,
  info: css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    p {
      padding: 0;
      margin: 0;
    }
  `,
  icons: css`
    display: flex;
    color: ${ui.color.neutral(70)};
    margin-bottom: 0.15rem;

    * {
      stroke-width: 3;
    }
  `,
  name: css`
    font-size: 1.35rem;
    font-weight: 700;
  `,
  title: css`
    margin-bottom: 0.1rem !important;
    color: ${ui.color.neutral(60)};
    font-size: 1.25rem;
    font-weight: 600;
  `,
  about: css`
    font-size: 1.15rem;
    line-height: 1.35rem;
    font-weight: 400;
    color: ${ui.color.neutral(20)};
  `,
};
