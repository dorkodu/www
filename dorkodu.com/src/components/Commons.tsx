export const StarDivider = () => {
  const theme = useMantineTheme();

  return (
    <Text
      weight={600}
      size="5rem"
      my={"2.75vw"}
      mr={5}
      color={theme.colorScheme == "dark" ? theme.colors.dark[6] : theme.colors.gray[3]}
      align="center"
    >
      *****
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
