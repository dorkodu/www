import { css } from "@emotion/react";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import { ui } from "../styles/prism";
import { TeamMember } from "../types/dorkodu";

interface MemberProps {
  member: TeamMember;
  children?: React.ReactNode;
}

const Member: FunctionComponent<MemberProps> = ({ member, children }) => {
  return (
    <div css={style.root}>
      <div css={style.container}>
        {member.avatar && (
          <img css={style.avatar} src={member.avatar} alt={member.name} />
        )}
        <div css={style.info}>
          {member.icons && (
            <div css={style.icons}>
              {member.icons.map((icon, index) => (
                <Icon icon={icon} width={32} height={32} key={index} />
              ))}
            </div>
          )}
          {member.name && <p css={style.name}>{member.name}</p>}
          {member.title && <p css={style.title}>{member.title}</p>}
          {member.about && <p css={style.about}>{member.about}</p>}
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
    color: ${ui.color.neutral(65)};
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
