import Meta from "@/components/Meta";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Head from "next/head";

const meta = {
  title: "",
  description: ``,
  keywords: ``,
  url: "/",
};

const Page: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
    </WebsiteLayout>
  );
};

export default Page;
