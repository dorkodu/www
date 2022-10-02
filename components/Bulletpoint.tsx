import { Icon } from "@iconify-icon/react";
import styled from "@emotion/styled";
import { tokens, ui } from "../styles/prism";

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

  .icon {
    width: 2rem;
    height: 2rem;
  }
`;

const Content = styled.div`
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  * {
    padding: 0 !important;
    margin: 0 !important;
    text-align: left;
  }
`;

interface Props {
  icon: string;
  children: React.ReactNode;
}

export default function Bulletpoint({ icon, children }: Props) {
  return (
    <Root>
      <Emoji>
        <Icon icon={icon} />
      </Emoji>
      <Content>{children}</Content>
    </Root>
  );
}
