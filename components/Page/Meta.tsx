import { FunctionComponent } from "react";
import website from "./website";

interface MetaProps {
  title: string;
  url: string;
  description: string;
  keywords: string;
  image?: {
    src: string;
    alt: string;
  };
}

const Meta: FunctionComponent<MetaProps> = ({
  title,
  description,
  url,
  keywords,
  image,
}) => {
  const URL = website.root + url;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5"
      />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta charSet="UTF-8" />

      <meta name="og:type" content="website" />
      <meta name="og:url" content={URL} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={website.twitter.username} />
      <meta name="twitter:url" content={URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {image && (
        <>
          <meta name="twitter:image" content={image.src} />
          <meta name="twitter:image:alt" content={image.alt} />
          <meta name="og:image" content={image.src} />
          <meta name="og:image:alt" content={image.alt} />
        </>
      )}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v=2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png?v=2"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#20df30" />
      <link rel="shortcut icon" href="/favicon.ico?v=2" />
      <meta name="msapplication-TileColor" content="#20df30" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png?v=2" />
      <meta name="msapplication-config" content="/browserconfig.xml?v=2" />
      <meta name="theme-color" content="#20df30" />
    </>
  );
};

export default Meta;
