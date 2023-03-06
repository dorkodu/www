import { createStyles, Image, Container, Title, Button, Text, Stack, rem } from "@mantine/core";

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
      display: "flex",
      justifyContent: "space-between",
      gap: theme.spacing.xl,
      alignItems: "center",
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },

    image: {
      flex: 1,

      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
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
      fontSize: theme.fontSizes.xl,

      "@media (max-width: 520px)": {
        fontSize: theme.fontSizes.md,
      },
    },

    controls: {
      marginTop: theme.spacing.md,
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
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Stack spacing={0}>
              <Title className={classes.title}>
                Your life, one place.
                <br />
                Just like a digital mind.
              </Title>
              <Text size="xl" color="dimmed" className={classes.description} maw={500}>
                With all tools you need, life is like a game. Fulfill your dreams. Say hello to&nbsp;
                <i>
                  <u>your second mind</u>
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
          </div>
          <Image src="/images/dorkodu-ecosystem.svg" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
