import { css } from "@emotion/react";
import base from "./base";
import fonts from "./fonts";
import typography from "./typography";
import normalize from "./normalize";

const styles = css`
  ${base};
  ${fonts};
  ${typography};
  ${normalize};
`;

export default styles;
