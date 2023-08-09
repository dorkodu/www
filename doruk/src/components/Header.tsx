import { Anchor, Container, Group, Title } from "@mantine/core";
import { ColorToggleSwitch } from "@shared/components/misc/ColorToggle";

export default function Header() {
  return (
    <Container my={16}>
      <Group position="apart">
        <Title>Doruk Eray</Title>
        <Nav
          links={[
            { text: "Home", url: "/" },
            { text: "Portfolio", url: "/portfolio" },
            { text: "Story", url: "/story" },
            { text: "Notes", url: "/notes" },
          ]}
        />
        <ColorToggleSwitch size="md" />
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
