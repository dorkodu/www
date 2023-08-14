import { Box, Group, Paper, Text, UnstyledButton } from "@mantine/core";

export type ContactInfo = {
  title: string;
  tag?: string;
  link: string;
  icon?: React.ReactNode;
};

export const ContactInfoCard = ({ info }: { info: ContactInfo }) => {
  return (
    <Box maw={250} mx="auto">
      <UnstyledButton component="a" href={info.link} title={info.title}>
        <Paper withBorder p={10} radius="lg">
          <Group noWrap>
            {info.icon}
            <div>
              <Text weight={500}>{info.title}</Text>
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

export const ContactInfoIcon = ({ info }: { info: ContactInfo }) => {
  return (
    <Box maw={250} mx="auto">
      <UnstyledButton component="a" href={info.link} title={info.title}>
        {info.icon}
      </UnstyledButton>
    </Box>
  );
};
