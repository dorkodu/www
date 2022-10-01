import "../styles/styles.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

function Website({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Website;
