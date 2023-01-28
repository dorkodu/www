import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import { tokens } from "../styles/prism";

interface DescriptiveItemProps {
  title: string;
  description: string;
  badge?: React.ReactNode;
  children?: React.ReactNode;
}

const DescriptiveItem: FunctionComponent<DescriptiveItemProps> = ({
  title,
  description,
  badge,
  children,
}) => {
  return (
    <DItem>
      {badge && <Badge>{badge}</Badge>}
      <dt>{title}</dt>
      <dd>{description}</dd>
      {children}
    </DItem>
  );
};

export default DescriptiveItem;

const Badge = styled.div`
  display: inline-block !important;
`;

const DItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  dt {
    font-weight: 700;
    font-size: 1.25rem !important;
    line-height: 1.5rem;
    color: ${tokens.color.gray(10)};

    .--bulletpoint {
      color: ${tokens.color.gray(70)};
    }
  }

  dd {
    color: ${tokens.color.gray(20)};
    font-weight: 400;
    padding-top: 0.25rem;
    line-height: 1.25;
    font-size: 1.15rem;
  }
`;
