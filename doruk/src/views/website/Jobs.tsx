import { Alert, Anchor, BackgroundImage, Badge, Box, Button, Card, Flex, Group, Image, List, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title, useMantineColorScheme }
  from '@mantine/core'
import { IconArrowRight, IconBrandGithub, IconBrandProducthunt, IconBrandTelegram, IconBrandTwitter, IconBuildingStore, IconCheckbox, IconCoins, IconCopyCheck, IconDeviceGamepad, IconGlobe, IconGoGame, IconPhoto, IconRocket, IconSocial, IconSparkles, IconSubtask, IconTallymarks, IconTargetArrow, IconUserCheck, IconUsersGroup, IconWorld, }
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
            Work @ <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}>Dorkodu</Text>
          </Title>
          <Title order={3} className={WebsiteStyles.Hero.Tagline} c="dimmed">
            Join our mission to bring meaningful spirit back to human life with gamification.
          </Title>

          <Text size="lg" lh={1.25} my="xs" maw={400}>
            Are you into gamification, productivity, social and decentralized web? You found your place.
          </Text>

          <Stack gap="xs" w="80%">
            <Button size="md" component='a' href="#openings">Explore Open Roles</Button>
            <Button size="md" variant="light" component='a' href="/" target="_blank">About Us</Button>
          </Stack>
        </Stack>

        <Image src="/images/work-at-dorkodu.svg" maw={440} mx="auto" />
      </SimpleGrid>
    </Box >
  )
}

const OpenRoles = () => {
  return (
    <Box my={50} id='openings'>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Stack gap={4} justify="center" maw={500} mx="auto">

          <Group wrap="nowrap">
            <Emoji emoji='💼' size={32} />
            <Stack gap={0}>
              <Title order={2} fw={750} lh={1}>
                Open Roles
              </Title>
              {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
              <Title order={4} c="dimmed" fw={600} size={18}>
                Explore what we can do together.
              </Title>
            </Stack>
          </Group>

          <Group gap="xs" my={8}>
            <Button size="md" color="blue" leftSection={<IconBrandTelegram />}
              component='a' href="https://t.me/dorkodu" target="_blank">Telegram</Button>
            <Button size="md" color="dark" leftSection={<IconBrandGithub />}
              component='a' href="https://github.com/dorkodu" target="_blank">GitHub</Button>
          </Group>
        </Stack>

        <Alert title="No openings currently." maw={460} radius="lg" mx="auto">
          <Text size="sm">We are not actively filling new roles right now but will list future positions here soon. You can express your interest in working with us by sending an email to <Anchor href='mailto:hey@dorkodu.com'>hey@dorkodu.com</Anchor>.</Text>
        </Alert>
      </SimpleGrid>
    </Box >
  )
}
