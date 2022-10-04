import styled from "@emotion/styled";
import { tokens } from "../styles/prism";

export default function SectionRuler() {
  return <Ruler></Ruler>;
}

const Ruler = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.25rem dashed ${tokens.color.gray(90)};
`;
