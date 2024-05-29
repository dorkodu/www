import {
  EducationEntry,
  ProjectEntry,
  WorkExperienceEntry,
} from "@/components/portfolio";

import { education, experience, projects } from "@/data/portfolio";
import {
  Anchor,
  Box,
  Button,
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
import { Showcase } from "@/components/commons";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function Page() {
  return (
    <Container>
      <Hero />
      <Resume />
      <Projects />
    </Container>
  );
}

const Hero = () => {

  return (
    <Showcase
      size={1}
      content={[
        <Group p={10} spacing={10} position="right">
          <Image
            src="/images/berk-dorkodu.jpg"
            maw={250}
            radius={12}
          />
        </Group>,
        <Stack spacing={0}>
          <Title order={1} weight={800} size={36} sx={{ letterSpacing: -1 }}>
            Portfolio
          </Title>
          <Title order={2} weight={600} size={20} color="dimmed">
            My projects, skills and passion.
          </Title>

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
                I build & products and manage our software @&nbsp;
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
              I design and develop video games also @&nbsp;
              <Anchor
                href="https://dorkodu.com"
                color="blue"
                weight={600}
                td="underline">
                Dorkodu
              </Anchor>
              .
            </List.Item>
          </List>

          <Group my="md" spacing="xs">
            <Button
              component="a"
              href="https://github.com/berkcambaz"
              target="_blank"
              radius={12}
              color="dark"
              leftIcon={<IconBrandGithub size={26} />}>
              GitHub
            </Button>
            <Button
              component="a"
              href="https://twitter.com/bercrobat"
              target="_blank"
              radius={12}
              color="blue"
              leftIcon={<IconBrandTwitter size={26} />}>
              Twitter
            </Button>
            <Button
              component="a"
              href="https://linkedin.com/in/berkcambaz"
              target="_blank"
              size="sm"
              radius={12}
              color="cyan"
              leftIcon={<IconBrandLinkedin size={26} />}>
              LinkedIn
            </Button>
          </Group>
        </Stack>,
      ]}
    />
  );
};

const Resume = () => {
  return (
    <Container size={768} my={25}>
      <Title order={2}>Resume</Title>
      <Divider mb={25} />

      <Anchor
        href="/berk-remzi-cv.pdf"
        color="blue"
        weight={600}
        td="underline">
        Download my CV here.
      </Anchor>

      <Box my={25}>
        <Title order={3}>Work Experience</Title>
        <Text>I am an indie hacker, so I only worked freelance or for our own startup.</Text>

        <Stack my={20} spacing={16}>
          {experience.map(($) => (
            <WorkExperienceEntry work={$} key={$.timeFrame} />
          ))}
        </Stack>
      </Box>

      <Box my={40}>
        <Title order={3}>Education</Title>
        <Text>
          I've always learnt independent from school, as a <b>self-taught</b>.
        </Text>

        <SimpleGrid
          my={20}
          breakpoints={[
            {
              cols: 2,
              minWidth: 640,
            },
          ]}>
          {education.map(($) => (
            <EducationEntry edu={$} key={$.timeFrame} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

const Projects = () => (
  <Container size={768} my={50}>
    <Title order={2}>Projects</Title>
    <Divider mb={25} />

    <SimpleGrid
      breakpoints={[
        {
          cols: 2,
          minWidth: 720,
        },
      ]}>
      {projects.map(($) => (
        <ProjectEntry project={$} key={$.title} />
      ))}
    </SimpleGrid>
  </Container>
);


