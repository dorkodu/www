import { IEducation, IProject, IWorkExperience } from "@/data/portfolio";
import {
  Card,
  Group,
  Badge,
  Text,
  Stack,
  Box,
  Anchor,
  useMantineTheme,
  Image,
  List,
} from "@mantine/core";
import { IconExternalLink, IconLink, IconWorld } from "@tabler/icons-react";

export function WorkExperienceEntry({ work }: { work: IWorkExperience }) {
  const theme = useMantineTheme();

  return (
    <Card withBorder shadow="xs">
      <Group position="apart" align="flex-start">
        <Stack spacing={0}>
          <Text weight={750} size="xl">
            {work.company}
          </Text>

          <Group spacing={4} noWrap align="center">
            <Anchor href={work.link.to} color="blue">
              {work.link.text}
            </Anchor>
            <IconExternalLink size={20} color={theme.fn.themeColor("blue")} />
          </Group>
          <Text mt={10} color="dimmed">
            {work.role}
          </Text>
        </Stack>

        <Stack spacing={2}>
          <Text weight={500} align="right" size="sm">
            {work.timeFrame}
          </Text>

          <Text color="dimmed" weight={500} align="right" size="sm">
            {work.location}
          </Text>
        </Stack>
      </Group>

      <Box my={16}>{work.description}</Box>

      <Group mt={8} spacing={4} align="center">
        {work.tags.map((tag) => (
          <Badge key={tag} color="green" radius={5} size="md" variant="light">
            {tag}
          </Badge>
        ))}
      </Group>
    </Card>
  );
}

export function EducationEntry({ edu }: { edu: IEducation }) {
  return (
    <Box maw={400}>
      <Card withBorder shadow="xs" py="sm" px="md">
        <Group spacing={8} noWrap align="center" position="apart">
          <Stack spacing={2}>
            <Text weight={750} size="lg">
              {edu.place}
            </Text>
            <Text color="dimmed" weight={600}>
              {edu.role}
            </Text>
          </Stack>
          <Image src={edu.image} maw={60} mah={60} radius={4} />
        </Group>

        <Group position="apart" mt="md" spacing={2}>
          <Text size="sm" weight={450}>
            {edu.timeFrame}
          </Text>

          <Text color="dimmed" weight={500} size="sm">
            {edu.status}
          </Text>
        </Group>
      </Card>
    </Box>
  );
}

export function ProjectEntry({ project }: { project: IProject }) {
  const theme = useMantineTheme();

  return (
    <Box maw={400}>
      <Card withBorder shadow="xs" py="sm" px="md">
        <Stack spacing={2}>
          <Text weight={750} size="lg">
            {project.title}
          </Text>
          <Text color="dimmed" weight={600}>
            {project.tagline}
          </Text>

          <Group mt={5} spacing={8} align="center">
            <IconLink color={theme.fn.themeColor("blue")} />

            {project.links.map((link) => (
              <Anchor
                title={link.text}
                href={link.to}
                target="_blank"
                color="blue"
                td="underline"
                weight={500}
                key={link.to}>
                {link.text}
              </Anchor>
            ))}
          </Group>
        </Stack>

        {project.description}

        <Stack spacing={8} my={10}>
          {project.workList.map((item) => (
            <Group spacing={6} noWrap key={item}>
              <Text weight={500} size={16}>
                ∗
              </Text>
              <Text size="sm">{item}</Text>
            </Group>
          ))}
        </Stack>

        <Group mt={16} spacing={4} align="center">
          {project.tags.map((tag) => (
            <Badge key={tag} color="green" radius={5} size="md" variant="light">
              {tag}
            </Badge>
          ))}
        </Group>
      </Card>
    </Box>
  );
}
