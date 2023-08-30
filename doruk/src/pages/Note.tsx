import { INote, NotePage as Note } from "@/components/note";
import { notes } from "@/data/notes";
import {
  Alert,
  Container,
  Divider,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Showcase } from "@shared/components/commons";
import { useParams } from "react-router-dom";

export default function Page() {
  const params = useParams();

  const [success, data] = fetchNote(params.slug!);

  return (
    <Container size={768} my={50}>
      {success ? <Note note={data} /> : <ErrorCard />}
    </Container>
  );
}

function fetchNote(slug: string | null): [boolean, INote] {
  let data: INote;
  let success: boolean = false;

  notes.forEach((note) => {
    if (note.slug === slug) {
      data = note;
      success = true;
    }
  });

  return [success, data];
}

const ErrorCard = () => <Alert>This note doesn't exist.</Alert>;
