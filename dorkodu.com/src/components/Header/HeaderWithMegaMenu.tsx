import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  Header,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  UnstyledButton,
  createStyles,
  Title,
  Stack,
  ThemeIcon,
} from "@mantine/core";

import {
  IconArrowBigRightLine,
  IconArrowBigRightLineFilled,
  IconBriefcase,
  IconBriefcaseOff,
  IconBuildingCommunity,
  IconBusinessplan,
  IconCake,
  IconCampfire,
  IconChevronDown,
  IconChevronRight,
  IconCircleArrowRightFilled,
  IconHeartHandshake,
  IconLicense,
  IconMasksTheater,
  IconPlant,
  IconPlant2,
  IconSquareRoundedArrowRight,
  IconSquareRoundedArrowRightFilled,
  IconTrees,
} from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";
import { FunctionComponent } from "react";

import Image from "next/image";

import DorkoduLogo from "@/assets/dorkodu/dorkodu_Logo_Colorful.svg";
import { ColorToggleSegment, ColorToggleSwitch } from "../ColorToggle";
import { tokens } from "@dorkodu/prism";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    textDecoration: "none",
    borderRadius: theme.spacing.sm,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
      textDecoration: "underline",
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${Number(theme.spacing.md) * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const links = {
  product: [
    {
      link: "/products/wander",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36">
          <path
            fill="#A6D388"
            d="M6.401 28.55c5.006 5.006 16.502 11.969 29.533-.07c-7.366-1.417-8.662-10.789-13.669-15.794c-5.006-5.007-11.991-6.139-16.998-1.133c-5.006 5.006-3.873 11.99 1.134 16.997z"
          ></path>
          <path
            fill="#77B255"
            d="M24.684 29.81c6.128 1.634 10.658-.738 11.076-1.156c0 0-3.786 1.751-10.359-1.476c.952-1.212 3.854-2.909 3.854-2.909c-.553-.346-4.078-.225-6.485 1.429a37.028 37.028 0 0 1-3.673-2.675l.84-.871c3.25-3.384 6.944-2.584 6.944-2.584c-.638-.613-5.599-3.441-9.583.7l-.613.638a54.727 54.727 0 0 1-1.294-1.25l-1.85-1.85l1.064-1.065c3.321-3.32 8.226-3.451 8.226-3.451c-.626-.627-6.863-2.649-10.924 1.412l-.736.735l-8.292-8.294c-.626-.627-1.692-.575-2.317.05c-.626.626-.677 1.691-.051 2.317l8.293 8.293l-.059.059C4.684 21.924 6.37 28.496 6.997 29.123c0 0 .468-5.242 3.789-8.562l.387-.388l3.501 3.502c.057.057.113.106.17.163c-2.425 4.797 1.229 10.34 1.958 10.784c0 0-1.465-4.723.48-8.635c1.526 1.195 3.02 2.095 4.457 2.755c.083 2.993 2.707 5.7 3.344 5.931c0 0-.911-3.003-.534-4.487l.135-.376z"
          ></path>
          <path
            fill="#5DADEC"
            d="M22.083 10a1.001 1.001 0 0 1-.375-1.927c.166-.068 4.016-1.698 4.416-6.163a1 1 0 1 1 1.992.178c-.512 5.711-5.451 7.755-5.661 7.839a.978.978 0 0 1-.372.073zm5 4a1 1 0 0 1-.334-1.942c.188-.068 4.525-1.711 5.38-8.188a.99.99 0 0 1 1.122-.86a.998.998 0 0 1 .86 1.122c-1.021 7.75-6.468 9.733-6.699 9.813c-.109.037-.22.055-.329.055zm3.001 6a1.001 1.001 0 0 1-.483-1.876c.027-.015 2.751-1.536 3.601-3.518a1 1 0 0 1 1.837.788c-1.123 2.62-4.339 4.408-4.475 4.483a1.003 1.003 0 0 1-.48.123z"
          ></path>
        </svg>
      ),
      title: "Wander",
      description: "Mind Garden",
    },
    {
      link: "/products/trekie",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36">
          <path fill="#269" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"></path>
          <path fill="#F4900C" d="M11 9s7.29-4.557 21-4.969c.652-.02 2-.031 2 .969c-6 9-9 23-9 23L11 9z"></path>
          <path fill="#FFAC33" d="M12 16S24 5 32 4.031C32.647 3.952 34 4 34 5c-7 4-12 19-12 19l-10-8z"></path>
          <path
            fill="#FFD983"
            d="M15.156 12.438c.826.727 2.388 1.164 3.471.972l4.892-.866c1.084-.192 1.613.478 1.178 1.488l-1.968 4.563c-.436 1.01-.369 2.63.148 3.602l2.335 4.384c.518.972.044 1.682-1.051 1.58l-4.947-.463c-1.095-.102-2.616.462-3.379 1.254l-3.45 3.577c-.763.792-1.585.562-1.827-.512L9.469 27.17c-.241-1.073-1.248-2.345-2.237-2.827l-4.467-2.175c-.989-.481-1.024-1.335-.078-1.896l4.274-2.534c.946-.561 1.845-1.911 1.997-3.001l.689-4.92c.152-1.09.953-1.387 1.779-.66l3.73 3.281z"
          ></path>
        </svg>
      ),
      title: "Trekie",
      description: "Social & Gamified Life Growth",
    },
    {
      link: "/products/forum",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36">
          <path fill="#292F33" d="M7 11h22v18H7z"></path>
          <path
            fill="#CCD6DD"
            d="M8 29c0 1.104-.597 2-1.333 2H5.333C4.597 31 4 30.104 4 29V11c0-1.104.597-2 1.333-2h1.333C7.403 9 8 9.896 8 11v18zm24 0c0 1.104-.597 2-1.333 2h-1.334C28.597 31 28 30.104 28 29V11c0-1.104.597-2 1.333-2h1.334C31.403 9 32 9.896 32 11v18zm-16 0c0 1.104-.597 2-1.333 2h-1.333C12.597 31 12 30.104 12 29V11c0-1.104.597-2 1.333-2h1.333C15.403 9 16 9.896 16 11v18zm8 0c0 1.104-.598 2-1.334 2h-1.332C20.598 31 20 30.104 20 29V11c0-1.104.598-2 1.334-2h1.332C23.402 9 24 9.896 24 11v18z"
          ></path>
          <path fill="#9AAAB4" d="M33 30a2 2 0 0 1-2 2H5a2 2 0 0 1 0-4h26a2 2 0 0 1 2 2z"></path>
          <path fill="#CCD6DD" d="M35 32a2 2 0 0 1-2 2H3a2 2 0 0 1 0-4h30a2 2 0 0 1 2 2z"></path>
          <path
            fill="#E1E8ED"
            d="M36 33.5a1.5 1.5 0 0 1-1.5 1.5h-33a1.5 1.5 0 1 1 0-3h33a1.5 1.5 0 0 1 1.5 1.5z"
          ></path>
          <path
            fill="#9AAAB4"
            d="M33 10c0-1.104-.956-2-2.133-2H5c-1.179 0-2 .896-2 2c0 .751.386 1.398 1 1.74V13h4v-1h4v1h4v-1h4v1h4v-1h4v1h4v-1.312c.599-.354 1-.975 1-1.688z"
          ></path>
          <path
            fill="#CCD6DD"
            d="M2 8.444C2 7.413 3.012 7 3.012 7l14.904-7l15.047 7S34 7.231 34 8.45V9H2v-.556z"
          ></path>
          <path
            fill="#9AAAB4"
            d="M18 2.542S7.681 7.407 6.65 7.844C5.619 8.281 5.964 9 6.651 9h22.646c1.062 0 .812-.812-.031-1.25C28.422 7.312 18 2.542 18 2.542z"
          ></path>
          <path fill="#CCD6DD" d="M34 9a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2l30 .006c.553 0 1 .442 1 .994z"></path>
        </svg>
      ),
      title: "Forum",
      description: "Public Town Square",
    },
    {
      link: "/products/id",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36">
          <path
            fill="#AAB8C2"
            d="M13 3C7.477 3 3 7.477 3 13v10h4V13a6 6 0 0 1 12 0v10h4V13c0-5.523-4.477-10-10-10z"
          ></path>
          <path fill="#FFAC33" d="M26 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v12z"></path>
          <path
            fill="#C1694F"
            d="M35 9c0-4.971-4.029-9-9-9s-9 4.029-9 9c0 3.917 2.507 7.24 6 8.477V33.5a2.5 2.5 0 0 0 4.95.49c.018.001.032.01.05.01a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1v-1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1v-2.277A1.99 1.99 0 0 0 29 22v-4.523c3.493-1.236 6-4.559 6-8.477zm-9-7a2 2 0 1 1-.001 4.001A2 2 0 0 1 26 2z"
          ></path>
        </svg>
      ),
      title: "ID",
      description: "Digital Life Hub",
    },
  ],
  company: [
    {
      link: "/jobs",
      icon: (
        <ThemeIcon variant="light" radius="md" size="lg" color="green">
          <IconBriefcase />
        </ThemeIcon>
      ),
      title: "Jobs",
      description: "Join the revolution.",
    },
    {
      link: "/manifesto",
      icon: (
        <ThemeIcon variant="light" radius="md" size="lg" color="green">
          <IconLicense />
        </ThemeIcon>
      ),
      title: "Our Manifesto",
      description: "Liberate the humankind.",
    },
    {
      link: "https://garden.dorkodu.com",
      icon: (
        <ThemeIcon variant="light" radius="md" size="lg" color="green">
          <IconPlant />
        </ThemeIcon>
      ),
      title: "Garden",
      description: "Our ideas, public.",
    },
  ],
  business: [
    {
      link: "/business",
      icon: (
        <ThemeIcon variant="light" radius="md" size="lg" color="green">
          <IconBuildingCommunity stroke={2.25} />
        </ThemeIcon>
      ),
      title: "For Business",
      description: "Grow together.",
    },
    {
      link: "/creators",
      icon: (
        <ThemeIcon variant="light" radius="md" size="lg" color="green">
          <IconHeartHandshake stroke={2} />
        </ThemeIcon>
      ),
      title: "For Creators",
      description: "Create together.",
    },
  ],
};

export const HeaderWithMegaMenu: FunctionComponent = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [productLinksOpened, { toggle: toggleProductLinks }] = useDisclosure(false);
  const [companyLinksOpened, { toggle: toggleCompanyLinks }] = useDisclosure(false);

  const { classes, theme } = useStyles();

  const MenuButtonsWithIcon = (
    list: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
      link: string;
    }>
  ) => {
    return list.map((item) => (
      <Link href={item.link} key={item.title}>
        <UnstyledButton className={classes.subLink}>
          <Group noWrap align="flex-start">
            {item.icon}

            <div>
              <Text size="sm" weight={550}>
                {item.title}
              </Text>
              <Text size="xs" color="dimmed">
                {item.description}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      </Link>
    ));
  };

  return (
    <Box pb={75}>
      <Header height="auto" px="md" withBorder={false}>
        <Group
          position="apart"
          sx={{
            height: "100%",
            maxWidth: 920,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <a href="/">
            <Image src={DorkoduLogo} alt="Dorkodu" height={40} />
          </a>

          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <a href="/about" className={classes.link}>
              About
            </a>

            <HoverCard width={500} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Our Work
                    </Box>
                    <IconChevronDown size={18} color={theme.colors.gray[5]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden", marginTop: 16 }} p="sm">
                <Group position="apart" px="md">
                  <Text weight={500}>Products</Text>
                </Group>
                <Divider my="sm" mx="-md" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
                <SimpleGrid cols={2} spacing={0}>
                  {MenuButtonsWithIcon(links.product)}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Create an account to start using Dorkodu.
                      </Text>
                    </div>
                    <Button variant="default">Create Account</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard width={250} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Company
                    </Box>
                    <IconChevronDown size={18} color={theme.colors.gray[5]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }} p={8}>
                <Stack spacing={0}>
                  {MenuButtonsWithIcon(links.company)}
                  <Divider my={8} color={theme.colorScheme === "dark" ? "dark.4" : "gray.2"} />
                  {MenuButtonsWithIcon(links.business)}
                </Stack>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group className={classes.hiddenMobile} spacing={8}>
            <ColorToggleSwitch size="md" />
            {/* <Button radius={theme.radius.lg - 2} rightIcon={<IconCircleArrowRightFilled />}>Enter</Button> */}
            <Button variant="default" radius={Number(theme.radius.lg) - 1}>
              Log In
            </Button>
            <Button radius={Number(theme.radius.lg) - 1}>Sign Up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            size="md"
            styles={{
              burger: {
                backgroundColor: theme.colorScheme === "dark" ? tokens.color.gray(20) : tokens.color.gray(90),
              },
            }}
            color={theme.colorScheme === "dark" ? tokens.color.gray(75) : tokens.color.gray(20)}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="80%"
        padding="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        title={
          <Title order={2} size="h2">
            Dorkodu
          </Title>
        }
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <a href="#" className={classes.link}>
            <span>About</span>
          </a>

          <UnstyledButton className={classes.link} onClick={toggleProductLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Products
              </Box>
              <IconChevronDown size={16} color={theme.colors.gray[5]} stroke={3} />
            </Center>
          </UnstyledButton>
          <Collapse in={productLinksOpened}>{MenuButtonsWithIcon(links.product)}</Collapse>

          <UnstyledButton className={classes.link} onClick={toggleCompanyLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Company
              </Box>
              <IconChevronDown size={16} color={theme.colors.gray[5]} stroke={3} />
            </Center>
          </UnstyledButton>
          <Collapse in={companyLinksOpened}>
            {MenuButtonsWithIcon(links.company)}
            {MenuButtonsWithIcon(links.business)}
          </Collapse>

          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <Group position="center" spacing="xs" grow pb="xl" px={0}>
            <Button variant="default" radius={Number(theme.radius.lg) - 1}>
              Log In
            </Button>
            <Button radius={Number(theme.radius.lg) - 1}>Sign Up</Button>
          </Group>

          <ColorToggleSegment size="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
