import { GithubUser, fetchGithubUser } from "@/lib/github";
import {
  Badge,
  Button,
  Card,
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
import CenterLoader from "@shared/components/loaders/CenterLoader";
import { IconBuilding } from "@tabler/icons-react";
import { useState } from "react";

export function GitHubProfileCard({
  username,
  width = 400,
}: {
  username: string;
  width: number;
}) {
  const [user, setUser] = useState<GithubUser | null>(null);

  if (user == null) {
    fetchGithubUser(username).then((user) => {
      setUser(user);
    });
  }

  return (
    <Paper p={10} withBorder shadow="md" maw={width} mih={100} m={10}>
      {user ? (
        <>
          <Group position="apart" align="flex-start">
            <Group spacing={10}>
              <Image
                src={user.avatarURL}
                alt={user.name}
                width={60}
                height={60}
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
              <Button variant="filled" color="dark" radius="md" size="sm">
                Follow
              </Button>
            </a>
          </Group>

          <Text my={10} size="sm">
            {user.bio}
          </Text>

          <Divider mt={10} />

          <Group>
            <Text my={10} size="sm">
              <b>{user.publicRepos}&nbsp;</b>
              <Text color="dimmed" span>
                Repos
              </Text>
            </Text>

            {user.publicGists && user.publicGists > 0 && (
              <Text my={10} size="sm">
                <b>{user.publicGists}&nbsp;</b>
                <Text color="dimmed" span>
                  Gists
                </Text>
              </Text>
            )}

            <Text my={10} size="sm">
              <b>{user.followers}&nbsp;</b>
              <Text color="dimmed" span>
                Followers&nbsp;
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

export function GitHubCommitGraph({
  username,
  color = "40bb60",
}: {
  username: string;
  color?: string;
}) {
  return (
    <a href={`https://github.com/${username}`}>
      <Image
        src={`https://ghchart.rshah.org/${color}/${username}`}
        alt={`@${username}`}
      />
    </a>
  );
}
