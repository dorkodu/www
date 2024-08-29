import { Anchor, Card, Flex, Text, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

interface Props {
  name: string;
  desc: string[];
  title: string;
  link: string;
  date: string;
}

export default function ExperienceCard({
  name,
  desc,
  title,
  link,
  date,
}: Props) {
  return (
    <Card withBorder shadow="md">
      <Flex direction="column">
        <Flex align="start" justify="space-between" gap="xs">
          <Flex direction="column">
            <Title order={4}>{name}</Title>

            <Anchor href={link} target="_blank">
              <Flex align="center" gap="xs">
                {link.replace("https://", "")}
                <IconExternalLink />
              </Flex>
            </Anchor>
          </Flex>

          <Text ta="right">{date}</Text>
        </Flex>

        <Text c="gray" fw={500}>
          {title}
        </Text>

        <Flex direction="column" gap="xs">
          {desc.map((v, i) => (
            <Text key={i}>{v}</Text>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}
