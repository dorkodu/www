import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import { IconTitle } from "../../styles/elements";
import { ui } from "../../styles/prism";
import CardDeck from "../CardDeck";
import { ContactItem } from "./shared";

const Contact: FunctionComponent = () => {
  return (
    <article css={style.Contact}>
      <div css={IconTitle}>
        <Icon icon="twemoji:postbox" width={48} height={48} />
        <div>
          <h4>contact us</h4>
          <p>
            For any question, problem, wish or suggestion; you can reach out via
            the related platform below.
          </p>
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
};
