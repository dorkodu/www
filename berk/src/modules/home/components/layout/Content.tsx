import { vanilla } from "@/common/styles/theme";
import { Flex } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function Content({ children }: PropsWithChildren) {
  return (
    <Flex
      direction="column"
      p="md"
      mx="auto"
      w="100%"
      maw={vanilla.breakpoints.xs}
    >
      {children}
    </Flex>
  );
}
