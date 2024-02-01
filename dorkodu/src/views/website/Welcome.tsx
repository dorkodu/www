import { BackgroundImage, Badge, Box, Button, Card, Flex, Group, Image, List, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title, useMantineColorScheme }
  from '@mantine/core'
import { IconArrowRight, IconBrandProducthunt, IconBuildingStore, IconCheckbox, IconCoins, IconCopyCheck, IconDeviceGamepad, IconGlobe, IconGoGame, IconPhoto, IconRocket, IconSocial, IconSparkles, IconSubtask, IconTallymarks, IconTargetArrow, IconUserCheck, IconUsersGroup, IconWorld, }
  from '@tabler/icons-react'

import Emoji from '#/components/custom/Emoji'

import * as WebsiteStyles from '#/styles/Website.css'

export default function Welcome() {
  return (
    <Stack p={10} mt="4vw">
      <Hero />

      {Interests}
      {About}
      {Mission}
      {Team}
      {Features}
      {Join}
      <FAQ />
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
            Bringing meaning back to technology. Then we liberate the humankind.
          </Title>

          <Text size="lg" lh={1.25} my="xs" maw={400}>
            We create apps for <Text span inherit fw={600}>gamification</Text> + <Text span inherit fw={600}>productivity</Text>{" "}
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

const Interests = (
  <Paper mt={40}>
    <Title ta="center" order={2} fw={800} lts={-0.5}>Our Interests</Title>
    <Text ta="center">Where we focus our primary work.</Text>

    <SimpleGrid my="lg" cols={{ base: 1, sm: 2 }}>

      <Card key={randomId()} withBorder shadow="sm" radius="lg">
        <Group gap="sm">
          <ThemeIcon size={40} variant="gradient">
            <IconDeviceGamepad2 size={28} />
          </ThemeIcon>
          <Text fw={600} lh={1.15} size="xl">Gamification</Text>
        </Group>
        <Text mt={10}>Your life, gamified. Enhanced human engagement and motivation. Transforming routine activities into enjoyable and rewarding experiences.</Text>
      </Card>

      <Card key={randomId()} withBorder shadow="sm" radius="lg">
        <Group gap="sm">
          <ThemeIcon size={40} variant="gradient">
            <IconWorld size={28} />
          </ThemeIcon>
          <Text fw={600} lh={1.15} size="xl">Decentralized Web</Text>
        </Group>
        <Text mt={10}>
          A new regenerative ecosystem.  <b>You own your data and identity.</b> True user agency on the web. Permissionless and composable protocols. Open source.
        </Text>
      </Card>

      <Card key={randomId()} withBorder shadow="sm" radius="lg">
        <Group gap="sm">
          <ThemeIcon size={40} variant="gradient">
            <IconCopyCheck size={28} />
          </ThemeIcon>
          <Text fw={600} lh={1.15} size="xl">Productivity</Text>
        </Group>
        <Text mt={10}>

        </Text>
      </Card>

      <Card key={randomId()} withBorder shadow="sm" radius="lg">
        <Group gap="sm">
          <ThemeIcon size={40} variant="gradient">
            <IconUsersGroup size={28} />
          </ThemeIcon>
          <Text fw={600} lh={1.15} size="xl">Social</Text>
        </Group>
        <Text mt={10}>
          Time to liberate a building block for the modern life.
        </Text>
      </Card>
    </SimpleGrid>
  </Paper>
)

const Features = (
  <Paper p="md" my={50}>
    <Group align="center" justify="center" gap={6}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128"><path fill="#424242" d="M87.4 124H40.6c-4.7 0-8.6-3.8-8.6-8.6V12.6C32 7.9 35.9 4 40.6 4h46.8c4.7 0 8.6 3.8 8.6 8.6v102.9c0 4.7-3.9 8.5-8.6 8.5z" /><path d="M86.77 120.11H39.93c-2.15 0-3.89-1.74-3.89-3.89V19.65c0-2.14 1.74-3.88 3.88-3.88h48.15c2.15 0 3.89 1.74 3.89 3.89v95.93c0 .93-1.4 4.52-5.19 4.52z" /><path fill="#212121" d="M73.65 11.59h-19.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h19.1c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.1 1.2z" /><path fill="#757575" d="M87.4 6c3.64 0 6.6 2.96 6.6 6.6v102.9c0 3.58-2.96 6.5-6.6 6.5H40.6c-3.64 0-6.6-2.96-6.6-6.6V12.6C34 9.02 37.02 6 40.6 6h46.8m0-2H40.6C35.9 4 32 7.9 32 12.6v102.8c0 4.8 3.9 8.6 8.6 8.6h46.8c4.7 0 8.6-3.8 8.6-8.5V12.6C96 7.8 92.1 4 87.4 4z" /><path fill="#EAB56E" d="M48.35 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" /><path fill="#FB8C00" d="M60.9 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" /><path fill="#FF80AB" d="M73.45 29.96H67.1c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.33 1.32z" /><path fill="#0288D1" d="M86.01 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" /><path fill="#00BFA5" d="M48.35 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" /><path fill="#81D4FA" d="M60.9 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" /><path fill="#FB8C00" d="M73.45 44.12H67.1c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.33 1.32z" /><path fill="#EAB56E" d="M86.01 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" /><path fill="#FB8C00" d="M48.35 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" /><path fill="#FF80AB" d="M60.9 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" /><path fill="#00BFA5" d="M73.45 58.28H67.1c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.33 1.32z" /><path fill="#0288D1" d="M86.01 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32zM48.35 72.44h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" /><path fill="#81D4FA" d="M60.9 72.44h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32zm-12.55 42.48h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.32 1.32z" /><path fill="#0288D1" d="M60.9 114.92h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.32 1.32z" /><path fill="#00BFA5" d="M73.45 114.92H67.1c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.33 1.32z" /><path fill="#FF80AB" d="M86.01 114.92h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.32 1.32z" /></svg>
      <Title ta="center" order={2} size={32} fw={800}>Features</Title>
    </Group>

    <Text mx="auto" maw={600} lh={1.25} my={20} size="lg">
      Working with Trekie is fun! You <b>track your habits</b> with bite-sized actions every day, earn <b>XP</b> and <b>coins</b> while getting better at real world.
    </Text>

    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} mt={40}>
      {[
        {
          icon: IconTargetArrow,
          title: 'Life Goals',
          description:
            'Tell the world about what you want.',
        },
        {
          icon: IconCopyCheck,
          title: 'Habits',
          description:
            'Keep track of your regular to-dos.',
        },
        {
          icon: IconRocket,
          title: 'Momentum',
          description:
            'See how well you are doing.',
        },
        {
          icon: IconSparkles,
          title: 'XP',
          description:
            'Life = Experience. See your score!',
        },
        {
          icon: IconCoins,
          title: 'Coins',
          description:
            'Earn rewards for your commitments.',
        },
        {
          icon: IconPhoto,
          title: 'Stories',
          description:
            'Share memories from your journey.',
        },
        {
          icon: IconUsersGroup,
          title: 'Community',
          description:
            'Connect with others.',
        },
        {
          icon: IconUserCheck,
          title: 'Profile & Follows',
          description:
            "Show your friends what's news.",
        },
        {
          icon: IconBuildingStore,
          title: 'Marketplace',
          description:
            'Buy boosts, features, and life packs.',
        },
      ].map(Feature => (
        <Card withBorder key={randomId()} p={6} radius="lg">
          <Group gap={10} wrap="nowrap" align="flex-start">
            <ThemeIcon variant="gradient" gradient={{ from: "green", to: "teal" }} size={42} radius={12}>
              <Feature.icon stroke={2.25} size={26} />
            </ThemeIcon>
            <Stack gap={0}>
              <Title order={3} fw={700} lh={1.25} mt={2} fz={16}>
                {Feature.title}
              </Title>
              <Text size="sm" >{Feature.description}</Text>
            </Stack>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  </Paper>
)

const Join = (
  <Paper>
    <Title></Title>
  </Paper>
)

const Mission = (
  <Paper>
    <Title>Why?</Title>
    <Text>
      We need to create the next generation human. <br />
      This is a civilizational moment in human history. <br />
      We will go extinct, or will adapt to our new digital-native reality.
    </Text>
    <Text>
      Your life fulfillment companion. Know who you are and where you want to
      go. We will assist in that way.
    </Text>
    <Text>
      {[
        'original',
        'authentic',
        'self-aware',
        'idealist',
        'high-grit',
        'optimist',
        'emphatetic',
        'belonged',
        'humane',
      ]}
    </Text>
    <Text>
      Connect with your real close friends, people you love, work on yourself
      while seeing yourself get better every day.
    </Text>
    <Text>
      Relax and be your true authentic self. Get to know yourself better, find
      your purpose and passion for life. Set goals, add habits and todos.
    </Text>
    <Text>
      Be motivated, commit to your goals, track your actions and see yourself
      making progress.
    </Text>
    <Text>Be optimist, happy and enjoy a peace of mind.</Text>
  </Paper>
)


const About = (
  <Paper maw={600} my="lg" mx="auto" id='about'>
    <Title order={2}>About Us</Title>
    <Text my={10}>
      We combine gamification, human-centric design with our superior open source technology to create products that help people fulfill their lifes.
    </Text>

    <Title order={3}>Why?</Title>
    <Text></Text>

    <Title order={3}>How?</Title>
    <Text></Text>
  </Paper>
)


const people = [
  {
    name: "Doruk Eray",
    title: "Founder & Chief",
    bio: "Polymath, Craftsman, Designer.",
    tags: ["product", "business", "software", "design"],
    photo: "/images/team/doruk.png"
  },
  {
    name: "Berk Cambaz",
    title: "Chief Technologist",
    bio: "Co-Founder, Engineer, Swiss-knife.",
    tags: ["technology", "software", "infrastructure"],
    photo: "/images/team/berk.png"
  },
  {
    name: "Ahmet Erdem",
    title: "Chamberlain",
    bio: "Finance, Management, Economics.",
    tags: ["business", "finance", "management"],
    photo: "/images/team/erdem.png"
  },
  {
    name: "Furkan G. Yıldırım",
    bio: "Community & PR",
    tags: ["media", "community"],
    photo: "/images/team/furkan.png"
  },
]

const Team = (
  <Box>
    <Title order={2}>Our Team</Title>
    <SimpleGrid my="lg" cols={{ base: 1, sm: 2 }}>
      {people.map(member => (
        <Card key={randomId()} radius="lg" p="sm">
          <Group wrap="nowrap">
            <Image src={member.photo} w={100} h={100} radius="lg" />
            <Stack gap={0}>
              <Text fw={700} size="xl" lh={1.5}>{member.name}</Text>
              {member.title && <Text fw={600} size="md" c="dimmed" lh={1.25}>{member.title}</Text>}
              <Text>{member.bio}</Text>
              <Group gap={4} my={4}>
                {member.tags.map(tag => <Badge variant="light" color='blue'>{tag}</Badge>)}
              </Group>
            </Stack>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  </Box>
)

import { randomId } from '@mantine/hooks'
import { IconDeviceGamepad2 } from '@tabler/icons-react'
import { IconDeviceGamepad3 } from '@tabler/icons-react'
import { IconGlobeFilled } from '@tabler/icons-react'

function FAQ() {
  const questions = [
    [
      'Apples',
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    ],
    [
      'Apples',
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    ],
    [
      'Apples',
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    ],
    [
      'Apples',
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    ],
    [
      'Apples',
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    ],
    [
      'Apples',
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    ],
  ]

  return (
    <Paper my={50}>
      <Title ta="center">FAQs</Title>
      <Text ta="center">Frequently Asked Questions</Text>

      <SimpleGrid my="lg" cols={{ base: 1, sm: 2, md: 3 }}>
        {questions.map(faq => (
          <Card key={randomId()} withBorder shadow="sm" radius="lg">
            <Text fw={600} lh={1.15}>
              {faq[0]}
            </Text>
            <Text mt={10} size="sm">
              {faq[1]}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Paper>
  )
}

const text = `      We need to create the next generation human. <br />
This is a civilizational moment in human history. <br />
We will go extinct, or will adapt to our new digital-native reality.`
