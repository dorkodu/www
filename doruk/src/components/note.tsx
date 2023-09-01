import {
  Card,
  Group,
  Badge,
  Text,
  ThemeIcon,
  Box,
  Container,
  Divider,
  Anchor,
} from "@mantine/core";
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
  author: IAuthor;
}

export interface IAuthor {
  name: string;
  username: string;
  imageURL: string;
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
            color="green"
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

export function NotePage({ note }: { note: INote }) {
  return (
    <Container size={768} px={0}>
      <Text
        component="h1"
        weight={750}
        size={26}
        sx={{ letterSpacing: -0.25 }}
        my={2}>
        {note.title}
      </Text>

      <Text
        component="h2"
        weight={400}
        size={18}
        sx={{ letterSpacing: -0.1, margin: 0 }}>
        {note.description}
      </Text>

      <Anchor color="blue" title={note.title + " - " + note.author.name}>
        <Text weight={450} size={16} mt={8}>
          <b>{note.author.username}</b>/{note.slug}
        </Text>
      </Anchor>

      <Group mt={8} spacing={10}>
        <Text color="dimmed" size="md">
          {note.publishedAt.toLocaleDateString("en-US", {
            dateStyle: "long",
          })}
        </Text>

        <Group spacing={4}>
          {note.tags.map((tag) => (
            <Badge
              key={tag}
              color="green"
              size="md"
              radius={8}
              variant="light"
              sx={{
                textDecoration: "none",
                ":hover": { cursor: "pointer", textDecoration: "" },
              }}>
              {tag}
            </Badge>
          ))}
        </Group>
      </Group>

      <Divider my={10} />

      <Box my={25}>{note.content}</Box>
    </Container>
  );
}
