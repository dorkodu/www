import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import { ui } from "../../styles/prism";
import CardDeck from "../CardDeck";

const Contact: FunctionComponent = () => {
  return (
    <article css={style.Contact}>
      <div css={style.IconTitle}>
        <Icon
          icon="fluent-emoji-flat:call-me-hand-light"
          css={style.IconItem.icon}
          width={40}
          height={40}
        />
        <div>
          <h3>contact</h3>
          <p>want a talk? reach out.</p>
        </div>
      </div>

      <CardDeck columns={2}>
        <ContactItem
          {...{
            icon: "tabler:brand-twitter",
            link: "https://twitter.com/dorkodu",
            type: "twitter",
            address: "@dorkodu",
            description: "(news)",
          }}
        />
        <ContactItem
          {...{
            icon: "tabler:brand-github",
            link: "https://github.com/dorkodu",
            type: "github",
            address: "@dorkodu",
            description: "(open source)",
          }}
        />
        <ContactItem
          {...{
            icon: "tabler:brand-instagram",
            link: "https://instagram.com/d0rukeray",
            type: "instagram",
            address: "@dorkodu",
            description: "(social)",
          }}
        />
        <ContactItem
          {...{
            icon: "tabler:mail-opened",
            link: "mailto:hey@dorkodu.com",
            type: "email",
            address: "hey@dorkodu.com",
            description: "(formal)",
          }}
        />
      </CardDeck>
    </article>
  );
};

export default Contact;

const ContactItem: FunctionComponent<{
  icon: string;
  link: string;
  type: string;
  address: string;
  description?: string;
}> = ({ icon, link, type, address, description }) => {
  return (
    <div css={style.IconItem.self}>
      <Icon icon={icon} css={style.IconItem.icon} width={40} height={40} />
      <div css={style.IconItem.body}>
        <span css={style.IconItem.link}>
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

const style = {
  Contact: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  `,
  IconItem: {
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
  },
  IconTitle: css`
    display: inline-flex;
    gap: 1rem;
    margin: 1rem auto;
    padding: 0 1rem;

    .icon {
    }

    div {
      h3 {
        padding: 0;
        margin: 0;
        text-align: left;
      }

      p {
        padding: 0;
        margin: 0;
      }
    }
  `,
};
