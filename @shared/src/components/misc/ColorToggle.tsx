import {
  SegmentedControl,
  Center,
  ActionIcon,
  useMantineColorScheme,
  MantineSize,
  ThemeIcon,
} from "@mantine/core";
import {
  IconSun,
  IconMoon,
  IconMoonStars,
  IconSunFilled,
  IconMoonFilled,
} from "@tabler/icons-react";

export function ColorToggleSegment({ size = "md" }: { size: MantineSize }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <SegmentedControl
      radius="md"
      size={size}
      value={colorScheme}
      onChange={(value: "light" | "dark") => {
        toggleColorScheme(value);
      }}
      data={[
        {
          value: "light",
          label: (
            <Center>
              <IconSun
                size={18}
                stroke={3}
                color={
                  colorScheme == "light"
                    ? theme.colors.yellow[7].toString()
                    : theme.colors.dark[3].toString()
                }
              />
            </Center>
          ),
        },
        {
          value: "dark",
          label: (
            <Center>
              <IconMoon
                size={18}
                stroke={3}
                color={
                  colorScheme == "dark"
                    ? theme.colors.blue[2].toString()
                    : theme.colors.dark[1].toString()
                }
              />
            </Center>
          ),
        },
      ]}
    />
  );
}

export function ColorToggleIcon({ size }: { size: MantineSize }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() =>
        toggleColorScheme(colorScheme === "dark" ? "light" : "dark")
      }
      size={size}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color:
          theme.colorScheme === "dark"
            ? theme.colors.yellow[4]
            : theme.colors.blue[6],
      })}>
      {colorScheme === "dark" ? (
        <IconSun size={18} />
      ) : (
        <IconMoonStars size={18} />
      )}
    </ActionIcon>
  );
}

import { Switch, useMantineTheme } from "@mantine/core";

export function ColorToggleSwitch({ size }: { size: MantineSize }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Switch
      checked={colorScheme === "dark"}
      onChange={() =>
        toggleColorScheme(colorScheme === "dark" ? "light" : "dark")
      }
      size={size}
      styles={{}}
      onLabel={<IconSunFilled color={theme.white} size={18} />}
      offLabel={<IconMoonFilled color={theme.colors.gray[3]} size={18} />}
    />
  );
}
