import { Theme } from "@emotion/react";
import { tokens, color } from "./prism";
import fonts from "./fonts";
import typography from "./typography";

//? @use fonts
//? @use colors
//? @use tokens

export const light: Theme = {
  color: {
    primary: "",
    onPrimary: "",
    primaryContainer: "",
    onPrimaryContainer: "",

    secondary: "",
    onSecondary: "",
    secondaryContainer: "",
    onSecondaryContainer: "",

    error: "",
    onError: "",
    errorContainer: "",
    onErrorContainer: "",

    background: "",
    onBackground: "",

    surface: "",
    onSurface: "",

    surfaceVariant: "",
    onSurfaceVariant: "",

    outline: "",

    inverseOnSurface: "",
    inverseSurface: "",
    inversePrimary: "",

    shadow: "",

    surfaceTint: "",
    surfaceTintColor: "",
  },
};
