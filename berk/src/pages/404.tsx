import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
  rem,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Page() {
  return (
    <main>
      <NotFound />
    </main>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(32),
    paddingBottom: rem(32),
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(200),
    lineHeight: 1,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3],

    marginBottom: theme.spacing.xl,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(100),
    },
  },

  title: {
    textAlign: "center",
    fontWeight: 850,
    fontSize: rem(38),
    color: theme.colorScheme == "dark" ? "white" : theme.colors.dark[9],

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(450),
    margin: "auto",
    fontWeight: 500,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },
}));

export function NotFound() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Not Found</Title>
      <Text
        color="dimmed"
        size="xl"
        align="center"
        className={classes.description}>
        The page you are looking for was moved, removed, renamed or may have
        never existed.
      </Text>
      <Group position="center" my={25}>
        <Button
          variant="gradient"
          size="lg"
          radius={20}
          onClick={() => navigate("/")}
          rightIcon={<IconArrowRight />}>
          Go Back Home
        </Button>
      </Group>
    </Container>
  );
}
