import { AppProps } from "next/app";
import Head from "next/head";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import theme from "../styles/theme";
import Script from "next/script";

import { Rubik } from "@/styles/fonts";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Dorkodu</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        <meta name="robots" content="notranslate" />
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />

        <style jsx global>{`
          html {
            font-family: ${Rubik.style.fontFamily};
          }
        `}</style>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          ...theme,
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
