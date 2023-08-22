import {
  Anchor,
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
import { useNavigate } from "react-router-dom";

export default function Page() {
  return (
    <Container>
      <Hero />
      <Story />
    </Container>
  );
}
const Hero = () => {
  const navigate = useNavigate();

  return (
    <Showcase
      size={1}
      content={[
        <Group p={10} spacing={10} position="right">
          <Image
            src="/images/doruk-student.png"
            maw={320}
            mah={320}
            radius={8}
          />
        </Group>,
        <Stack spacing={0}>
          <Title order={1} weight={800} size={36} sx={{ letterSpacing: -1 }}>
            Hello, world!
          </Title>
          <Title order={2} weight={600} size={20} color="dimmed">
            Welcome to my personal website.
          </Title>
          <Text mt={12} size="md">
            I'm Doruk Eray, a <b>Founder</b>, <b>Polymath</b> and{" "}
            <b>Craftsman</b> from <b>Istanbul</b>. My focus is on software,
            music and business.
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

          <SocialLinks />

          <Group my={5}>
            <Button
              onClick={() => navigate("/portfolio")}
              size="md"
              radius="lg">
              See My Portfolio
            </Button>
            <Button
              onClick={() => navigate("/story")}
              size="md"
              radius="lg"
              variant="light">
              My Story
            </Button>
          </Group>
        </Stack>,
      ]}
    />
  );
};
const Story = () => <></>;
