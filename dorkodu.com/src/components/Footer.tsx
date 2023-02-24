import { createStyles, Container, Group, Anchor, Box, Image, Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { Text, ActionIcon } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandGithub } from "@tabler/icons-react";

export const FooterSimple: FunctionComponent<{
  links: { link: string; label: string }[];
  brand: React.ReactNode;
}> = ({ links, brand }) => {
  const { classes } = style.FooterSimple();

  const items = links.map((link) => (
    <Anchor<"a"> color="dimmed" key={link.label} href={link.link} onClick={(event) => event.preventDefault()} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>{items}</Group>
        <Group position="center" mt={10}>
          <Box>{brand}</Box>
        </Group>
      </Container>
    </div>
  );
};

export const FooterWithLinks: FunctionComponent<{
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}> = ({ data }) => {
  const { classes, theme } = style.FooterWithLinks();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src={theme.colorScheme === "dark" ? "/images/dorkodu_Logo_Colorful.svg" : "/images/dorkodu_Logo_Dark.svg"}
            height={40}
            width="auto"
            mb="md"
          />
          <Text size={16} color="dimmed" className={classes.description}>
            We liberate the humankind; with our meaningful products & technology.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Stack spacing={4}>
          <Text color="dimmed" size="sm">
            Proudly from humans. 🌎🇹🇷
          </Text>
          <Text color="dimmed" size="md" weight={500}>
            © {new Date().getFullYear()} <span style={{ fontWeight: 800 }}>Dorkodu</span>
          </Text>
        </Stack>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size={40} component="a" href="https://twitter.com/dorkodu">
            <IconBrandTwitter size={28} />
          </ActionIcon>
          <ActionIcon size={40} component="a" href="https://github.com/dorkodu">
            <IconBrandGithub size={28} />
          </ActionIcon>
          <ActionIcon size={40} component="a" href="https://youtube.com/@dorkodu">
            <IconBrandYoutube size={28} />
          </ActionIcon>
          <ActionIcon size={40} component="a" href="https://instagram.com/dorkodu">
            <IconBrandInstagram size={28} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

const style = {
  FooterSimple: createStyles((theme) => ({
    footer: {
      marginTop: 16,
      borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]}`,
    },

    inner: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,

      [theme.fn.smallerThan("xs")]: {
        flexDirection: "column",
      },
    },
  })),
  FooterWithLinks: createStyles((theme) => ({
    footer: {
      marginTop: 120,
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
      borderTop: `10px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1]}`,
    },

    logo: {
      maxWidth: 280,
      marginRight: 20,

      [theme.fn.smallerThan("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },

    description: {
      marginTop: 5,

      [theme.fn.smallerThan("sm")]: {
        marginTop: theme.spacing.xs,
        textAlign: "center",
      },
    },

    inner: {
      display: "flex",
      justifyContent: "space-between",

      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        rowGap: theme.spacing.md * 3,
      },
    },

    groups: {
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing.xl,
      justifyContent: "space-evenly",

      [theme.fn.smallerThan(500)]: {
        flexDirection: "column",
      },
    },

    wrapper: {
      minWidth: 120,
    },

    link: {
      display: "block",
      color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm * 1.025,
      paddingTop: 3,
      paddingBottom: 3,

      "&:hover": {
        textDecoration: "underline",
      },
    },

    title: {
      fontSize: theme.fontSizes.sm,
      fontWeight: 750,
      textTransform: "uppercase",
      marginBottom: theme.spacing.xs / 2,
      color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[9],
    },

    afterFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: theme.spacing.xl,
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      borderTop: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,

      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",

        "*": {
          textAlign: "center",
        },
      },
    },

    social: {
      [theme.fn.smallerThan("sm")]: {
        marginTop: theme.spacing.xs,
      },
    },
  })),
};
