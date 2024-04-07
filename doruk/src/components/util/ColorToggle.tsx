import { vanilla } from '#/styles/theme'
import {
  SegmentedControl,
  Center,
  useMantineColorScheme,
  MantineSize,
} from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'

function ColorToggle({ size = 'md' }: { size: MantineSize }) {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  const toggle = (value: string) => {
    if (value !== 'light' && value !== 'dark') return
    setColorScheme(value)
  }

  return (
    <SegmentedControl
      radius="md"
      value={colorScheme}
      size={size}
      onChange={toggle}
      data={[
        {
          value: 'light',
          label: (
            <Center>
              <IconSun size={18} stroke={3} color={colorScheme == "light" ? vanilla.colors.yellow[6] : vanilla.colors.dimmed} />
            </Center>
          ),
        },
        {
          value: 'dark',
          label: (
            <Center>
              <IconMoon size={18} stroke={3} color={colorScheme == "dark" ? vanilla.colors.blue[3] : vanilla.colors.dimmed} />
            </Center>
          ),
        },
      ]}
    />
  )
}

export default ColorToggle
