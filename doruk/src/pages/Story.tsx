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
  <Container size={640} py={50}>
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

const Explanation = () => (
  <Container size={640}>
    <Title order={3} mb={4}>
      Why?
    </Title>
    <Text mb="lg">
      <b>
        I want to live a <u>free, happy and meaningful life</u>.
      </b>{" "}
      I believe this is a fundemental human right;{" "}
      <b>a livable world & a life worth living.</b> So we need to come together,
      and create this utopic dream life for everyone.{" "}
    </Text>

    <Title order={3} mb={4}>
      How?
    </Title>
    <Text mb={20}>
      I am passionate in designing products and building software. I am an
      autodidact (self-taught) so I teach myself the arts of my work.
    </Text>
    <Group spacing={4}>
      {[
        ["Software", "blue"],
        ["Music", "cyan"],
        ["Industrial Design", "red"],
        ["Artificial Intelligence", "indigo"],
        ["Knowledge Theory", "violet"],
        ["Psychology", "grape"],
        ["UI/UX Design", "orange"],
        ["Cryptoeconomics", "yellow"],
        ["Gamification", "lime"],
        ["Decentralized Web", "green"],
        ["Semantics", "teal"],
      ].map((text) => (
        <Badge variant="light" color={text[1]} radius={10} size="lg">
          {text[0]}
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
  </Container>
);
