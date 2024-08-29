import { vanilla } from "@/common/styles/theme";
import { Divider, Flex, Paper } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function Footer({ children }: PropsWithChildren) {
  return (
    <Flex direction="column">
      <Divider size="sm" />

      <Paper mx="auto" w="100%" maw={vanilla.breakpoints.xs} h="100%">
        {children}
      </Paper>
    </Flex>
  );
}
