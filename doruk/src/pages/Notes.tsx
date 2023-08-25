import { IStoryElement, StoryElement } from "@/components/story";
import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Image,
  List,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Showcase } from "@shared/components/commons";
import {
  IconBriefcase,
  IconCode,
  IconSchool,
  IconGlobe,
  IconBookmark,
  IconExternalLink,
  IconCalendar,
  IconTag,
} from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page() {
  return (
    <Container>
      <Feed />
    </Container>
  );
}

const Feed = () => {
  interface INote {
    id?: number;
    slug?: string;
    content?: React.ReactNode;

    // metadata should always be available
    title: string;
    description: string;
    publishedAt: Date;
    tags: string[];
  }

  const notes: INote[] = [
    {
      id: 0,
      slug: "hello-world",
      content: `Hello, I just wanted to say hi. A simple word. An open and geniuine bridge to an unknown human-being.`,

      title: "Hello World",
      description: "This is my first note on my website.",
      publishedAt: new Date(Date.now()),
      tags: ["message", "idea"],
    },
  ];

  const NoteCard = ({ note }: { note: INote }) => {
    const navigate = useNavigate();

    return (
      <Card
        withBorder
        shadow="xs"
        component={"a"}
        sx={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/note/${note.slug}`);
        }}
        title={note.title}>
        <Text
          weight={750}
          size="xl"
          sx={{
            ":hover": {
              textDecoration: "underline",
            },
          }}
          span>
          {note.title}
        </Text>

        <Text my={6}>{note.description}</Text>

        <Group mt={8} spacing={8} align="center">
          <Text color="dimmed">
            {note.publishedAt.toLocaleDateString("en-US", {
              dateStyle: "long",
            })}
          </Text>

          {note.tags.map((tag) => (
            <Badge key={tag} color="blue" radius={5} size="md" variant="light">
              {tag}
            </Badge>
          ))}
        </Group>
      </Card>
    );
  };

  return (
    <Container size={720} my={50}>
      <Title order={2}>My Notes</Title>
      <Divider mb={25} />

      <Stack spacing={25} mt={10}>
        {notes.map((note) => (
          <NoteCard note={note} />
        ))}
      </Stack>
    </Container>
  );
};
