import { SegmentedControl, Center, ActionIcon, useMantineColorScheme, MantineSize } from "@mantine/core";
import { IconSun, IconMoon, IconMoonStars } from "@tabler/icons-react";

export function ColorToggleSegment({ size }: { size: MantineSize }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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
              <IconSun size={18} stroke={3} />
            </Center>
          ),
        },
        {
          value: "dark",
          label: (
            <Center>
              <IconMoon size={18} stroke={3} />
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
      onClick={() => toggleColorScheme(colorScheme === "dark" ? "light" : "dark")}
      size={size}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
      })}
    >
      {colorScheme === "dark" ? <IconSun size={18} /> : <IconMoonStars size={18} />}
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
      onChange={() => toggleColorScheme(colorScheme === "dark" ? "light" : "dark")}
      size={size}
      onLabel={<IconSun color={theme.white} size={18} />}
      offLabel={<IconMoonStars color={theme.colors.gray[5]} size={18} />}
    />
  );
}
