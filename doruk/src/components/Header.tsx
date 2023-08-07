import { Anchor, Container, Group, Title } from "@mantine/core";

export default function Header() {
  return (
    <Container>
      <Group>
        <Title>Doruk Eray</Title>
        <Nav
          links={[
            { text: "Home", url: "/" },
            { text: "Portfolio", url: "/portfolio" },
            { text: "Story", url: "/story" },
            { text: "Notes", url: "/notes" },
          ]}
        />
      </Group>
    </Container>
  );
}

const Nav = ({ links }: { links: { url: string; text: string }[] }) => (
  <Group>
    {links.map((link) => (
      <Anchor<"a"> href={link.url}>{link.text}</Anchor>
    ))}
  </Group>
);
