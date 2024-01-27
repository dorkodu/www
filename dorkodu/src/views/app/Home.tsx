import { Badge, Box, Button, Card, Divider, Flex, Group, Image, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'

import { useNavigate } from 'react-router-dom'

import Emoji from '#/components/custom/Emoji'
import TextParser from '#/components/util/TextParser'
import { useTrekieStore } from '#/stores/trekieStore'
import { wrapContent } from '#/styles/shared.css'
import HabitCounter from '#/components/custom/HabitCounter'
import NoHabitsCard from '#/components/cards/NoHabitsCard'
import NoGoalsCard from '#/components/cards/NoGoalsCard'
import { IconPin, IconPinned } from '@tabler/icons-react'

import { IconPinnedFilled } from '@tabler/icons-react'
import { IHabit } from '../../../../core/src/types'

import { vanilla } from '#/styles/theme'
import { useSocialStore } from '@core/stores/socialStore'
import { useMediaQuery } from '@mantine/hooks'
import { DailyStats } from '#/components/cards/DailyStats'

function Home() {
  const navigate = useNavigate()
  const isMobile = useMediaQuery(vanilla.smallerThan("sm"))

  const user = useTrekieStore($ => $.user)

  return (
    <Stack gap="xs" m="xs">
      <Title order={4} className={wrapContent}>
        <Emoji emoji="👋" /> Welcome,{' '}
        <TextParser ids={['emoji']} text={user?.name ?? ''} />
      </Title>

      <Text>
        Hey! Welcome to <b>your social & gamified life companion.</b>
      </Text>

      {isMobile && <DailyStats />}

      {Goals}
      {PinnedHabits}
      {Habits}
    </Stack>
  )
}

export default Home

const Habits = (
  <section>
    <Title order={4}>Habits</Title>
    <Divider mb={8} />
    <UserHabitSummary />
  </section>
)

const PinnedHabits = (
  <section>
    <Divider
      mb={8}
      label={
        <>
          <IconPinned />
          Pinned
        </>
      }
      labelPosition="left"
      styles={{ label: { fontSize: 14, fontWeight: 600 } }}
    />
    <Box
      style={{
        background: vanilla.colors.gray.light,
        padding: 6,
        borderRadius: 20,
      }}
    >
      <Stack gap={0}></Stack>
      <Flex>
        <Badge variant="light" color="gray" mx="auto">
          {false ? 'Your favorite habits' : 'No pinned habits'}
        </Badge>
      </Flex>
    </Box>
  </section>
)

function UserHabitSummary() {
  const habits = useTrekieStore($ => $.habits)
  const habitCount = useTrekieStore($ => $.habitCount())
  const hasAnyHabits = habitCount > 0

  if (!hasAnyHabits) return <NoHabitsCard />

  return (
    <Box
      style={{
        background: vanilla.colors.gray.light,
        padding: 6,
        borderRadius: 20,
      }}
    >
      <Stack gap={0}>
        {Object.keys(habits).map(habitId => (
          <HabitCounter habitId={habitId} key={habitId} />
        ))}
      </Stack>
      <Flex>
        <Badge variant="light" color="gray" mx="auto">
          Check your daily habits!
        </Badge>
      </Flex>
    </Box>
  )
}

function LifeGoalSummary() {
  const hasAnyLifeGoals = false

  if (!hasAnyLifeGoals) return <NoGoalsCard />

  return (
    <Box>
      <Stack>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>
    </Box>
  )
}

const Goals = (
  <section>
    <Title order={4}>Life Goals</Title>
    <Divider mb={8} />
    <LifeGoalSummary />
  </section>
)
