import { StoryElement } from "@/components/story";
import {
  Anchor,
  Blockquote,
  Card,
  Container,
  Divider,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { randomId } from "@mantine/hooks";
import { Showcase } from "@/components/commons";

export default function Page() {
  return (
    <Container>
      <Hero />
      <TLDR />
      <Explanation />
      <Story />
      <Thanks />
    </Container>
  );
}

const Hero = () => (
  <Showcase
    size={0.78}
    content={[
      <Group p={10} spacing={10} position="right">
        <Image src="/images/doruk-vefa.jpg" maw={225} mah={225} radius={8} />
      </Group>,
      <Stack spacing={0} maw={500} mx="auto">
        <Title order={1} weight={800} size={36} sx={{ letterSpacing: -1 }}>
          My Story
        </Title>
        <Title order={2} weight={600} size={20} color="dimmed">
          A summary of my life and personality.
        </Title>
        <Text my={12} size="md">
          I give an extraordinary vibe. A nerd inventor who loves design and
          art, also writes songs and storms the stage, tells inspiring words
          like a cult leader.
        </Text>
        <Text size="md">
          My friends say <b>I got hero's backstory</b>.
        </Text>
      </Stack>,
    ]}
  />
);

const TLDR = () => {
  const story = [
    `I design products, build software and run business.`,
    <>
      My life's mission is to <b>make human civilization +1% better</b>.
    </>,
    <>
      I founded{" "}
      <Anchor
        href="https://dorkodu.com"
        weight={700}
        color="blue"
        td="underline">
        Dorkodu
      </Anchor>
      , a tech startup to liberate the humankind.
    </>,
    <>
      I recently joined{" "}
      <Anchor
        href="https://boun.edu.tr"
        weight={700}
        color="blue"
        td="underline">
        Bogazici University
      </Anchor>{" "}
      as a student/researcher.
    </>,
    <>
      I sing, write songs and play guitar @{" "}
      <Anchor
        href="https://instagram.com/theterraspark"
        weight={700}
        color="blue"
        td="underline">
        Terraspark
      </Anchor>
      .
    </>,
    `My childhood dream was to be an inventor.`,
  ];

  return (
    <Container size={640} py={50}>
      <Card withBorder shadow="xs">
        <Title order={2}>TL;DR</Title>
        <Divider mb={20} />

        <List spacing={2} center icon={<Text size="lg">∗</Text>}>
          {story.map(($) => (
            <List.Item key={randomId()}>
              <Text>{$}</Text>
            </List.Item>
          ))}
        </List>
      </Card>
    </Container>
  );
};

const Explanation = () => (
  <Container size={640}>
    <Title order={2} mb={4}>
      FAQs
    </Title>
    <Divider mb={20} />

    <Stack spacing={20}>
      <StoryElement
        {...{
          title: "Why?",
          text: `
            I want to live a free, happy and meaningful life. I believe
            this is a fundemental human right; a livable world & a life worth living.
          `,
          subtext: `
            So we need to come together, and create this utopic dream life for everyone.
          `,
        }}
      />

      <StoryElement
        {...{
          title: "How?",
          text: `
            I am passionate in designing products and building software. I am an
            autodidact (self-taught) so I teach myself the arts of my work.
          `,
        }}
      />

      <Text>
        I want to fulfill my purpose in this life, be remembered as an{" "}
        <b>inventor</b>, <b>innovator</b>, <b>artist</b>, a <b>cult leader</b>;
        or in a single word, a{" "}
        <b>
          <u>protagonist</u>
        </b>{" "}
        in the story of human.
      </Text>
    </Stack>
  </Container>
);

const Story = () => {
  return (
    <Container size={640} my={50}>
      <Title order={2}>The Hero's Journey</Title>
      <Divider mb={20} />

      <Stack spacing={16}>
        <Text>
          I was a curious and artistic child, and my mom did teach me how to
          read and write when I was <b>3</b>. I loved tinkering with gadgets, to
          understand how they work and how to build my own things.
        </Text>

        <Text size="lg">
          <Text weight={600}>
            I've always dreamed to be an inventor since then.
          </Text>
          <Text color="dimmed">This was the start in my life.</Text>
        </Text>

        <Text>
          When I started elementary school, I spent my whole time reading about
          history and picturing the moments, drawing battle scenes, maps, events
          which I just read. This was exciting until I met the dark face of
          human.
        </Text>

        <Blockquote>
          <Text color="dimmed">
            For the loser now, will be later to win
            <br />
            For the times they are a-changin'
          </Text>
          <Text weight={600} color="dimmed" my={8}>
            — Bob Dylan
          </Text>
        </Blockquote>

        <Text>
          I learned to code when I was <b>10</b>, and this was a milestone in my
          journey. You can build anything you want, and let everyone use it.
          What you can do is limited only by your skills and imagination.
        </Text>

        <Text>
          My secondary school years were spent on{" "}
          <b>a search for meaning for my life.</b> Personal projects and{" "}
          <b>technical/artistic experimentation</b>. Just curiosity.
        </Text>

        <Text>
          Dorkodu was born when I first branded all my work under an umbrella
          name, I was in secondary school back then. Simple formula:{" "}
          <b>Doruk + Code = Dorkodu</b>.
        </Text>

        <Text>
          After a boring but successful exam year, I entered <b>Vefa Lisesi</b>,
          a historical high school in Istanbul. There also I met my close
          friends <b>Berk</b> and <b>Emir</b> who joined me with the foundations
          of our startup <b>Dorkodu</b> and our rock band <b>Terraspark</b>.
        </Text>

        <Text>
          I switched to the Web as a platform for developing software. Eureka! A
          moment of enlightment. Then I discovered the internet's unifying power
          for our civilization.
        </Text>

        <Text>I thought... Maybe there is a room for improvement.</Text>

        <Text>
          I see <b>gamification</b> as a promising method we can use to fix
          broken parts of human systems and productivity,{" "}
          <b>we can bring meaning back to technology.</b>
        </Text>

        <Text color="dimmed" weight={500}>
          This is what I dedicated the first chapter of my career to.
        </Text>

        <Text>
          You can visit{" "}
          <Anchor
            href="https://dorkodu.com"
            title="Dorkodu"
            color="blue"
            weight={600}>
            Dorkodu's website
          </Anchor>{" "}
          to learn more about who we are and what we do.
        </Text>
      </Stack>
    </Container>
  );
};

const Thanks = () => (
  <Container size={720}>
    <Title order={2}>Special Thanks</Title>
    <Text size="lg" color="dimmed" weight={500}>
      These are my heros. I owe them my life.
    </Text>
    <Divider mt={8} mb={30} />

    <SimpleGrid
      spacing={10}
      breakpoints={[
        {
          cols: 2,
          minWidth: 450,
        },
        {
          cols: 3,
          minWidth: 600,
        },
      ]}>
      <Image src="/images/idols/steve.jpg" alt="Steve Jobs" radius={10} />
      <Image src="/images/idols/floyd.jpg" alt="Pink Floyd" radius={10} />
      <Image src="/images/idols/ataturk.jpg" alt="Ataturk" radius={10} />
      <Image src="/images/idols/syd.jpg" alt="Syd Barrett" radius={10} />
      <Image src="/images/idols/dylan.jpg" alt="Bob Dylan" radius={10} />
      <Image src="/images/idols/newton.jpg" alt="Isaac Newton" radius={10} />
      <Image src="/images/idols/rams.jpg" alt="Dieter Rams" radius={10} />
      <Image src="/images/idols/tim.jpg" alt="Tim Berners-Lee" radius={10} />
      <Image src="/images/idols/aaron.jpg" alt="Aaron Schwartz" radius={10} />
    </SimpleGrid>
  </Container>
);
