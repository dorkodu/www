import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import { tokens } from "../styles/prism";

interface QuoteProps {
  message: string;
  owner?: string;
}

const Quote: FunctionComponent<QuoteProps> = ({ message, owner }) => {
  return (
    <Root>
      <Icon icon="" />
      <Message>{message}</Message>
      {owner ?? <Owner>{"— " + owner}</Owner>}
    </Root>
  );
};

export default Quote;

const Message = styled.p`
  display: block;
  padding: 0.5rem 1rem !important;
  margin-bottom: 0;
  font-size: 1.15rem !important;
  line-height: 1.5rem !important;
  font-weight: 600;
  background: none;
  color: ${tokens.color.gray(60)};

  a {
    color: ${tokens.color.gray(30)};
    text-decoration: underline;

    &:hover {
      color: ${tokens.color.gray(10)};
      text-decoration: underline;
    }
  }
`;

const Owner = styled.p`
  font-weight: 700;
  font-size: 1.25rem !important;
  color: ${tokens.color.gray(40)};
`;

const Root = styled.blockquote`
  width: calc(100% - 1rem);
  display: block;
  border-left: 0.5rem solid ${tokens.color.gray(90)};
  border-radius: 3px;
  margin: 1rem auto;
  max-width: 32rem;
  background-color: unset;
  padding: 0;
  overflow: hidden !important;

  > h1,
  > h2,
  > h3,
  > h4,
  > h5 {
    text-align: left !important;
    margin: 0.5rem !important;
    color: ${tokens.color.gray(40)} !important;
  }

  > p {
  }

  > svg {
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 0 0.5rem;
    stroke: ${tokens.color.gray(70)};
  }
`;
