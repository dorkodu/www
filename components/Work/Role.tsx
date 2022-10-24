import { css } from "@emotion/react";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import { ui } from "../../styles/prism";
import { WorkRole } from "../../types/dorkodu";

const Role: FunctionComponent<{
  role: WorkRole;
}> = ({ role }) => {
  return (
    <div css={style.root}>
      <div css={style.meta}>
        <h3 css={style.title}>{role.title}</h3>
        <p css={style.domain}>{role.domain}</p>
        <p css={style.tags}>
          {role.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </p>
        <div css={style.legal}>
          <p>
            <Icon
              icon="tabler:map-pin"
              className="icon"
              width={30}
              height={30}
            />
            {role.location}
          </p>
          <p>
            <Icon
              icon="tabler:briefcase"
              className="icon"
              width={30}
              height={30}
            />
            {role.type}
          </p>
        </div>
      </div>
      <div css={style.body}>
        <h4>summary</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: role.summary ?? "",
          }}
        />
        <h4>your role</h4>
        <ul>
          {role.responsibility?.map((responsibility, index) => (
            <li
              key={index}
              //! we need bold and italic markup, only use secure input.
              dangerouslySetInnerHTML={{
                __html: responsibility,
              }}
            />
          ))}
        </ul>
        <h4>our expectations</h4>
        <ul className="requirements">
          {role.requirements?.map((requirement, index) => (
            <li
              key={index}
              //! we need bold and italic markup, only use secure input.
              dangerouslySetInnerHTML={{
                __html: requirement,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Role;

const style = {
  root: css`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    max-width: 36rem;

    div {
      padding: 1rem;
    }

    p {
      margin: 0;
    }
  `,
  meta: css`
    display: flex;
    flex-direction: column;
    background-color: ${ui.color.primary(90)};
    border-bottom: 0.5rem solid ${ui.color.primary(85)};
  `,
  title: css`
    text-align: left;
    font-size: 1.5rem;
    font-weight: 750;
    margin: 0;
    color: ${ui.color.neutral(15)};
  `,
  domain: css`
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
    opacity: 0.5;
    color: ${ui.color.primary(30)};
  `,
  tags: css`
    display: flex;
    gap: 0.5rem;
    margin: 0.5rem 0 0 !important;
    flex-wrap: wrap;

    span {
      padding: 0.25rem 0.75rem;
      background-color: ${ui.color.primary(75)};
      color: ${ui.color.primary(35)};
      font-weight: 500;
      border-radius: 0.75rem;
      font-size: 1rem;
    }
  `,
  body: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 0.25rem solid ${ui.color.neutral(95)};
    border-top: 0;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    h4 {
      padding: 0;
      margin: 0;
      color: ${ui.color.neutral(65)};
      font-size: 1.35rem;
      font-weight: 700;
    }

    p {
      color: ${ui.color.neutral(20)};
      margin-bottom: 1rem;
      font-size: 1.25rem;
      line-height: 1.4;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      position: relative;
      list-style: none;
      padding-left: 1.5em;
      font-size: 1.25rem;
      margin-left: 0 !important;

      li:before {
        content: "↪";
        position: absolute;
        left: 0;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 1;
        color: ${ui.color.secondary(60)};
      }

      &.requirements li:before {
        content: "+";
        color: ${ui.color.primary(55)};
      }

      li {
        font-size: 1.15rem;
        line-height: 1.25;
      }
    }
  `,
  legal: css`
    display: flex;
    column-gap: 1rem;
    row-gap: 0.25rem;
    padding: 0 !important;
    margin-top: 1rem;
    flex-wrap: wrap;

    p {
      display: flex;
      gap: 0.35rem;
      align-items: center;
      font-size: 1.15rem;
      font-weight: 550;
      color: ${ui.color.primary(15)};
      opacity: 0.8;

      .icon {
        color: ${ui.color.primary(40)};
        opacity: 0.75;
      }
    }
  `,
};
