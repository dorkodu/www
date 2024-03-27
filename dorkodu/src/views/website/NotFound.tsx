import { Anchor, Button, Center, Flex, Stack, Text, Title } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

  return (
    <Stack maw={460} mx="auto" p={10} mt={"5vw"} mb={"10vw"}>
      <Flex direction="column" align="center">
        <Title fw={900} fz={"15vw"} c="dimmed" opacity={0.25} lh={1}>404</Title>
        <Title fw={900} lh={1} lts={-1}>Not Found</Title>
      </Flex>

      <Text size="xl" maw={460} ta="center" mx="auto" lh={1.25}>
        The page you are looking for was moved, removed, renamed or may have
        never existed.
      </Text>

      <Button component={Link} to="/" size="lg" radius="lg" rightSection={<IconArrowRight />}>
        Go Back Home
      </Button>
    </Stack>
  )
}

export default NotFound
