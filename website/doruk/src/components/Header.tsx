import { Anchor, Container, Group, Title } from "@mantine/core";

export default function Header() {
  return (
    <Container>
      <Title>Doruk Eray</Title>
      <Nav links={[]} />
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
