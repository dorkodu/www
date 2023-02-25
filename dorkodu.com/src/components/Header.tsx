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
  ThemeIcon,
  UnstyledButton,
  createStyles,
  Title,
} from "@mantine/core";

import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";
import { FunctionComponent } from "react";

import Image from "next/image";

import DorkoduLogo from "@/assets/dorkodu/dorkodu_Logo_Colorful.svg";
import { ColorToggleSegment, ColorToggleSwitch } from "./ColorToggle";
import { tokens } from "@dorkodu/prism";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
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
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
      textDecoration: "underline",
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
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

export const HeaderWithMegaMenu: FunctionComponent = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const { classes, theme } = useStyles();

  const productLinks = [
    {
      icon: () => (
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
      icon: () => (
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
      icon: () => (
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
      icon: () => (
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
  ];

  const workLinks = [
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36">
          <path
            fill="#5C913B"
            d="M35.602 16.28c-2.582-3.761-7.92 1.774-17.662 2.899c-3.607.416-6.857 3.428-11.047 3.141c-1.718-.118-4.117-5.061-5.913-4.273c-.924.406-1.348 1.761-.398 2.779L11.13 33.412s.536.618 2.342.19c.445.131 7.135-2.55 11.003-7.917c.926-1.285 2.03-2.355 3.173-3.249c3.711-2.744 7.745-3.7 7.745-3.7c.516-.426.637-.879.609-1.272c.034-.656-.4-1.184-.4-1.184z"
          ></path>
          <path
            fill="#A7D28B"
            d="M11.476 10.274c-3.783 5.25-10.408 7.737-10.408 7.737c-1.236 1.047-.192 2.281-.192 2.281l10.438 12.359s.522.617 2.28.189c0 0 6.625-2.482 10.407-7.732c3.899-5.41 10.93-7.118 10.93-7.118c1.235-1.047.192-2.283.192-2.283L24.685 3.35s-.522-.618-2.28-.192c0 0-7.03 1.704-10.929 7.116z"
          ></path>
          <circle cx="22" cy="14" r="5.5" fill="#77B255"></circle>
          <path
            fill="#5C913B"
            d="M12.873 31.929c-.881 0-1.204-.328-1.248-.378L2.216 20.568c-.018-.021-.495-.567-.437-1.261c.035-.421.253-.796.647-1.115l.063-.038c.061-.024 6.163-2.532 9.583-7.065l.2.15l-.2-.15c3.618-4.796 9.859-6.854 9.921-6.874c1.745-.406 2.316.174 2.377.242l9.285 11.044c.017.018.493.566.435 1.261c-.035.42-.253.795-.647 1.114l-.099.049c-.061.015-6.129 1.523-9.644 6.181c-3.499 4.64-9.607 7.642-9.668 7.671c-.464.11-.846.152-1.159.152zm-.871-.707c.001 0 .452.416 1.865.088c.008-.011 6.009-2.962 9.436-7.504c3.437-4.555 9.225-6.182 9.867-6.351c.257-.221.399-.466.422-.729c.042-.48-.312-.893-.315-.897L23.992 4.784c-.002 0-.45-.415-1.864-.087c-.041.014-6.135 2.026-9.656 6.693c-3.366 4.461-9.239 6.995-9.758 7.213c-.268.225-.414.476-.437.745c-.04.476.312.887.315.891l9.41 10.983z"
          ></path>
          <path
            fill="#FFAC33"
            d="m21.276 22.166l-.006 5.94l.497.59c.969-.884 1.9-1.878 2.705-2.996a15.844 15.844 0 0 1 2.828-2.986l-.483-.575l-5.541.027z"
          ></path>
          <path
            fill="#FFE8B6"
            d="M26.798 22.118L14.292 7.305c-1.016.836-1.992 1.811-2.822 2.964c-.811 1.126-1.755 2.117-2.735 2.991l1.462 1.731l-.001.001l11.075 13.114a18.71 18.71 0 0 0 2.725-3.003c.83-1.152 1.805-2.126 2.82-2.962l-.019-.023h.001z"
          ></path>
          <path
            fill="#5C913B"
            d="M14.479 22.555c-1.557-1.844-4.853 1.148-5.793.035c-.455-.539-.162-1.238.436-1.742c1.005-.85 1.73-.355 2.185-.74c.323-.272.306-.605.114-.834c-.446-.527-1.586-.252-2.472.26l-.431-.51a.754.754 0 0 0-1.152.972l.446.529c-.677.898-.907 2.09-.106 3.037c1.496 1.77 4.833-1.172 5.883.072c.364.432.262 1.256-.504 1.902c-1.148.971-2.188.516-2.655.91c-.228.191-.269.555-.026.844c.387.457 1.62.359 2.805-.379c.002.002.002.004.002.006l.487.576a.755.755 0 1 0 1.153-.974l-.487-.576c-.005-.006-.013-.01-.019-.016c.799-.978 1.069-2.267.134-3.372z"
          ></path>
          <path
            fill="#E1E8ED"
            d="M32.456 32.588c.009-.008.019-.014.028-.021c.068-.068.121-.146.181-.221c.042-.052.089-.102.128-.155c.035-.05.064-.101.096-.152c1.42-2.187.49-5.895-2.321-8.707c-2.812-2.812-6.521-3.742-8.707-2.321c-.052.031-.103.06-.153.096c-.053.039-.104.086-.154.127c-.074.061-.152.113-.221.182c-.009.009-.015.019-.022.028c-.011.011-.024.018-.036.03l.006.005c-1 1.062-1.012 2.705-.006 3.712c1.008 1.008 2.65.994 3.713-.006l.011.012c-.021.02-.044.033-.064.053c-1.059 1.059-1.084 2.748-.059 3.775c1.026 1.025 2.717 1 3.775-.059c.02-.02.033-.043.053-.064l.011.012c-1 1.062-1.013 2.705-.005 3.713c1.007 1.006 2.649.994 3.711-.006l.006.006c.01-.014.018-.027.029-.039z"
          ></path>
          <path
            fill="#CCD6DD"
            d="M21.277 25.231c.906.905 2.321.979 3.37.261c.439-.75.565-1.463.565-1.686c-2.207 1.646-4.177.009-4.618-.97c-.183.846.039 1.75.683 2.395zm7.299 3.84c.298-.419.529-.824.637-1.098c-1.405 1.288-4.091.345-4.905-1.698c-.358.95-.175 2.044.571 2.79c1.002 1.002 2.634.994 3.697.006zm3.854 3.595l.029-.036c.01-.008.02-.014.028-.022c.069-.068.122-.146.181-.22c.043-.053.089-.102.128-.156c.036-.049.065-.101.097-.152c.065-.1.1-.218.155-.324c-2.528 1.131-4.415-.788-4.944-1.745c-.295.917-.103 1.944.609 2.657c1.006 1.007 2.648.995 3.711-.006l.006.004z"
          ></path>
          <path
            fill="#E1E8ED"
            d="m13.956 12.498l.028-.022c.069-.068.122-.146.181-.22c.042-.052.088-.101.127-.155c.036-.05.065-.101.097-.152c1.42-2.187.489-5.896-2.322-8.707C9.255.43 5.547-.501 3.36.919c-.051.032-.103.061-.153.097c-.054.039-.103.085-.155.127c-.074.06-.152.112-.22.181c-.009.009-.015.02-.022.028c-.011.01-.025.019-.036.03l.005.005c-1 1.062-1.012 2.705-.005 3.712c1.007 1.007 2.65.995 3.712-.005l.011.011c-.021.019-.044.033-.064.053c-1.059 1.059-1.084 2.748-.058 3.775c1.026 1.027 2.716 1.001 3.775-.058c.02-.02.033-.043.053-.064l.011.011c-1 1.062-1.013 2.705-.005 3.712c1.007 1.007 2.649.995 3.711-.006l.005.006c.011-.011.02-.024.031-.036z"
          ></path>
          <path
            fill="#CCD6DD"
            d="M2.773 5.1c.906.906 2.321.98 3.37.26c.439-.75.564-1.462.564-1.685c-2.206 1.645-4.177.007-4.617-.972c-.183.847.039 1.752.683 2.397zm7.301 3.838c.297-.419.528-.822.635-1.096c-1.406 1.288-4.092.344-4.905-1.699c-.358.95-.175 2.044.57 2.79c1.004 1.003 2.637.994 3.7.005zm3.851 3.597c.011-.011.02-.024.03-.036l.028-.022c.069-.068.122-.146.181-.22c.042-.052.088-.101.127-.155c.036-.05.065-.101.097-.152c.065-.1.1-.219.155-.325c-2.528 1.131-4.415-.787-4.944-1.744c-.295.917-.103 1.944.609 2.656c1.007 1.007 2.649.995 3.711-.006l.006.004z"
          ></path>
        </svg>
      ),
      title: "Jobs",
      description: "Join the revolution.",
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36">
          <path
            fill="#78B159"
            d="M18 25.18C3.438 25.18 0 29.844 0 32s1.791 4 4 4h28c2.209 0 4-1.851 4-4s-3.438-6.82-18-6.82z"
          ></path>
          <path
            fill="#662113"
            d="M28.804 28.15c0 1.531-1.242 2.08-2.773 2.08c-1.531 0-2.773-.548-2.773-2.08l.693-6.239c0-1.531.548-1.387 2.08-1.387c1.531 0 2.08-.145 2.08 1.387l.693 6.239z"
          ></path>
          <path
            fill="#5C913B"
            d="M34.868 19.717c-4.59-4.135-6.449-10.056-8.837-10.056s-4.247 5.921-8.836 10.056c-1.929 1.738-1.01 2.743 1.634 2.542c2.357-.179 4.561-.741 7.202-.741s4.846.563 7.202.741c2.644.201 3.563-.805 1.635-2.542z"
          ></path>
          <path
            fill="#3E721D"
            d="M33.377 18.078c-3.527-3.401-5.509-8.273-7.346-8.273c-1.836 0-3.818 4.872-7.345 8.273c-2.803 2.703 3.673 3.309 7.345 0c3.671 3.309 10.148 2.703 7.346 0z"
          ></path>
          <path
            fill="#5C913B"
            d="M33.377 15.323c-3.527-3.178-5.509-7.729-7.346-7.729c-1.836 0-3.818 4.551-7.345 7.729c-2.803 2.525 3.673 3.091 7.345 0c3.671 3.091 10.148 2.524 7.346 0z"
          ></path>
          <path
            fill="#3E721D"
            d="M31.766 13.066c-2.753-2.481-4.301-6.034-5.735-6.034c-1.433 0-2.981 3.553-5.735 6.034c-2.188 1.971 2.867 2.414 5.735 0c2.867 2.413 7.923 1.971 5.735 0z"
          ></path>
          <path
            fill="#5C913B"
            d="M31.766 11.001c-2.753-2.481-4.301-6.034-5.735-6.034c-1.433 0-2.981 3.553-5.735 6.034c-2.188 1.971 2.867 2.414 5.735 0c2.867 2.414 7.923 1.972 5.735 0z"
          ></path>
          <path
            fill="#3E721D"
            d="M30.659 9.168c-2.222-2.002-3.471-4.869-4.628-4.869s-2.406 2.867-4.628 4.869c-1.766 1.591 2.314 1.948 4.628 0c2.314 1.948 6.395 1.591 4.628 0z"
          ></path>
          <path
            fill="#5C913B"
            d="M30.659 7.614c-2.222-2.002-3.471-4.869-4.628-4.869s-2.406 2.867-4.628 4.869c-1.766 1.591 2.314 1.948 4.628 0c2.314 1.948 6.395 1.591 4.628 0z"
          ></path>
          <path
            fill="#3E721D"
            d="M29.553 5.326c-1.69-1.523-2.641-3.705-3.522-3.705c-.88 0-1.831 2.182-3.522 3.705c-1.344 1.211 1.761 1.482 3.522 0c1.761 1.483 4.866 1.211 3.522 0z"
          ></path>
          <path
            fill="#5C913B"
            d="M29.553 4.29C27.863 2.767 26.912.585 26.031.585c-.88 0-1.831 2.182-3.522 3.705c-1.344 1.211 1.761 1.482 3.522 0c1.761 1.482 4.866 1.211 3.522 0z"
          ></path>
          <path
            fill="#F4900C"
            d="M15.101 33c-.424 0-.802-.267-.944-.666L9.145 18.301a.964.964 0 0 1 .125-.896a.99.99 0 0 1 .82-.405h11.759c.401 0 .764.22.922.589l6.014 14.023A.994.994 0 0 1 27.862 33H15.101z"
          ></path>
          <path
            fill="#FFCC4D"
            d="M4.075 33a1.005 1.005 0 0 1-.921-1.398L9.172 17.56a1.002 1.002 0 0 1 1.843 0l6.018 14.041A1.006 1.006 0 0 1 16.111 33H4.075z"
          ></path>
          <path fill="#292F33" d="M10.09 19.436L8.084 33h4.01z"></path>
          <path fill="#FFAC33" d="M14.127 31.887L14.575 33h-2.481zm-8.075 0L5.604 33h2.48z"></path>
          <path
            fill="#FFE8B6"
            d="M12.094 33s1.823-.465 2.714-1.288L10.09 19.436L12.094 33zm-4.01 0s-1.823-.465-2.714-1.288l4.719-12.277L8.084 33z"
          ></path>
          <path
            fill="#E1E8ED"
            d="M13.625 5.625c-.018 0-.034.006-.052.006a2.5 2.5 0 0 0-2.448-3.007a2.49 2.49 0 0 0-2.11 1.171a2.48 2.48 0 0 0-.89-.17a2.491 2.491 0 0 0-2.469 2.19a2.422 2.422 0 0 0-.906-.19a2.5 2.5 0 1 0 0 5h8.875a2.5 2.5 0 1 0 0-5z"
          ></path>
        </svg>
      ),
      title: "Life @ Dorkodu",
      description: "Why work with us?",
    },
  ];

  const links = {
    products: productLinks.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <item.icon />
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    )),
    others: workLinks.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <item.icon />
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    )),
  };

  return (
    <Box pb={120}>
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
          <Image src={DorkoduLogo} alt="Dorkodu" height={40} />

          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <a href="#" className={classes.link}>
              About
            </a>

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Work
                    </Box>
                    <IconChevronDown size={18} color={theme.colors.gray[5]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden", marginTop: 16 }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Products</Text>
                  <Anchor href="/work" size="sm">
                    Our Work
                  </Anchor>
                </Group>

                <Divider my="sm" mx="-md" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

                <SimpleGrid cols={2} spacing={0}>
                  {links.products}
                </SimpleGrid>

                <Divider my="sm" mx="-md" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

                <SimpleGrid cols={2} spacing={0}>
                  {links.others}
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

            <a href="#" className={classes.link}>
              Business
            </a>
          </Group>

          <Group className={classes.hiddenMobile} spacing="xs">
            <ColorToggleSwitch size="md" />
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
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
          <Title order={2} size="h3">
            Dorkodu
          </Title>
        }
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <a href="#" className={classes.link}>
            <span>About</span>
          </a>

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Work
              </Box>
              <IconChevronDown size={16} color={theme.colors.gray[5]} stroke={3} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            {links.products}
            <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
            {links.others}
          </Collapse>

          <a href="#" className={classes.link}>
            Business
          </a>

          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <Group position="center" spacing="xs" grow pb="xl" px="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Group position="left" pb="xl" px="md">
            <ColorToggleSegment size="sm" />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
