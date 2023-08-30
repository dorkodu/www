import { INote, NoteCard } from "@/components/note";
import { notes } from "@/data/notes";
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
          <NoteCard note={note} key={note.title} />
        ))}
      </Stack>
    </Container>
  );
};

function fetchNotes() {
  return notes;
}
