import { INote, NoteCard } from "@/components/note";
import { Container, Divider, Stack, Title } from "@mantine/core";

export default function Page() {
  return (
    <Container>
      <Feed />
    </Container>
  );
}

const Feed = () => {
  const notes = fetchNotes();

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

function fetchNotes() {
  // imititate fetching notes
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

  return notes;
}
