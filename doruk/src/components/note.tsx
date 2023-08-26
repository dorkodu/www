import { Card, Group, Badge, Text, ThemeIcon, Box } from "@mantine/core";
import { IconNote } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export interface INote {
  id?: number;
  slug?: string;
  content?: React.ReactNode;

  // metadata should always be available
  title: string;
  description: string;
  publishedAt: Date;
  tags: string[];
}

export function NoteCard({ note }: { note: INote }) {
  const navigate = useNavigate();

  return (
    <Card
      withBorder
      shadow="xs"
      component={"a"}
      sx={{ ":hover": { cursor: "pointer", a: {} } }}
      onClick={(e) => {
        e.preventDefault();
        navigate(`/note/${note.slug}`);
      }}
      title={note.title}>
      <Group align="flex-start" position="apart">
        <Box>
          <Text weight={750} size="xl" span>
            {note.title}
          </Text>
          <Text my={6}>{note.description}</Text>
        </Box>
        <ThemeIcon variant="light" color="gray" size={36}>
          <IconNote size={30} />
        </ThemeIcon>
      </Group>

      <Group mt={8} spacing={8} align="center">
        <Text color="dimmed">
          {note.publishedAt.toLocaleDateString("en-US", {
            dateStyle: "long",
          })}
        </Text>

        {note.tags.map((tag) => (
          <Badge
            key={tag}
            color="blue"
            radius={5}
            size="md"
            variant="light"
            sx={{
              textDecoration: "none",
              ":hover": { cursor: "pointer", textDecoration: "" },
            }}>
            {tag}
          </Badge>
        ))}
      </Group>
    </Card>
  );
}
