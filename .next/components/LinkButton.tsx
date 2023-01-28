import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import { tokens } from "../styles/prism";

interface LinkButtonProps {
  action: string;
  title: string;
  link: string;
}

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  action,
  title,
  link,
}) => {
  return (
    <Root href={link}>
      <Action>{action}</Action>
      <Title>{title}</Title>
    </Root>
  );
};

export default LinkButton;

const Title = styled.p`
  display: block;
  font-size: 1.35rem;
  line-height: 1.75rem;
  padding: 0;
  font-weight: 700;
  color: ${tokens.color.gray(10)} !important;
  margin: 0;
`;

const Action = styled.span`
  display: block;
  color: ${tokens.color.gray(65)} !important;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
`;

const Root = styled.a`
  display: inline-block;
  margin: 0.5rem 0;
  margin-right: 0.5rem;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  border-radius: 0.75rem;
  border: 0.25em solid ${tokens.color.gray(90)};
  min-width: 12.5rem;
  text-align: left;
  color: ${tokens.color.gray(70)} !important;

  &:hover,
  &:focus {
    border-color: ${tokens.color.gray(80)} !important;
    text-decoration: underline;

    ${Action} {
      color: ${tokens.color.gray(60)} !important;
    }
  }
`;
