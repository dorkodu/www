import Meta from "@/components/Meta";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { Emoji, PottedPlant } from "@/styles/twemoji";
import { Badge, Container, Group, Paper, Text, Title } from "@mantine/core";
import Head from "next/head";

const meta = {
  title: `Our Products — Dorkodu`,
  description: ``,
  keywords: `dorkodu products, dorkodu apps`,
  url: "/products",
};

const Page = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>
      <Hero />
    </WebsiteLayout>
  );
};

export default Page;
