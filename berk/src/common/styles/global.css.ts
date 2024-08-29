import { globalStyle } from "@vanilla-extract/css";

globalStyle(":root", {
  vars: {
    "--mantine-color-text": "var(--mantine-color-bright) !important",
  },
});

globalStyle("html, body, #root", {
  height: "100%",
});

globalStyle("body", {
  overflowY: "scroll",
});
