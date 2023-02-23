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
} from "@mantine/core";
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
      paddingTop: 120,
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
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],

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
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
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

export function HeroWithBulletpoints() {
  const { classes } = styles.HeroWithBulletpoints();

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <Text className={classes.highlight}>modern</Text> React <br />{" "}
              components library
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }>
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <Image
            src="/images/dorkodu-work-culture.svg"
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
}

export function HeroIndex() {
  const { classes } = styles.HeroText();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          We are your{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{
              from: "hsl(140, 80%, 40%)",
              to: "hsl(90, 70%, 60%)",
              deg: 45,
            }}>
            dream fulfillment
          </Text>{" "}
          technology company.
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            We combine gamification, human-centric design with our superior
            technology to create products that help people fulfill their dreams.
          </Text>
          <Text
            size="lg"
            color="blue"
            className={classes.description}
            my="md"
            maw={400}
            mx="auto">
            #life #gamification #productivity #crypto #economics #social
            #knowledge
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="md"
            radius="lg"
            variant="default">
            Read Our Story
          </Button>
          <Button className={classes.control} size="md" radius="lg">
            Join Us
          </Button>
        </div>
      </div>
    </Container>
  );
}

const BREAKPOINT = "@media (max-width: 755px)";

export function HeroTitle() {
  const { classes } = styles.HeroTitle();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit>
            fully featured
          </Text>{" "}
          React components and hooks library
        </h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine
          includes more than 100 customizable components and hooks to cover you
          in any situation
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}>
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}>
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
