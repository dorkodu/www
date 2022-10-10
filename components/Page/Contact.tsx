import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import CardDeck from "../CardDeck";

const Contact: FunctionComponent = () => {
  return (
    <article>
      <h3
        css={css`
          margin-bottom: 0.5rem;
        `}
      >
        <Icon
          icon="fluent-emoji-flat:call-me-hand-light"
          width={36}
          height={36}
        />
        contact
      </h3>
      <p
        css={css`
          margin: 0;
          margin-bottom: 1rem;
          text-align: center;
        `}
      >
        wanna reach out? wave a hand!
      </p>
      <CardDeck columns={2}>
        <IconItem>
          <Icon icon="tabler:brand-twitter" />
          <div>
            <span>
              <a href="https://twitter.com/dorkodu">twitter</a>
            </span>
            <span>
              <b>@dorkodu</b>
              <br />
              (news)
            </span>
          </div>
        </IconItem>
        <IconItem>
          <Icon icon="tabler:brand-github" />
          <div>
            <span>
              <a href="https://github.com/dorkodu">github</a>
            </span>
            <span>
              <b>@dorkodu</b>
              <br />
              (open source)
            </span>
          </div>
        </IconItem>
        <IconItem>
          <Icon icon="tabler:brand-instagram" />
          <div>
            <span>
              <a href="https://instagram.com/d0rukeray">instagram</a>
            </span>
            <span>
              <b>@dorkodu</b>
              <br />
              (social)
            </span>
          </div>
        </IconItem>
        <IconItem>
          <Icon icon="tabler:mail-opened" />
          <div>
            <span>
              <a href="mailto:doruk@dorkodu.com">email</a>
            </span>
            <span>
              <b>hey@dorkodu.com</b>
              <br />
              (officials)
            </span>
          </div>
        </IconItem>
      </CardDeck>
    </article>
  );
};

export default Contact;

const IconItem = styled.div``;
