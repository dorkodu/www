import {
  Anchor,
  Box,
  Button,
  Flex,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'

import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@mantine/hooks'

import * as LayoutStyle from '#/styles/Layout.css'
import * as WebsiteStyle from '#/styles/Website.css'

import { vanilla } from '#/styles/theme'
import ColorToggle from '#/components/util/ColorToggle'

import { socialLinks } from '#/data'

function WebsiteLayout() {

  return (
    <div className={LayoutStyle.Layout.Root}>
      <Header />
      <div className={LayoutStyle.Layout.Body}>
        <main className={LayoutStyle.Layout.Main}>
          <div>
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default WebsiteLayout

function Header() {
  const isMobile = useMediaQuery(vanilla.smallerThan("sm"))

  return (
    <Paper p={10} radius="lg">
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: 10,
          alignContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}>
        <Image
          src="/images/dorkodu_Logo_Colorful.svg"
          h="auto"
          w={250}
          px="md"
        />

        <Paper py={4} px={10}>
          <Group gap={2}>
            {[
              ['About', '/#about'],
              ['Products', '/#products'],
              ['Blog', 'https://dorkodu.substack.com'],
            ].map(link => (
              <Anchor
                component={Link}
                //@ts-ignore
                to={link[1]}
                key={link[1]}
                className={WebsiteStyle.Header.Link}
              >
                {link[0]}
              </Anchor>
            ))}
          </Group>
        </Paper>

        <Group gap={8}>
          <Button>Get Started</Button>
          <ColorToggle size="xs" />
        </Group>
      </Box>
    </Paper>
  )
}


function Footer() {
  return (
    <Box className={WebsiteStyle.Footer.Root}>
      <Group align="flex-start">
        <Stack gap={0} px={10} w={"35%"} miw={200}>
          <Anchor display="block" href="https://dorkodu.com" target="_blank">
            <Image
              src="/images/dorkodu_Logo_Colorful.svg"
              w={150}
              h="auto"
              display="block"
            />
          </Anchor>
          <Text className={WebsiteStyle.Footer.DorkoduMotto} mt={16} my={4} size="sm">
            The Life Gamification Company.
          </Text>
          <Text c="dimmed" fw={500}>
            Dorkodu &copy; {new Date().getFullYear()}
          </Text>
        </Stack>
        <SimpleGrid style={{ flexGrow: 1 }} spacing="xs" cols={{ base: 2, xs: 2, sm: 4 }}>
          <Stack gap={4} p={10}>
            <Text className={WebsiteStyle.Footer.ListTitle}>Company</Text>
            {[
              ['About', '/#about'],
              ['Mission', '/#mission'],
              ['Team', '/#team'],
              ['FAQs', '/#faq'],
            ].map(link => (
              <Anchor
                component={Link}
                //@ts-ignore
                to={link[1]}
                key={link[1]}
                className={WebsiteStyle.Footer.Link}
              >
                {link[0]}
              </Anchor>
            ))}
          </Stack>

          <Stack gap={4} p={10}>
            <Text className={WebsiteStyle.Footer.ListTitle}>Resources</Text>
            {[
              ['Blog', 'https://dorkodu.substack.com'],
              ['Community', 'https://t.me/dorkodu'],
              ['Jobs', '/jobs'],
              ['Press', '/press'],
              ['Contact', '/#contact'],
            ].map(link => (
              <Anchor
                component={Link}
                //@ts-ignore
                to={link[1]}
                key={link[1]}
                className={WebsiteStyle.Footer.Link}
              >
                {link[0]}
              </Anchor>
            ))}
          </Stack>

          <Stack gap={4} p={10}>
            <Text className={WebsiteStyle.Footer.ListTitle}>Legal</Text>
            {[
              ['Terms', '/legal/terms'],
              ['Privacy', '/legal/privacy'],
              ['Community Rules', '/legal/community'],
            ].map(link => (
              <Anchor
                component={Link}
                //@ts-ignore
                to={link[1]}
                key={link[1]}
                classNames={{
                  root: WebsiteStyle.Footer.Link,
                }}
              >
                {link[0]}
              </Anchor>
            ))}
          </Stack>
          <Stack gap={4} p={10}>
            <Text className={WebsiteStyle.Footer.ListTitle}>Social</Text>
            {socialLinks.map(link => (
              <Anchor
                //@ts-ignore
                href={link.to} key={link.text}
                classNames={{
                  root: WebsiteStyle.Footer.Link,
                }}
              >
                <Group wrap='nowrap' gap={4}>
                  <span><link.icon /></span>
                  <span>{link.text}</span>
                </Group>
              </Anchor>
            ))}
          </Stack>
        </SimpleGrid>
      </Group>
    </Box>
  )
}