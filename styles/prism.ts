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
    orange: 35,
    yellow: 50,
    green: 130,
    mint: 160,
    cyan: 200,
    blue: 210,
    indigo: 240,
    purple: 270,
    pink: 330,
    gray: 210,
  },
  baseSaturation: 70, // generate color based on this (default)
};

const layout = {
  breakpoint: "64rem",
  curve: "1rem",
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

const tokens = { typescale, color: colors, viewpoint, layout };

export { tokens, color };
