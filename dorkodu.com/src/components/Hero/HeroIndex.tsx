import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  Stack,
  Badge,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const styles = {
  HeroText: createStyles((theme) => ({
    wrapper: {
      position: "relative",
      paddingBottom: 80,

      "@media (max-width: 755px)": {
        paddingTop: 80,
        paddingBottom: 60,
      },
    },

    inner: {
      position: "relative",
      zIndex: 1,
    },

    dots: {
      position: "absolute",
      color: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],

      "@media (max-width: 755px)": {
        display: "none",
      },
    },

    dotsLeft: {
      left: 0,
      top: 0,
    },

    title: {
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: -1,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontFamily: `${theme.fontFamily}`,
      maxWidth: 600,
      marginBottom: theme.spacing.xs,

      "@media (max-width: 520px)": {
        fontSize: 28,
        textAlign: "left",
      },
    },

    description: {
      fontWeight: 500,
      fontSize: theme.fontSizes.xl + 2,

      "@media (max-width: 520px)": {
        fontSize: theme.fontSizes.md,
      },
    },

    controls: {
      marginTop: theme.spacing.xs,
      display: "flex",

      "@media (max-width: 520px)": {
        flexDirection: "column",
      },
    },

    control: {
      "&:not(:first-of-type)": {
        marginLeft: theme.spacing.md,
      },

      "@media (max-width: 520px)": {
        height: 42,
        fontSize: theme.fontSizes.md,

        "&:not(:first-of-type)": {
          marginTop: theme.spacing.md,
          marginLeft: 0,
        },
      },
    },
  })),
};

export function HeroIndex() {
  const { classes } = styles.HeroText();

  return (
    <Stack className={classes.inner} spacing="xs">
      <Title className={classes.title}>
        Your life, one place.
        <br />
        Just like a digital mind.
      </Title>
      <Text size="xl" color="dimmed" className={classes.description} maw={500}>
        With all tools you need, life is like a game. Fulfill your dreams. Say hello to{" "}
        <i>
          <u> your second mind</u>
        </i>
        .
      </Text>
      <div className={classes.controls}>
        <Button className={classes.control} size="md" radius="lg">
          Create Account
        </Button>
        <Button className={classes.control} size="md" radius="lg" variant="default">
          Our Story
        </Button>
      </div>
    </Stack>
  );
}
