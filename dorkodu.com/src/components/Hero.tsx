import { createStyles, Image, Container, Title, Button, Group, Text, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const styles = {
  HeroWithBulletpoints: createStyles((theme) => ({
    inner: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: theme.spacing.xl * 4,
    },

    content: {
      maxWidth: 480,
      marginRight: theme.spacing.xl * 3,

      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },

    title: {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 44,
      lineHeight: 1.2,
      fontWeight: 900,

      [theme.fn.smallerThan("xs")]: {
        fontSize: 28,
      },
    },

    control: {
      [theme.fn.smallerThan("xs")]: {
        flex: 1,
      },
    },

    image: {
      flex: 1,

      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },

    highlight: {
      position: "relative",
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      borderRadius: theme.radius.sm,
      padding: "4px 12px",
    },
  })),
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
  HeroTitle: createStyles((theme) => ({
    wrapper: {
      position: "relative",
      boxSizing: "border-box",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },

    inner: {
      position: "relative",
      paddingTop: 200,
      paddingBottom: 120,

      [BREAKPOINT]: {
        paddingBottom: 80,
        paddingTop: 80,
      },
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 62,
      fontWeight: 900,
      lineHeight: 1.1,
      margin: 0,
      padding: 0,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [BREAKPOINT]: {
        fontSize: 42,
        lineHeight: 1.2,
      },
    },

    description: {
      marginTop: theme.spacing.xl,
      fontSize: 24,

      [BREAKPOINT]: {
        fontSize: 18,
      },
    },

    controls: {
      marginTop: theme.spacing.xl * 2,

      [BREAKPOINT]: {
        marginTop: theme.spacing.xl,
      },
    },

    control: {
      height: 54,
      paddingLeft: 38,
      paddingRight: 38,

      [BREAKPOINT]: {
        height: 54,
        paddingLeft: 18,
        paddingRight: 18,
        flex: 1,
      },
    },
  })),
};

const BREAKPOINT = "@media (max-width: 755px)";
