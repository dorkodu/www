import { Emoji } from "@/styles/emoji";
import { Alert, Box, Container, Flex, Group, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const SectionTitle = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => {
  return (
    <Container>
      <Flex gap={15} align="center">
        <Box sx={{ width: 40 }}>{icon}</Box>
        <Box sx={{ width: "100% - 40px" }}>
          <Title
            order={2}
            sx={{
              letterSpacing: -0.75,
            }}
          >
            {title}
          </Title>
          <Text weight={500} color="dimmed" maw={400}>
            {text}
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export const StarDivider = () => {
  const theme = useMantineTheme();

  return (
    <Text
      weight={600}
      size="5rem"
      mr={5}
      mt={"2.5rem"}
      mb={"4rem"}
      color={theme.colorScheme == "dark" ? theme.colors.dark[6] : theme.colors.gray[3]}
      sx={{ userSelect: "none" }}
      align="center"
    >
      ꘏
    </Text>
  );
};

export const StoryCard = ({ icon, text, order }: { icon: React.ReactNode; text: React.ReactNode; order: number }) => {
  const theme = useMantineTheme();

  return (
    <Paper
      shadow="sm"
      withBorder
      p="md"
      m={10}
      sx={{
        backgroundColor: theme.colorScheme == "dark" ? theme.colors.dark[8] : theme.white,
      }}
      radius={10}
    >
      <Group position="apart" mb={8}>
        <Box w={36}>{icon}</Box>
        <Text weight={900} size={30} variant="gradient">
          {order}
        </Text>
      </Group>
      <div>{text}</div>
    </Paper>
  );
};

export const punctuation = ["＊", "⁕", "๛", "⹈", "꘏", "꘎", "⋆", "⭑", "☸"];

export const Showcase = ({
  content,
  noCenter = false,
}: {
  noCenter?: boolean;
  content: [React.ReactNode, React.ReactNode];
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 720px)");

  return (
    <Container py={40} px={0}>
      <Flex
        direction={isSmallScreen ? "column" : "row"}
        align={noCenter ? "flex-start" : "center"}
        justify={noCenter ? "flex-start" : "center"}
        gap={20}
      >
        <div style={{ flex: 1 }}>{content[0]}</div>
        <div style={{ flex: 1 }}>{content[1]}</div>
      </Flex>
    </Container>
  );
};

export const WIP = () => (
  <Container size={600} my={50}>
    <Paper
      radius={10}
      sx={($) => ({
        backgroundColor: $.colors.orange[2],
        padding: 12,
      })}
    >
      <Group noWrap>
        <Emoji size={40} emoji={SadEmoji} />
        <div>
          <Title
            order={3}
            sx={($) => ({
              color: $.colors.yellow[7],
            })}
          >
            Oops!
          </Title>
          <Text color="dark">This page is currently not available.</Text>
        </div>
      </Group>
    </Paper>
  </Container>
);

const SadEmoji = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <g fill="none">
      <path
        fill="#FFB02E"
        d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
      ></path>
      <path
        fill="#fff"
        d="M10.42 19.224a4.206 4.206 0 1 0 0-8.411a4.206 4.206 0 0 0 0 8.411Zm11.148.077a4.244 4.244 0 1 0 0-8.489a4.244 4.244 0 0 0 0 8.49Z"
      ></path>
      <path
        fill="#402A32"
        d="M6.974 10.658c.144-.43.502-1.108 1.095-1.67C8.654 8.433 9.452 8 10.5 8a.5.5 0 0 0 0-1c-1.351 0-2.386.567-3.118 1.262c-.724.688-1.166 1.51-1.355 2.08a.5.5 0 1 0 .948.316Zm6.733 13.049c.28-.28 1.007-.707 2.293-.707c1.227 0 2.018.433 2.293.707a1 1 0 0 0 1.414-1.414C18.981 21.567 17.639 21 16 21c-1.714 0-2.986.572-3.707 1.293a1 1 0 0 0 1.414 1.414ZM23.93 8.988c.593.562.952 1.24 1.096 1.67a.5.5 0 1 0 .948-.316c-.19-.57-.631-1.392-1.355-2.08C23.887 7.567 22.852 7 21.5 7a.5.5 0 1 0 0 1c1.049 0 1.847.433 2.432.988ZM14 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm10 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
      ></path>
      <path fill="#3F5FFF" d="M6 21a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0v-3Z"></path>
    </g>
  </svg>
);
