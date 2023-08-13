import { Box, Group, Paper, Text, UnstyledButton } from "@mantine/core";

export type ContactInfo = {
  platform: string;
  tag: string;
  link: string;
  icon: React.ReactNode;
};

export const ContactInfoCard = ({ info }: { info: ContactInfo }) => {
  return (
    <Box maw={250} mx="auto">
      <UnstyledButton component="a" href={info.link} title={info.platform}>
        <Paper withBorder p={10} radius="lg">
          <Group noWrap>
            {info.icon}
            <div>
              <Text weight={500}>{info.platform}</Text>
              <Text color="blue" weight={500} underline>
                {info.tag}
              </Text>
            </div>
          </Group>
        </Paper>
      </UnstyledButton>
    </Box>
  );
};
