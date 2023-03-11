import { useTheme } from "@emotion/react";
import { Container, Title, Accordion, createStyles, rem, ThemeIcon, useMantineTheme } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function FAQs() {
  const theme = useMantineTheme();

  return (
    <Container
      size="sm"
      sx={{
        paddingTop: `calc(${theme.spacing.md} * 2)`,
        paddingBottom: `calc(${theme.spacing.md} * 2)`,
        minHeight: 650,
      }}
    >
      <Title align="center" sx={{ marginBottom: 20 }} order={2}>
        FAQs
      </Title>

      <Accordion
        variant="separated"
        chevronSize={32}
        chevron={<IconChevronDown size={24} color={theme.colors.gray[6]} />}
        multiple
        styles={{
          item: {
            borderRadius: theme.radius.md,
            marginBottom: theme.spacing.lg,
            border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]}`,
            boxShadow: `2px 2px 8px ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2]}`,
          },
          itemTitle: {},
          label: {
            fontWeight: 500,
            paddingLeft: 16,
            borderRadius: 8,
          },
        }}
      >
        <Accordion.Item value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="another-account">
          <Accordion.Control>Can I create more that one account?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="newsletter">
          <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="credit-card">
          <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="payment">
          <Accordion.Control>What payment systems to you work with?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
