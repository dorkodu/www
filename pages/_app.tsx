import styles from "../styles";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Global } from "@emotion/react";

function Website({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={styles} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default Website;
