import { FunctionComponent } from "react";
import { HeroText, HeroTitle, HeroWithBulletpoints } from "../components/Hero";
import { EmailBanner } from "../components/Newsletter";

const Index: FunctionComponent = () => {
  return (
    <>
      <HeroText />

      <EmailBanner />
    </>
  );
};

export default Index;
