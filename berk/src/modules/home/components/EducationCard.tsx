import { Card, Flex, Image, Text, Title } from "@mantine/core";

interface Props {
  name: string;
  desc: string;
  date: string;

  image: string;
  status: string;
}

export default function EducationCard({
  name,
  desc,
  date,
  image,
  status,
}: Props) {
  return (
    <Card withBorder shadow="md">
      <Flex justify="space-between" gap="xs">
        <Flex direction="column" justify="space-between">
          <Flex direction="column">
            <Title order={4}>{name}</Title>
            <Title order={5} c="dimmed">
              {desc}
            </Title>
          </Flex>

          <Text>{date}</Text>
        </Flex>

        <Flex direction="column" align="end" gap="xs" justify="space-between">
          <Image src={image} w={64} h={64} />
          <Text c="dimmed" fw={500} ta="right">
            {status}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
