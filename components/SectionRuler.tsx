import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import { tokens, ui } from "../styles/prism";

const SectionRuler: FunctionComponent = () => {
  return <Ruler></Ruler>;
};

export default SectionRuler;

const Ruler = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.25rem dashed ${ui.color.neutral(90)};
`;
