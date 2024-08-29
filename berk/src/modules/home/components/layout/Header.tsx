import { vanilla } from "@/common/styles/theme";
import { Divider, Flex, Paper, Space } from "@mantine/core";
import { PropsWithChildren } from "react";

const HEADER_HEIGHT = 64 + 16 * 2;

export default function Header({ children }: PropsWithChildren) {
  return (
    <>
      <Flex
        direction="column"
        h={HEADER_HEIGHT}
        pos="fixed"
        top={0}
        left={0}
        right={0}
        style={{ zIndex: 100 }}
      >
        <Paper mx="auto" w="100%" maw={vanilla.breakpoints.xs} h="100%">
          {children}
        </Paper>

        <Divider size="sm" />
      </Flex>

      <Space h={HEADER_HEIGHT} />
    </>
  );
}
