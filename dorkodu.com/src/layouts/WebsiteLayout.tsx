import { Container } from "@mantine/core";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { FooterWithLinks as Footer } from "../components/Footer";
import { HeaderWithMegaMenu as Header } from "../components/Header";

const WebsiteLayout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer
        data={[
          {
            title: "Company",
            links: [
              {
                label: "About",
                link: "/",
              },
              {
                label: "Work",
                link: "/work",
              },
              {
                label: "Business",
                link: "/business",
              },
              {
                label: "Garden",
                link: "#",
              },
            ],
          },
          {
            title: "Products",
            links: [
              {
                label: "Wander",
                link: "/product/wander",
              },
              {
                label: "Trekie",
                link: "/product/trekie",
              },
              {
                label: "Forum",
                link: "/product/forum",
              },
              {
                label: "ID",
                link: "/product/id",
              },
            ],
          },
          {
            title: "Resources",
            links: [
              {
                label: "Manifesto",
                link: "/manifesto",
              },
              {
                label: "Terms",
                link: "/terms",
              },
              {
                label: "Privacy",
                link: "/privacy",
              },
              {
                label: "Open Source",
                link: "https://github.com/dorkodu",
              },
              {
                label: "Press",
                link: "/press",
              },
              {
                label: "Contact Us",
                link: "/contact-us",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default WebsiteLayout;
