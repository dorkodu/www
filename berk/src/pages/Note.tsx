import { INote, NotePage as Note } from "@/components/note";
import { notes } from "@/data/notes";
import {
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconArrowRight, IconMoodSad } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";

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
  let data: INote | null;
  let success: boolean = false;

  notes.forEach((note) => {
    if (note.slug === slug) {
      data = note;
      success = true;
    }
  });

  return [success, data!];
}

const ErrorCard = () => {
  const navigate = useNavigate();

  return (
    <Card
      sx={($) => ({
        backgroundColor: $.fn.variant({ color: "red", variant: "outline" })
          .background,
      })}>
      <Group>
        <ThemeIcon size={48} color="blue" variant="light">
          <IconMoodSad size={36} />
        </ThemeIcon>
        <Stack spacing={2}>
          <Text weight={700} size={24}>
            404: Not Found
          </Text>
          <Text>This note doesn't exist.</Text>
        </Stack>
        <Button
          size="lg"
          radius="lg"
          rightIcon={<IconArrowRight />}
          onClick={() => navigate("/notes")}>
          Back to Notes
        </Button>
      </Group>
    </Card>
  );
};
