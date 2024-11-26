import { Button, Card, Flex, Image, Text, Title } from "@mantine/core";
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Footer from "./components/layout/Footer";
import SkillElement from "./components/SkillElement";

export default function Page() {
  return (
    <>
      <Header>
        <Flex align="center" gap="xs" px="md" h="100%">
          <Image
            src={`${import.meta.env.BASE_URL}icon-192-maskable.png`}
            w={64}
            h={64}
            radius="md"
          />

          <Flex direction="column" style={{ flex: 1 }}>
            <Title order={3} fw={800}>
              Berk Cambaz
            </Title>
            <Text fw={600} c="dimmed">
              Creator &lowast; Technologist &lowast; Founder
            </Text>
          </Flex>

          {/*<ThemeToggle />*/}
        </Flex>
      </Header>

      <Content>
        <Title order={3}>Experience</Title>
        <ExperienceCard
          name="Dorkodu"
          desc={[
            "I co-founded Dorkodu to develop social & gamified productivity apps while advancing open-source technology.",
            "We are currently building Trekie, social & gamified productivity companion, and also Mindcards, gamified Anki flashcards.",
          ]}
          title="Co-Founder & Founding Technologist"
          link="https://dorkodu.com"
          date="Jan 2021 – Present"
        />

        <Title order={3} pt="md">
          Projects
        </Title>
        <Flex direction="column" gap="xs">
          <ProjectCard
            name="Crewlands"
            desc={[
              "♟️ Easy-to-learn multiplayer turn-based strategy game, fight with other players, capture lands, and play with friends!",
              "⚙️ Custom engine using PixiJS for performance (over 95% faster than DOM).",
            ]}
            link="https://crewlands.com"
          />
          <ProjectCard
            name="Mindcards"
            desc={[
              "Learn anything with gamified flashcards.",
              "🗃️ Create, practice, and share your notes as flashcard decks.",
              "🧠 Boost your learning with interactive quizzes and exercises.",
              "🤖 AI Assistant generates cards from your study materials.",
            ]}
            link="https://mind.dorkodu.com"
          />
          <ProjectCard
            name="Trekie"
            desc={[
              "Your social and gamified productivity companion.",
              "🎮 Gamify your life. It works, backed by science.",
              "🛤️ Track your habits with bite-sized actions every day, earn XP and coins while getting better at real world.",
            ]}
            link="https://trekie.io"
          />
        </Flex>

        <Title order={3} pt="md">
          Skills
        </Title>
        <Card withBorder shadow="md">
          <Flex direction="column" gap="xs">
            <SkillElement name="Language" items={["English", "Turkish"]} />
            <SkillElement
              name="Programming"
              items={["TypeScript", "JavaScript"]}
            />
            <SkillElement
              name="Frontend"
              items={["React", "Next.js", "Zustand", "React Query", "PixiJS"]}
            />
            <SkillElement
              name="Backend"
              items={["Node.js", "Bun", "Express", "tRPC", "Socket.IO"]}
            />
            <SkillElement
              name="Tech"
              items={["PostgreSQL", "Docker", "Git", "Linux", "Nginx"]}
            />
          </Flex>
        </Card>

        <Title order={3} pt="md">
          Education
        </Title>
        <Flex direction="column" gap="xs">
          <EducationCard
            name="Istanbul University"
            desc="BA, Linguistics"
            date="2024 – Present"
            image={`${import.meta.env.BASE_URL}images/istanbul-university.png`}
            status="Freshman"
          />
          <EducationCard
            name="Vefa High School"
            desc="High School Diploma"
            date="2018 – 2023"
            image={`${import.meta.env.BASE_URL}images/vefa-high-school.png`}
            status="3.7/4.0 GPA"
          />
        </Flex>
      </Content>

      <Footer>
        <Flex direction="column" p="md">
          <Flex gap="xs">
            <Button
              component="a"
              href="https://github.com/berkcambaz"
              target="_blank"
              leftSection={<IconBrandGithub />}
              color="dark"
              fz="md"
              mih={48}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="https://www.linkedin.com/in/berkcambaz/"
              target="_blank"
              leftSection={<IconBrandLinkedin />}
              color="cyan"
              fz="md"
              mih={48}
            >
              LinkedIn
            </Button>
          </Flex>
          <Flex align="center" gap="xs" mih={48}>
            <IconMail />
            <Text fw={600}>berkmetinremzi@gmail.com</Text>
          </Flex>
        </Flex>
      </Footer>
    </>
  );
}
