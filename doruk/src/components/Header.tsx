import { Anchor, Box, Group, Stack, Text, Title } from "@mantine/core";
import { ColorToggleSegment } from "@shared/components/misc/ColorToggle";

export default function Header() {
  return (
    <header>
      <Group position="apart" maw={960} p={16} mx="auto">
        <Group>
          <Stack spacing={0}>
            <Text weight={800} size={32} sx={{ letterSpacing: -1 }}>
              Doruk Eray
            </Text>
            <Text weight={600} size={18} color="dimmed">
              Founder ∗ Polymath ∗ Craftsman
            </Text>
          </Stack>
        </Group>

        <Group spacing="lg">
          <Nav
            links={[
              { text: "Home", url: "/" },
              { text: "Portfolio", url: "/portfolio" },
              { text: "Story", url: "/story" },
              { text: "Notes", url: "/notes" },
            ]}
          />
          <ColorToggleSegment size="xs" />
        </Group>
      </Group>
    </header>
  );
}

const Nav = ({ links }: { links: { url: string; text: string }[] }) => (
  <Group>
    {links.map((link) => (
      <Anchor<"a"> href={link.url} color="blue" weight={500}>
        {link.text}
      </Anchor>
    ))}
  </Group>
);
