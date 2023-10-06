import { Group, Stack, Text, ThemeIcon } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export interface IStoryElement {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  text: React.ReactNode;
  subtext?: React.ReactNode;
}

export const StoryElement = ({ icon, title, text, subtext }: IStoryElement) => {
  const isScreenTooSmall = useMediaQuery("(max-width: 420px)");

  return (
    <Group noWrap={!isScreenTooSmall}>
      {icon && (
        <ThemeIcon mb={4} variant="light" radius={12} size={48} color="green">
          {icon}
        </ThemeIcon>
      )}
      <Stack spacing={4}>
        {title && (
          <Text size="lg" weight={700}>
            {title}
          </Text>
        )}
        {text && <Text>{text}</Text>}
        {subtext && <Text color="dimmed">{subtext}</Text>}
      </Stack>
    </Group>
  );
};
