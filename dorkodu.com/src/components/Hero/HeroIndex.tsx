import { createStyles, Image, Container, Title, Button, Group, Text, List, ThemeIcon } from "@mantine/core";
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
      textAlign: "center",
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: -1,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontFamily: `${theme.fontFamily}`,
      maxWidth: 600,
      margin: "0 auto",
      marginBottom: theme.spacing.xs,

      "@media (max-width: 520px)": {
        fontSize: 28,
        textAlign: "left",
      },
    },

    description: {
      textAlign: "center",
      fontWeight: 500,

      "@media (max-width: 520px)": {
        textAlign: "left",
        fontSize: theme.fontSizes.md,
      },
    },

    controls: {
      marginTop: theme.spacing.lg,
      display: "flex",
      justifyContent: "center",

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
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>Your life, one place.</Title>
        <Container p={0} size={600}>
          <Text size="xl" color="dimmed" className={classes.description}>
            We create dream fulfillment technology for you.
          </Text>
          <Text size="lg" color="blue" className={classes.description} my="md" maw={400} mx="auto">
            #life #gamification #productivity #crypto #economics #social #knowledge
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="md" radius="lg">
            Join Us
          </Button>
          <Button className={classes.control} size="md" radius="lg" variant="default">
            Read Our Story
          </Button>
        </div>
      </div>
    </Container>
  );
}
