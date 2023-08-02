import { Anchor, Container, Group, Title } from "@mantine/core";
import { FunctionComponent } from "react";

const WebsiteLayout: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default WebsiteLayout;

const Header = () => (
  <Container>
    <Title>Doruk Eray</Title>
    <Nav />
  </Container>
);

const Nav = (links: [string, string][]) => (
  <Group>
    {links.map((link) => (
      <Anchor<"a">>{link[</Anchor>
    ))}
  </Group>
);
