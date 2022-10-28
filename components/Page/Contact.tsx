import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import { ui } from "../../styles/prism";
import CardDeck from "../CardDeck";
import { ContactItem } from "../_shared";

const Contact: FunctionComponent = () => {
  return (
    <article css={style.Contact}>
      <div css={style.IconTitle}>
        <Icon
          icon="fluent-emoji-flat:call-me-hand-light"
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

const style = {
  Contact: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  `,
  IconTitle: css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem auto;
    padding: 0 1rem;

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
