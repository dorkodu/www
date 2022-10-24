import styled from "@emotion/styled";
import { tokens, ui } from "../styles/prism";

interface Props {
  tag?: string;
  title?: string;
  message?: string;
  head?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Card({ tag, title, message, head, children }: Props) {
  return (
    <Root>
      <div>
        {head}
        {tag && <Tag>{tag}</Tag>}
      </div>
      {title && <Title>{title}</Title>}
      {message && <p>{message}</p>}
      {children}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: ${ui.color.neutral(100)};
  border: 0.25rem solid ${ui.color.neutral(95)};
  padding: 0.75rem 1rem 1rem;
  border-radius: ${ui.layout.curve};

  p {
    font-size: 1.15rem !important;
    line-height: 1.4rem !important;
    padding: 0 !important;
    margin: 0 !important;
  }
`;

const Tag = styled.p`
  display: inline-block !important;

  padding: 0.25rem 0.5rem 0.35rem !important;
  border-radius: 0.5rem;
  font-weight: 800;
  font-size: 1.25rem !important;
  background-color: ${ui.color.neutral(90)};
  color: ${ui.color.neutral(60)};
  clear: right;
  margin-bottom: 0.25rem;
`;

const Title = styled.h4`
  font-size: 1.5rem !important;
  line-height: 1.75rem !important;
  font-weight: 700;
  padding: 0 !important;
  margin: 0 !important;
  text-align: left !important;
`;
