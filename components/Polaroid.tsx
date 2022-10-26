import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import { tokens, ui } from "../styles/prism";

interface PolaroidProps {
  source: string | StaticImageData;
  description?: string;
}

const Polaroid: FunctionComponent<PolaroidProps> = ({
  source,
  description,
}) => {
  return (
    <Frame>
      <Image
        src={source}
        alt={description ?? undefined}
        title={description ?? undefined}
      />
      {description && description !== `` && <p>{description}</p>}
    </Frame>
  );
};

export default Polaroid;

const Frame = styled.div`
  display: block;
  text-align: center !important;
  margin: 0 auto !important;

  img {
    border: 0;
    border-radius: ${ui.layout.curve};
    padding: 1rem;
  }

  p {
    font-size: 1.15rem !important;
    margin: 0.5rem;
    text-align: center !important;
    color: ${ui.color.neutral(75)};
    padding: 0 !important;
    font-weight: 500;
  }

  &.--doodle {
    max-width: 90%;
  }

  @media (min-width: ${tokens.viewpoint.mobile.XL}) {
    max-width: 95%;
  }

  @media (min-width: ${tokens.viewpoint.tablet}) {
    max-width: 36rem;
  }
`;
