const typescale = {
  font: "Rubik",
  baseSize: "16px",
  baseLineHeight: 1.25,
  headline: {
    font: "Rubik",
    lineHeight: 1.25,
  },
  display: {
    font: "Rubik",
    weight: "Regular",
    size: "1rem",
    lineHeight: 1.25,
    tracking: 0,
  },
  body: {
    font: "Rubik",
    lineHeight: 1.5,
    tracking: "0.5px",
    weight: 400,
    size: "1rem",
  },
};

const colors = {
  hue: {
    red: 350,
    orange: 25,
    yellow: 45,
    green: 130,
    mint: 160,
    cyan: 190,
    blue: 210,
    indigo: 240,
    purple: 270,
    pink: 330,
    gray: 210,
  },
  baseSaturation: 70, // generate color based on this (default)
  palette: {},
};

const colorPalette = {
  red: (tone: number) => color(colors.hue.red, colors.baseSaturation, tone),
  orange: (tone: number) =>
    color(colors.hue.orange, colors.baseSaturation, tone),
  yellow: (tone: number) =>
    color(colors.hue.yellow, colors.baseSaturation + 15, tone),
  green: (tone: number) => color(colors.hue.green, colors.baseSaturation, tone),
  mint: (tone: number) => color(colors.hue.mint, colors.baseSaturation, tone),
  cyan: (tone: number) => color(colors.hue.cyan, colors.baseSaturation, tone),
  blue: (tone: number) => color(colors.hue.blue, colors.baseSaturation, tone),
  indigo: (tone: number) =>
    color(colors.hue.indigo, colors.baseSaturation, tone),
  purple: (tone: number) =>
    color(colors.hue.purple, colors.baseSaturation, tone),
  pink: (tone: number) => color(colors.hue.pink, colors.baseSaturation, tone),
  gray: (tone: number) => color(colors.hue.gray, 15, tone),
};

const viewpoint = {
  mobile: {
    S: "320px",
    M: "360px",
    L: "400px",
    XL: "640px",
  },
  tablet: "768px",
  desktop: {
    S: "1024px",
    M: "1440px",
    L: "1920px",
    XL: "2560px",
  },
};

const color = (hue: number, saturation: number, light: number) => {
  return `hsl(${hue}, ${saturation}%, ${light}%)`;
};

const tokens = {
  typescale,
  color: { ...colors, ...colorPalette }, //? to enable reusing tokens for hue
  viewpoint,
};

const ui = {
  color: {
    primary: (tone: number) => tokens.color.green(tone),
    secondary: (tone: number) => tokens.color.blue(tone),
    neutral: (tone: number) => tokens.color.gray(tone),
  },
  layout: {
    breakpoint: "64rem",
    curve: "1rem",
  },
};

export { tokens, ui, color };
