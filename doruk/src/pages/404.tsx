import BaseLayout from "@/layouts/Base";
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

const meta = {
  title: "Oops!",
  description: `Something went wrong.`,
  keywords: `dorkodu, dorkodu.com, dorkodia, liberate, gamification, productivity, humane technology`,
  url: "/",
  image: {
    src: "/public/images/dorkodu-single.png",
    alt: "dorkodu logo with single letter.",
  },
};

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
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3],

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
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export function NotFound() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Something's gone wrong.</Title>
      <Text
        color="dimmed"
        size="xl"
        align="center"
        className={classes.description}>
        The page you are looking for was moved, removed, renamed or may have
        never existed.
      </Text>
      <Group position="center" my={25}>
        <Link href="/">
          <Button
            variant="gradient"
            size="lg"
            radius={20}
            rightIcon={<IconArrowRight />}>
            Go Back Home
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
