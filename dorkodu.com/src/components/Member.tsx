import Dorkodu from "../types/dorkodu";

import { createStyles, Avatar, Text, Group, Stack } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export function TeamMember({ member }: { member: Dorkodu.TeamMember }) {
  const { classes } = useStyles();

  return (
    <Stack>
      <Avatar src={member.avatar} size={94} radius="md" />

      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        {member.title}
      </Text>

      <Text fz="lg" fw={500} className={classes.name}>
        {member.name}
      </Text>

      <Group spacing={10} mt={3}>
        {member.icons}
      </Group>
    </Stack>
  );
}

export function TheRingMember({ member }: { member: Dorkodu.TeamMember }) {
  const { classes } = useStyles();

  return (
    <div>
      <Group noWrap>
        <Avatar src={member.avatar} size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {member.title}
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            {member.name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            {member.icons}

            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
          </Group>
          <Text fz="sm" c="dimmed" my={5}>
            {member.about}
          </Text>
        </div>
      </Group>
    </div>
  );
}
