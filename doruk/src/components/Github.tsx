import { GithubUser, fetchGithubUser } from "@/lib/github";
import {
  Badge,
  Button,
  Card,
  Divider,
  Group,
  Image,
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
    <Paper p={10} withBorder shadow="md" maw={width}>
      {user ? (
        <>
          <Group position="apart">
            <Group spacing={10}>
              <Image
                src={user.avatarURL}
                alt={user.name}
                width={64}
                height={64}
                radius={8}
              />

              <Stack spacing={0}>
                <Text weight={700} size={20}>
                  {user.name}
                </Text>
                <Text weight={400} color="dimmed">
                  @{user.login}
                </Text>
              </Stack>
            </Group>

            <a href={user.htmlURL}>
              <Button variant="default">Follow</Button>
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

          <Group>
            {user.hireable && (
              <Badge my={10} size="md" variant="dot">
                Available for hire
              </Badge>
            )}
          </Group>
        </>
      ) : (
        <CenterLoader />
      )}
    </Paper>
  );
}

export function GitHubCommitGraph({
  username,
  color,
}: {
  username: string;
  color: string;
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

export function GithubUserCard({ user }: { user: string }) {
  return (
    <iframe
      id={`ghcard-${user}-3`}
      frameBorder="0"
      scrolling="0"
      src={`https://lab.lepture.com/github-cards/cards/default.html?user=${user}&amp;identity=ghcard-${user}-3&amp;client_id=a11a1bda412d928fb39a&amp;client_secret=92b7cf30bc42c49d589a10372c3f9ff3bb310037`}
      width="400"
      height="150"></iframe>
  );
}
