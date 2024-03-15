import { Anchor, BackgroundImage, Badge, Box, Button, Card, Flex, Group, Image, List, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title, useMantineColorScheme }
  from '@mantine/core'
import { IconArrowRight, IconBrandProducthunt, IconBuildingStore, IconCheckbox, IconCoins, IconCopyCheck, IconDeviceGamepad, IconGlobe, IconGoGame, IconPhoto, IconRocket, IconSocial, IconSparkles, IconSubtask, IconTallymarks, IconTargetArrow, IconUserCheck, IconUsersGroup, IconWorld, }
  from '@tabler/icons-react'

import Emoji from '#/components/custom/Emoji'

import * as WebsiteStyles from '#/styles/Website.css'

export default function Welcome() {
  return (
    <Stack p={10} mt="4vw">
      <Hero />
      <OpenRoles />
    </Stack>
  )
}

const Hero = () => {
  return (
    <Box p={10}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Stack gap={4} justify="center" maw={500} mx="auto">
          <Title order={1} className={WebsiteStyles.Hero.Title}>
            Life <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}>Gamification</Text> Company.
          </Title>
          {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
          <Title order={3} className={WebsiteStyles.Hero.Tagline} c="dimmed">
            Bringing humane spirit back to technology. Let's liberate the humankind, together.
          </Title>

          <Text size="lg" lh={1.25} my="xs" maw={400}>
            We create apps for <Text span inherit fw={600}>gamification</Text> + <Text span inherit fw={600}>productivity</Text>
            and build technology for <Text span inherit fw={600}>decentralized web</Text>.
          </Text>

          <Stack gap="xs" w="80%">
            <Button size="md" >Get Started</Button>
            <Button size="md" variant="light" component='a' href="https://t.me/dorkodu" target="_blank">Join Community</Button>
          </Stack>
        </Stack>

        <Image src="/images/dorkodu-ecosystem.svg" maw={440} mx="auto" />
      </SimpleGrid>
    </Box >
  )
}

const OpenRoles = () => {
  return (
    <Box p={10}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Stack gap={4} justify="center" maw={500} mx="auto">
          <Title order={1} className={WebsiteStyles.Hero.Title}>
            Life <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}>Gamification</Text> Company.
          </Title>
          {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
          <Title order={3} className={WebsiteStyles.Hero.Tagline} c="dimmed">
            Bringing humane spirit back to technology. Let's liberate the humankind, together.
          </Title>

          <Text size="lg" lh={1.25} my="xs" maw={400}>
            We create apps for <Text span inherit fw={600}>gamification</Text> + <Text span inherit fw={600}>productivity</Text>
            and build technology for <Text span inherit fw={600}>decentralized web</Text>.
          </Text>

          <Stack gap="xs" w="80%">
            <Button size="md" >Get Started</Button>
            <Button size="md" variant="light" component='a' href="https://t.me/dorkodu" target="_blank">Join Community</Button>
          </Stack>
        </Stack>

        <Image src="/images/dorkodu-ecosystem.svg" maw={440} mx="auto" />
      </SimpleGrid>
    </Box >
  )
}
