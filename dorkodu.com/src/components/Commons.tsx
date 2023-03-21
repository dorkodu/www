
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
