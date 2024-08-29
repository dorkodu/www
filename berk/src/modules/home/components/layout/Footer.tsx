import { vanilla } from "@/common/styles/theme";
import { Divider, Flex } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function Footer({ children }: PropsWithChildren) {
  return (
    <Flex direction="column" mx="auto" w="100%" maw={vanilla.breakpoints.xs}>
      <Divider size="sm" />
      {children}
    </Flex>
  );
}
