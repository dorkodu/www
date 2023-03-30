import { createStyles, Text, Title, TextInput, Button, Image } from "@mantine/core";
import image from "@assets/gilmour.webp";

const styles = {
  EmailBanner: createStyles((theme) => ({
    wrapper: {
      display: "flex",
      alignItems: "center",
      padding: +theme.spacing.xl * 2,
      borderRadius: theme.radius.lg,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]}`,

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        flexDirection: "column-reverse",
        padding: theme.spacing.xl,
      },
    },

    image: {
      maxWidth: "50%",

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: "80%",
      },
    },

    body: {
      paddingRight: +theme.spacing.xl * 2,

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        paddingRight: 0,
        marginTop: theme.spacing.xl,
      },
    },

    title: {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontWeight: 750,
      letterSpacing: -0.75,
      lineHeight: 1,
      marginBottom: theme.spacing.xs,
    },

    controls: {
      display: "flex",
      marginTop: theme.spacing.xl,
    },

    inputWrapper: {
      width: "100%",
      flex: "1",
    },

    input: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 0,
    },

    control: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  })),
};

export function EmailBanner() {
  const { classes, theme } = styles.EmailBanner();

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title} order={2}>
          Subscribe to our newsletter.
        </Title>
        <Text weight={500} size="lg" mb={5}></Text>
        <Text color="dimmed">
          <b>Once a week;</b> you will never miss important updates and latest news.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your Email"
            variant="filled"
            type="email"
            size="md"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control} size="md">
            Subscribe
          </Button>
        </div>
      </div>
      <Image
        src={theme.colorScheme === "dark" ? "/images/newsletter_Light.svg" : "/images/newsletter_Dark.svg"}
        className={classes.image}
      />
    </div>
  );
}
