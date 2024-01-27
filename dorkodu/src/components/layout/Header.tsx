import { ActionIcon, Box, Group, Image, useMantineColorScheme } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import { UserButton } from "../buttons/UserButton";
import { CommandCenter } from "../custom/CommandCenter";
import { useTrekieStore } from "#/stores/trekieStore";
import { useAppStore } from "#/stores/appStore";

export function Header() {
  const { colorScheme } = useMantineColorScheme()
  const user = useTrekieStore($ => $.user)
  const menu = useAppStore($ => $.menu)

  return (
    <Box m={10} mx={16}>
      <Group justify="space-between">
        <div>
          <Image
            src={
              colorScheme == 'light'
                ? '/images/trekie_Brand.svg'
                : '/images/trekie_Brand_White.svg'
            }
            h={50}
          />
        </div>
        <Group gap={4}>
          <UserButton
            user={{
              avatar: user?.pictureUrl,
              name: user?.name,
              username: user?.username,
            }}
            compact
          />
          <ActionIcon
            variant="default"
            size={32}
            onClick={() => menu.open()}
            c="var(--text-color)"
          >
            <IconMenu2 />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  )
}