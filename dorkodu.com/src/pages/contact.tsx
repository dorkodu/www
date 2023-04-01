import Meta from "@/components/Meta";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { NextPage } from "next";
import Head from "next/head";

const meta = {
  title: `Contact Us — Dorkodu`,
  description: `Let's have a talk!`,
  keywords: `contact us, contact, dorkodu`,
  url: "/contact",
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
