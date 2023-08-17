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

