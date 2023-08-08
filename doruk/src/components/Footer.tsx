import { Anchor, Container, Group, Text, Title } from "@mantine/core";

export default function Footer() {
  return (
    <Group>
      <Text>Doruk Eray</Text>
      <Nav links={[]} />
    </Group>
  );
}

const Nav = ({ links }: { links: { url: string; text: string }[] }) => (
  <Group>
    {links.map((link) => (
      <Anchor<"a"> href={link.url} key={link.text}>
        {link.text}
      </Anchor>
    ))}
  </Group>
);
