const reference = {
  typescale: {
    font: "Rubik",
    baseSize: "16px",
    baseLineHeight: 1,
    headingLineHeight: 1.25,
  },
  color: {
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
  },
};

const hsl = (hue: number, saturation: number, light: number) => {
  return `hsl(${hue}, ${saturation}%, ${light}%)`;
};

const system = {
  layout: {
    breakpoint: "64rem",
    curve: "1rem",
  },
  typescale: {
    headline: {
      font: "Rubik",
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
      size: reference.typescale.baseSize,
    },
  },
  viewpoint: {
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
    },
    "4K": "2560px",
  },
  color: {
    primary: (tone: number) =>
      hsl(reference.color.hue.green, reference.color.baseSaturation, tone),
    secondary: (tone: number) =>
      hsl(reference.color.hue.blue, reference.color.baseSaturation, tone),
    neutral: (tone: number) =>
      hsl(reference.color.hue.gray, reference.color.baseSaturation, tone),
    error: (tone: number) =>
      hsl(reference.color.hue.red, reference.color.baseSaturation, tone),
  },
};

export { reference, system, hsl };
