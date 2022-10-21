import styled from "@emotion/styled";
import { tokens } from "../styles/prism";

interface Props {
  time?: string;
  title: string;
  location?: string;
  description: string;
  children?: React.ReactNode;
}

export default function DetailItem({
  time,
  title,
  location,
  description,
}: Props) {
  return (
    <DItem>
      {time && <Time>{time}</Time>}
      <p>
        <Title>{title}</Title>
        {location && <Location>{location}</Location>}
      </p>
      <p>{description}</p>
    </DItem>
  );
}

const DItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0.5rem 0 !important;

  p {
    font-size: 1.05rem;
    margin: 0;
  }
`;

const Time = styled.div`
  font-weight: 600;
  color: ${tokens.color.gray(70)};
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  margin-right: 1rem;
`;

const Location = styled.span`
  font-weight: 500;
  color: ${tokens.color.gray(60)};
`;
