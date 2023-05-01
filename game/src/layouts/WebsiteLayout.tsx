import { Container } from "@mantine/core";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FunctionComponent } from "react";

const WebsiteLayout: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header
        links={[
          {
            link: "/about",
            label: "Features",
          },
          {
            link: "/pricing",
            label: "Pricing",
          },
          {
            link: "/learn",
            label: "Learn",
          },
          {
            link: "/community",
            label: "Community",
          },
        ]}
      />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer
        links={[
          {
            link: "/about",
            label: "Features",
          },
          {
            link: "/pricing",
            label: "Pricing",
          },
          {
            link: "/learn",
            label: "Learn",
          },
          {
            link: "/community",
            label: "Community",
          },
        ]}
      />
    </>
  );
};

export default WebsiteLayout;
