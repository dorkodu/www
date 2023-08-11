import { Anchor, Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ColorToggleSegment } from "@shared/components/misc/ColorToggle";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const isMobileScreen = useMediaQuery("(max-width: 760px)");

  return (
    <header>
      <Group
        position="apart"
        maw={960}
        p={16}
        mx="auto"
        sx={isMobileScreen ? { flexDirection: "column" } : {}}>
        <Group spacing={10}>
          <Image src="/favicon.png" width={60} height={60} radius={4} />
          <Stack spacing={0}>
            <Text
              weight={800}
              size={28}
              sx={($) => ({
                letterSpacing: -1,
                color: $.colorScheme == "dark" ? $.white : $.black,
              })}>
              Doruk Eray
            </Text>
            <Text weight={600} size={16} color="dimmed">
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

const Nav = ({ links }: { links: { url: string; text: string }[] }) => {
  const navigate = useNavigate();

  return (
    <Group>
      {links.map((link) => (
        <Anchor<"div">
          onClick={() => navigate(link.url)}
          key={link.text}
          color="blue"
          weight={500}>
          {link.text}
        </Anchor>
      ))}
    </Group>
  );
};
