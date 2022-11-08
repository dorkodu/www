import { Icon } from "@iconify-icon/react";
import styled from "@emotion/styled";
import { tokens, ui } from "../styles/prism";
import { FunctionComponent } from "react";

interface BulletpointProps {
  icon: string;
  children: React.ReactNode;
}

const Bulletpoint: FunctionComponent<BulletpointProps> = ({
  icon,
  children,
}) => {
  return (
    <Root>
      <Emoji>
        <Icon icon={icon} width={36} height={36} />
      </Emoji>
      <Content>{children}</Content>
    </Root>
  );
};

export default Bulletpoint;

const Root = styled.div`
  display: flex;
  margin: 1.5rem 0.5rem;
  gap: 1rem;
`;

const Emoji = styled.span`
  font-size: 2rem !important;
  height: auto !important;
  width: auto !important;
  overflow: visible;
`;

const Content = styled.div`
  width: calc(100% - 4rem);

  > * {
    text-align: left;
  }
`;
