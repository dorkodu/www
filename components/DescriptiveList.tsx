import styled from "@emotion/styled";
import { FunctionComponent } from "react";

interface DescriptiveListProps {
  icon?: React.ReactNode;
  title?: string;
  message?: string;
  children: React.ReactNode;
}

const DescriptiveList: FunctionComponent<DescriptiveListProps> = ({
  icon,
  title,
  message,
  children,
}) => {
  return (
    <Root>
      {icon}
      {title && <Title>{title}</Title>}
      {message && <Message>{message}</Message>}
      <Contents>{children}</Contents>
    </Root>
  );
};

export default DescriptiveList;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  text-align: left !important;
  padding: 0 !important;
  margin: 0.5rem 0;
`;

const Message = styled.p`
  padding: 0 !important;
  margin: 0.5rem 0 2rem;
  font-size: 1.15rem !important;
`;

const Root = styled.dl`
  padding: 0 1rem;
  max-width: 32rem;
  margin: 0 auto;
`;
