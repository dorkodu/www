import { Anchor, BackgroundImage, Badge, Box, Button, Card, Center, Flex, Group, Image, List, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title, useMantineColorScheme }
  from '@mantine/core'
import { IconArrowRight, IconBrandProducthunt, IconBuildingStore, IconCheckbox, IconCoins, IconCopyCheck, IconDeviceGamepad, IconGlobe, IconGoGame, IconPhoto, IconRocket, IconSocial, IconSparkles, IconSubtask, IconTallymarks, IconTargetArrow, IconUserCheck, IconUsersGroup, IconWorld, }
  from '@tabler/icons-react'

import Emoji from '#/components/custom/Emoji'

import * as WebsiteStyles from '#/styles/Website.css'

export default function Welcome() {
  return (
    <Stack p={10} mt="4vw" gap="xl">
      <Hero />
      <Products />
      {Mission}
      <Interests />
      {Team}
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

const Products = () => (
  <Paper mt={40}>

    <SimpleGrid my="lg" cols={{ base: 1, sm: 2 }}>

      <Box>
        <Center>
          <Image src={useThemed({ light: "/images/trekie_Brand.svg", dark: "/images/trekie_Brand_White.svg" })} h={100} w="auto" />
        </Center>
      </Box>

      <Stack gap={8}>
        <Text size="lg" lh={1} fw={800} c="dimmed">INTRODUCING TREKIE</Text>
        <Title style={{
          fontSize: 28,
          fontWeight: 750,
          lineHeight: 1.0,
          letterSpacing: -0.65,
        }}>
          Your social and gamified productivity companion app.
        </Title>

        <Group gap={8} mt={4}>
          <Emoji emoji='🥳' size={22} />
          <Text lh="22px">Start gamifying your life today!</Text>
        </Group>

        <Group gap="sm" mt={4}>
          <Button size="md" radius="lg" component='a' href='https://trekie.io' fw={700}>JOIN TREKIE NOW!</Button>
        </Group>
      </Stack>

    </SimpleGrid>
  </Paper>
)

const Contact = (
  <Paper mt={40}>
    <Title ta="center" order={2} fw={800} lts={-0.5}>Contact</Title>
    <Text ta="center">Where we focus our primary work.</Text>

    <SimpleGrid my="lg" cols={{ base: 1, xs: 2, sm: 3 }} maw={800} mx="auto">
      {
        socialLinks.map(link => <Anchor
          //@ts-ignore
          href={link.to} key={link.text}
          classNames={{
            root: WebsiteStyles.Footer.Link,
          }}
        >
          <Group wrap='nowrap' gap={4}>
            <span><link.icon /></span>
            <span>{link.text}</span>
          </Group>
        </Anchor>)
      }
      <Card key={randomId()} radius="lg">
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
          Welcome to your digital mind. Enjoy peace of mind and keep your important notes at your fingertips. <b>Everything is connected and work in harmony.</b>
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
          A new foundation to build a civilizational public town square. Give creators independence from platforms, developers the freedom to build, and users a choice in their experience.
        </Text>
      </Card>
    </SimpleGrid>
  </Paper>
)

const Interests = () => (
  <Paper mt={40}>
    <BackgroundImage
      src="/images/hero-clouds.jpg"
      radius="lg"
      p="md"
    >
      <Title ta="center" style={{
        color: "white",
        textShadow: `0px 1px 3px #346`
      }} order={2} fw={800} lts={-0.5}>Our Interests</Title>
      <Text ta="center" style={{
        color: "white",
        textShadow: `0px 1px 3px #346`
      }}>Where we focus our primary work.</Text>

      <SimpleGrid my="lg" cols={{ base: 1, sm: 2 }}>

        <Card key={randomId()} shadow="sm" radius="lg" className={glassBackground}>
          <Group gap="sm">
            <ThemeIcon size={40} color="blue">
              <IconDeviceGamepad2 size={28} />
            </ThemeIcon>
            <Text fw={600} lh={1.15} size="xl">Gamification</Text>
          </Group>
          <Text mt={10}>Your life, gamified. Enhanced human engagement and motivation. Transforming routine activities into enjoyable and rewarding experiences.</Text>
        </Card>

        <Card key={randomId()} shadow="sm" radius="lg" className={glassBackground}>
          <Group gap="sm">
            <ThemeIcon size={40} color="blue">
              <IconWorld size={28} />
            </ThemeIcon>
            <Text fw={600} lh={1.15} size="xl">Decentralized Web</Text>
          </Group>
          <Text mt={10}>
            A new regenerative ecosystem. You own your data and identity. True user agency on the web. Permissionless and composable protocols. Open source.
          </Text>
        </Card>

        <Card key={randomId()} shadow="sm" radius="lg" className={glassBackground}>
          <Group gap="sm">
            <ThemeIcon size={40} color="blue">
              <IconCopyCheck size={28} />
            </ThemeIcon>
            <Text fw={600} lh={1.15} size="xl">Productivity</Text>
          </Group>
          <Text mt={10}>
            Welcome to your digital mind. Enjoy peace of mind and keep your important notes at your fingertips. Everything is connected and work in harmony.
          </Text>
        </Card>

        <Card key={randomId()} shadow="sm" radius="lg" className={glassBackground}>
          <Group gap="sm">
            <ThemeIcon size={40} color="blue">
              <IconUsersGroup size={28} />
            </ThemeIcon>
            <Text fw={600} lh={1.15} size="xl">Social</Text>
          </Group>
          <Text mt={10}>
            A new foundation to build a civilizational public town square. Give creators independence from platforms, developers the freedom to build, and users a choice in their experience.
          </Text>
        </Card>
      </SimpleGrid>
    </BackgroundImage>
  </Paper>
)

const Mission = (
  <SimpleGrid my="lg" cols={{ base: 1, sm: 2 }}>
    <Card key={randomId()} radius="lg">

      <Badge size="xl" variant="light" radius="md">
        <Text lh={1} fw={750}>MISSION</Text>
      </Badge>

      <Stack gap="8" my="sm">
        <Group wrap='nowrap' gap="xs"><Emoji emoji="💗" size={26} /><Text>Help people find and pursue their true purpose.</Text></Group>
        <Group wrap='nowrap' gap="xs"><Emoji emoji="😊" size={26} /><Text>Create a meaningful life experience for everyone.</Text></Group>
        <Group wrap='nowrap' gap="xs"><Emoji emoji="🌎" size={26} /><Text>Build the utopian dream of heaven on earth.</Text></Group>
      </Stack>
    </Card>

    <Card key={randomId()} radius="lg">
      <Badge size="xl" color="blue" variant="light" radius="md">
        <Text lh={1} fw={750}>GOALS</Text>
      </Badge>

      <Stack gap="2" my="sm">
        <Group wrap='nowrap' gap="xs"><Emoji emoji="➡️" size={22} /><Text>Make gamification mainstream.</Text></Group>
        <Group wrap='nowrap' gap="xs"><Emoji emoji="➡️" size={22} /><Text>Make productivity humane.</Text></Group>
        <Group wrap='nowrap' gap="xs"><Emoji emoji="➡️" size={22} /><Text>Make the web decentralized.</Text></Group>
        <Group wrap='nowrap' gap="xs"><Emoji emoji="➡️" size={22} /><Text>Make social circles geniune.</Text></Group>
      </Stack>
    </Card>
  </SimpleGrid>
)

const Roadmap = (
  <SimpleGrid my="lg" cols={{ base: 1, sm: 2 }}>
    <Card key={randomId()} radius="lg">
      <Group gap="sm">
        <Emoji emoji='🎯' />
        <Text fw={600} lh={1.15} size="xl">Gamification</Text>
      </Group>
      <Text mt={10}>Your life, gamified. Enhanced human engagement and motivation. Transforming routine activities into enjoyable and rewarding experiences.</Text>
    </Card>

  </SimpleGrid>
)

const Values = (
  <Paper p="md" my={50}>
    <Group align="center" justify="center" gap="sm">
      <Emoji emoji='⛩️' />
      <Title ta="center" lts={-1} order={2} size={32} fw={900}>Our Values</Title>
    </Group>

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

const Investors = (
  <Paper p="md" my={50}>
    <Group align="center" justify="center" gap="sm">
      <Emoji emoji='💸' />
      <Title ta="center" lts={-1} order={2} size={32} fw={800}>Our Business</Title>
    </Group>

    <Text mx="auto" maw={600} lh={1.25} my={20} size="lg">
      Sorry, we're not backed by your popular capital fund. And we have no eyes on an exit.
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
    <Text fz={26} fw={400} lh={1.25} ta="center" mx="auto" my={20}>
      Technology has lost its humane spirit. <br />
      Join us to bring meaning back to work.
    </Text>

    <Text>
      Remember when software felt magical?
      Good software used to be an experience.
      It used to be a bicycle for the mind.
    </Text>

    <Text>
      We are building tools for the next generation of human. <b>A gamified and productive life, an enjoyable experience</b>.
    </Text>
  </Paper>
)


const About = (
  <Paper maw={600} my="lg" mx="auto" id='about'>
    <Title order={2} fw={800}>About Us</Title>
    <Text my={10} size="lg">
      We combine gamification, human-centric design with our superior open source technology to create products that help people fulfill their lifes.
    </Text>

    <List icon={<IconArrowRight />}>
      <List.Item></List.Item>
    </List>
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
  <Box my={30}>
    <Title ta="center" order={2} fw={800} lts={-0.5}>Our Team</Title>
    <Text ta="center">First citizens of Dorkodian utopia.</Text>

    <SimpleGrid my="lg" cols={{ base: 1, sm: 2 }}>
      {people.map(member => (
        <Paper key={randomId()} radius="lg">
          <Group wrap="nowrap">
            <Image src={member.photo} w={80} h={80} radius="lg" />
            <Stack gap={0}>
              <Text fw={700} size="xl" lh={1.5}>{member.name}</Text>
              {member.title && <Text fw={600} size="md" c="dimmed" lh={1.25}>{member.title}</Text>}
              <Text>{member.bio}</Text>
              <Group gap={4} my={4}>
                {member.tags.map(tag => <Badge variant="light" color='blue'>{tag}</Badge>)}
              </Group>
            </Stack>
          </Group>
        </Paper>
      ))}
    </SimpleGrid>
  </Box>
)

import { randomId } from '@mantine/hooks'
import { IconDeviceGamepad2 } from '@tabler/icons-react'
import { socialLinks } from '#/data'
import { glassBackground } from '#/styles/shared.css'
import { useThemed, vanilla } from '#/styles/theme'

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
