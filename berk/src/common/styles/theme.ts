import { Modal, createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
  primaryColor: "green",
  defaultRadius: "md",
  cursorType: "pointer",
  breakpoints: {
    xs: "36rem",
    sm: "48rem",
    md: "62rem",
    lg: "75rem",
    xl: "88rem",
  },

  fontFamily:
    "Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",

  components: {
    Modal: Modal.extend({
      defaultProps: {
        lockScroll: false,
        transitionProps: { transition: "pop" },
      },
    }),
  },
});

export const vanilla = themeToVars(theme);
