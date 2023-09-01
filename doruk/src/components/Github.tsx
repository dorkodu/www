import { GithubUser, fetchGithubUser } from "@/lib/github";
import {
  Center,
  Divider,
  Group,
  Image,
  Loader,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";

import { IconBrandGithub } from "@tabler/icons-react";
import { useState } from "react";

export function GitHubProfileCard({
  username,
  width = 400,
  commitGraph = false,
}: {
  username: string;
  width: number;
  commitGraph?: boolean;
}) {
  const [user, setUser] = useState<GithubUser | null>(null);

  if (user == null) {
    fetchGithubUser(username)
      //············
      .then((user) => {
        setUser(user);
      });
  }

  return (
    <Paper p={10} withBorder shadow="xs" maw={width} mih={100} m={10}>
      {user ? (
        <>
          <Group position="apart" align="flex-start">
            <Group spacing={10}>
              <Image
                src={user.avatarURL}
                alt={user.name}
                width={50}
                height={50}
                radius={8}
              />

              <Stack spacing={0}>
                <Text weight={700} size={18}>
                  {user.name}
                </Text>
                <Text weight={400} color="dimmed">
                  @{user.login}
                </Text>
              </Stack>
            </Group>

            <a href={user.htmlURL}>
              <Group>
                <ThemeIcon variant="light" color="gray" radius="md" size="xl">
                  <IconBrandGithub size={28} />
                </ThemeIcon>
              </Group>
            </a>
          </Group>

          <Text my={10} size="sm">
            {user.bio}
          </Text>

          {commitGraph && (
            <div>
              <Image
                src={`https://ghchart.rshah.org/50c060/${username}`}
                alt={`@${username}`}
              />
            </div>
          )}

          <Divider my={10} />

          <Group>
            <Text size="sm">
              <b>{user.publicRepos}&nbsp;</b>
              <Text color="dimmed" span>
                Repos
              </Text>
            </Text>

            <Text size="sm">
              <b>{user.followers}&nbsp;</b>
              <Text color="dimmed" span>
                Followers
              </Text>
            </Text>
          </Group>
        </>
      ) : (
        <Center>
          <Loader variant="dots" color="green" />
        </Center>
      )}
    </Paper>
  );
}

export const GitHubStats: React.FunctionComponent = () => {
  return (
    <img
      src="https://raw.githubusercontent.com/dorukeray/github-stats/master/generated/overview.svg#gh-light-mode-only"
      alt="Doruk Eray's Github Statistics"
    />
  );
};

