import { Container } from "@mantine/core";
import { Showcase } from "@shared/components/commons";

export default function Page() {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <Portfolio />
    </Container>
  );
}

const Hero = () => <Showcase content={[<></>, <></>]} />;
const AboutMe = () => <>AboutMe</>;
const Portfolio = () => <>Portfolio</>;
