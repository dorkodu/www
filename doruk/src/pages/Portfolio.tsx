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
  Grid,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Showcase } from "@shared/components/commons";
import {
  IconBookmark,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <Showcase
      size={1}
      content={[
        <Group p={10} spacing={10} position="right">
          <Image
            src="/images/doruk-music.jpg"
            maw={250}
            mah={250}
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

          <Group my="md" spacing="xs">
            <Button
              component="a"
              href="https://github.com"
              target="_blank"
              radius={12}
              color="dark"
              leftIcon={<IconBrandGithub size={26} />}>
              GitHub
            </Button>
            <Button
              component="a"
              href="https://github.com"
              target="_blank"
              radius={12}
              color="blue"
              leftIcon={<IconBrandTwitter size={26} />}>
              Twitter
            </Button>
            <Button
              component="a"
              href="https://github.com"
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

      <Text my={25}>Cover letter should go here.</Text>

      <Box my={25}>
        <Title order={3}>Work Experience</Title>
        <Text>Lorem ipsum dolor sit amet consectetur.</Text>

        <Stack my={20} spacing={16}>
          {experience.map(($) => (
            <WorkExperienceEntry work={$} key={$.timeFrame} />
          ))}
        </Stack>
      </Box>

      <Box my={25}>
        <Title order={3}>Education</Title>
        <Text>Lorem ipsum dolor sit amet consectetur.</Text>

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
      <Stack my={10} spacing={16}>
        {projects.map(($) => (
          <ProjectEntry project={$} key={$.title} />
        ))}
      </Stack>
    </SimpleGrid>
  </Container>
);

const Skills = () => (
  <Container size={768} my={50}>
    <Title order={2}>Skills</Title>
    <Divider mb={25} />
  </Container>
);
