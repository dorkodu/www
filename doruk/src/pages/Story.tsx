import {
  Anchor,
  Badge,
  Button,
  Container,
  Group,
  Image,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Showcase } from "@shared/components/commons";

export default function Page() {
  return (
    <Container>
      <Hero />
      <TLDR />
      <Explanation />
      <Story />
    </Container>
  );
}

const Story: React.FunctionComponent = () => {
  return (
    <Container size={600}>
      <Title order={2}>TL;DR;</Title>
    </Container>
  );
};

const TLDR: React.FunctionComponent = () => (
  <Container>
    <Title order={2}>TL;DR;</Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nobis
      quae cupiditate fugiat aspernatur est, deleniti quas soluta reiciendis
      laborum?
    </Text>
  </Container>
);

const Hero = () => (
  <Showcase
    size={1}
    content={[
      <Group p={10} spacing={10} position="right">
        <Image src="/images/doruk-student.png" maw={320} mah={320} radius={8} />
      </Group>,
      <Stack spacing={0}>
        <Title order={1} weight={800} size={36} sx={{ letterSpacing: -1 }}>
          Hello, world!
        </Title>
        <Title order={2} weight={600} size={20} color="dimmed">
          Welcome to my personal website.
        </Title>
        <Text mt={12} size="md">
          I'm Doruk Eray, a <b>Founder</b>, <b>Polymath</b> and <b>Craftsman</b>{" "}
          from <b>Istanbul</b>. My focus is on software, music and business.
        </Text>

        <List
          icon={
            <Text weight={500} size={18}>
              ∗
            </Text>
          }
          center
          spacing={5}
          mt={10}>
          <List.Item>
            <Text>
              I design products and build software @&nbsp;
              <Anchor
                href="https://dorkodu.com"
                color="blue"
                weight={600}
                td="underline">
                Dorkodu
              </Anchor>
              .
            </Text>
          </List.Item>
          <List.Item>
            I sing, write songs and play guitar @&nbsp;
            <Anchor
              href="https://instagram.com/theterraspark"
              color="blue"
              weight={600}
              td="underline">
              Terraspark
            </Anchor>
            .
          </List.Item>
        </List>

        <Group my={5}>
          <Button size="md" radius="lg">
            See My Portfolio
          </Button>
          <Button size="md" radius="lg" variant="light">
            Read My Story
          </Button>
        </Group>
      </Stack>,
    ]}
  />
);

const Explanation = () => (
  <>
    <Title>Why?</Title>
    <Text>
      i want to live a free, happy and meaningful life. i believe this is a
      fundemental human right; a livable world & a life worth living. so we need
      to come together, and create this utopic dream life for everyone.
    </Text>

    <Title>How?</Title>
    <Text>
      I am passionate in products, design and software. I am an autodidact
      (self-taught) so I teach myself the arts of my work.
    </Text>
    <Group spacing={4}>
      {[
        "Knowledge",
        "Tools of Thought",
        "Human Nature",
        "Psychology",
        "Industrial Design",
        "Cryptoeconomics",
        " Artificial Intelligence",
        "Decentralized Web",
      ].map((text) => (
        <Badge variant="light" color="green" radius={10} size="lg">
          {text}
        </Badge>
      ))}
    </Group>
    <Text>
      I want to fulfill my purpose in this life, be remembered as an{" "}
      <b>inventor</b>, <b>innovator</b>, <b>artist</b>, a <b>cult leader</b>; or
      in a single word, a
      <b>
        <u>protagonist</u>
      </b>
      in the story of human.
    </Text>
  </>
);
