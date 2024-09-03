import { Flex, Pill, Text } from "@mantine/core";

interface Props {
  name: string;
  items: string[];
}

export default function SkillElement({ name, items }: Props) {
  return (
    <Flex>
      <Text miw={128}>{name}</Text>

      <Flex wrap="wrap" gap={5}>
        {items.map((item, i) => (
          <Pill key={i}>{item}</Pill>
        ))}
      </Flex>
    </Flex>
  );
}
