import { Anchor, Badge, Box, Button, Card, Center, Container, Divider, Group, Image, List, Paper, SimpleGrid, Stack, Text, Title }
  from '@mantine/core'

import Emoji from '#/components/custom/Emoji'
import { Tweet } from 'react-tweet'
import { useThemed } from '#/styles/theme'
import { IconArrowRight, IconExternalLink, IconLinkOff } from '@tabler/icons-react'

export default function Press() {
  return (
    <Stack p={10} mt="4vw">
      <Container size={760} p={0}>

        <Group wrap="nowrap" mb={30}>
          <Emoji emoji='📰' size={36} />
          <Stack gap={0}>
            <Title order={1} fw={750} lh={1}>
              Press
            </Title>
            <Title order={2} c="dimmed" fw={600} size={18}>
              Learn more about us, officially.
            </Title>
          </Stack>
        </Group>

        <Title order={2} mt="2vw">Mission</Title>
        <Text>We are the life gamification company.</Text>
        <Text>
          We create <Text span inherit fw={600}>social and gamified productivity apps</Text>{" "}
          and build technology for <Text span inherit fw={600}>decentralized web</Text>.
        </Text>

        <Title order={2} mt="2vw">Story</Title>
        <Stack gap="sm">
          <div>
            <Text>Our founders Doruk and Berk learned to code in their childhoods.</Text>
            <Text c="dimmed" >Always aspiring to be inventors, Doruk was more of an artistic kid. Berk was a child prodigy.</Text>
          </div>
          <div>
            <Text>They first met in Vefa High School @ Istanbul.</Text>
            <Text c="dimmed">Discovering how to mix design and engineering to create magic.</Text>
          </div>
          <div>
            <Text>Our duo publish many open source projects, side hustles and won contests.</Text>
            <Text c="dimmed">Games, tools, software libraries... Even pixel art!</Text>
          </div>
          <Text>Eureka! Doruk marked four keywords for the future of humankind: <br /> <b>gamification, productivity, social, decentralization</b>.</Text>
          <Text size="xl">The rest is history...</Text>
        </Stack>


        <Stack gap={4} pt="lg" mt="3vw" my="lg" id='product' maw={500} mx="auto">
          <Image src="/images/Hero.svg" w="100%" />

          <Text mt={4} lh={1.25} fw={800} c="dimmed" ta="center">OUR PRODUCT</Text>
          <Title style={{
            fontSize: 24,
            fontWeight: 750,
            lineHeight: 1.0,
            letterSpacing: -0.65,
            textAlign: "center"
          }}>
            Trekie is your social and gamified <br /> productivity companion app.
          </Title>

          <Group gap={8} mt={4} justify="center">
            <Emoji emoji='🥳' size={22} />
            <Text lh="22px">Start gamifying your life today!</Text>
          </Group>

          <Group gap={8} justify="center">
            <Button mt={6} size="md" radius="lg" fw={700} maw={240} component='a' href='https://trekie.io'>Go To App</Button>
            <Button mt={6} size="md" radius="lg" fw={700} maw={240} component='a' href='https://trekie.io' variant="light">Website</Button>
          </Group>
        </Stack>

        <Title order={3} pt="lg" mt="3vw">Projects</Title>
        <Divider />

        <SimpleGrid cols={{ base: 1, sm: 2 }} my={20}>
          <Card withBorder shadow="xs">
            <Text fw={700}>Wander</Text>
            <Text mb={4}>Decentralized social knowledge protocol.</Text>
            <Badge radius="md" color='gray' variant="light">Technology</Badge>
          </Card>
          <Card withBorder shadow="xs">
            <Text fw={700}>Sage</Text>
            <Text mb={4}>A minimalist data exchange framework.</Text>
            <Badge radius="md" color='gray' variant="light">Technology</Badge>
          </Card>
        </SimpleGrid>


        <Title order={2} pt="lg" mt="3vw">News</Title>
        <Divider />
        <SimpleGrid cols={{ base: 1, sm: 2 }} my={20}>
          <Stack mt={8} maw={600}>
            <Card>
              <Text c="dimmed" fw={500}>March 6, 2024</Text>
              <Text><b>We built a minimalist in-browser game engine</b> to be the core of our gamification system. Now working to integrate social features.</Text>
            </Card>
            <Card>
              <Text c="dimmed" fw={500}>January 10, 2024</Text>
              <Text>We postponed our project Wander, and terminated all other efforts to prioritize building a product first.</Text>
            </Card>
            <Card>
              <Text c="dimmed" fw={500}>November 26, 2023</Text>
              <Text>We presented Wander, our decentralized social knowledge protocol & SDK project at IPFS Connect event in Istanbul.</Text>
            </Card>
          </Stack>

          <div data-theme="light">
            <Tweet id='1728015250186707206' />
          </div>
        </SimpleGrid>



        <Title order={2}>Contact Us</Title>
        <Divider />
        <p style={{ marginBottom: "4vw" }}>
          If you have any questions, please contact us at <Anchor href="mailto:hey@dorkodu.com">hey@dorkodu.com</Anchor>.
        </p>

      </Container>
    </Stack>)
}
