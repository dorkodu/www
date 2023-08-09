import { MantineTheme, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  defaultGradient: { deg: 60, from: "green", to: "lime" },

  lineHeight: 1.25,

  headings: {
    fontWeight: 600,
    fontFamily: "Rubik",

    sizes: {
      h1: { lineHeight: 1.25, fontWeight: 800 },
      h2: { lineHeight: 1.25, fontWeight: 750 },
      h3: { lineHeight: 1.3, fontWeight: 650 },
      h4: { lineHeight: 1.3, fontWeight: 600 },
      h5: { lineHeight: 1.35, fontWeight: 550 },
      h6: { lineHeight: 1.35, fontWeight: 500 },
    },
  },

  globalStyles: (theme: MantineTheme) => ({
    body: {
      overflowY: "scroll",
      overscrollBehavior: "contain",

      maxWidth: theme.breakpoints.lg,
      margin: "0 auto",
    },

    "@font-face": {
      fontFamily: "sans-serif",
      src: 'local("sans-serif")',
      letterSpacing: "0.6px",
      wordSpacing: "-1.65px",
    },
  }),

  dir: "ltr",
  respectReducedMotion: true,

  primaryColor: "green",
  defaultRadius: "md",
  cursorType: "pointer",
  focusRing: "auto",
  loader: "dots",

  fontFamily: `Rubik, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif`,
  fontFamilyMonospace: `ui-monospace, "JetBrains Mono", "Cascadia Mono", SFMono-Regular, "Segoe UI Mono", "Roboto Mono", Liberation Mono, Courier New, "Ubuntu Mono",  Menlo, Monaco, Consolas, monospace`,
};
