import { Loader } from "@mantine/core";

import { CSSProperties } from "react";
import { useDelay } from "../hooks";

const center = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
} satisfies CSSProperties;

export default function CenterLoader() {
  const delay = useDelay();
  if (delay) return null;

  return <Loader variant="dots" color="green" style={center} />;
}
