import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      onPrimary: string;
      primaryContainer: string;
      onPrimaryContainer: string;

      secondary: string;
      onSecondary: string;
      secondaryContainer: string;
      onSecondaryContainer: string;

      error: string;
      onError: string;
      errorContainer: string;
      onErrorContainer: string;

      background: string;
      onBackground: string;

      surface: string;
      onSurface: string;

      surfaceVariant: string;
      onSurfaceVariant: string;

      outline: string;

      inverseOnSurface: string;
      inverseSurface: string;
      inversePrimary: string;

      shadow: string;

      surfaceTint: string;
      surfaceTintColor: string;
    };
  }
}
