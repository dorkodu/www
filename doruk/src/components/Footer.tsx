import { Anchor, Container, Divider, Group, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Container size={960} my="xl">
        <Divider />
        <Group maw={960} position="apart" mx={"auto"} p={10}>
          <Nav
            links={[
              { text: "Home", url: "/" },
              { text: "Portfolio", url: "/portfolio" },
              { text: "Story", url: "/story" },
              { text: "Notes", url: "/notes" },
            ]}
          />

          <Text weight={400} color="dimmed">
            &copy; {new Date().getFullYear()}
            &nbsp;
            <Text
              span
              weight={700}
              sx={($) => ({
                color: $.colorScheme == "dark" ? $.white : $.black,
              })}>
              Doruk Eray
            </Text>
          </Text>
        </Group>
      </Container>
    </footer>
  );
}

const Nav = ({ links }: { links: { url: string; text: string }[] }) => {
  const navigate = useNavigate();

  return (
    <Group position="left">
      {links.map((link) => (
        <Anchor<"div">
          key={link.text}
          onClick={() => navigate(link.url)}
          color="dimmed">
          {link.text}
        </Anchor>
      ))}
    </Group>
  );
};
