import { Anchor, Card, Flex, Text, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

interface Props {
  name: string;
  desc: string[];
  link: string;
}

export default function ProjectCard({ name, desc, link }: Props) {
  return (
    <Card withBorder shadow="md">
      <Flex direction="column">
        <Title order={4}>{name}</Title>

        <Anchor href={link} target="_blank">
          <Flex align="center" gap="xs">
            {link.replace("https://", "")}
            <IconExternalLink />
          </Flex>
        </Anchor>

        <Flex direction="column">
          {desc.map((v, i) => (
            <Text key={i}>{v}</Text>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}
