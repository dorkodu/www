import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import { ButtonContainer, Showcase } from "../styles/blame";
import { tokens, ui } from "../styles/prism";
import Page from "../components/Page";
import Bulletpoint from "../components/Bulletpoint";
import { ParagraphTagline } from "../styles/blame";
import { Icon } from "@iconify-icon/react";
import SectionRuler from "../components/SectionRuler";
import Testimonial from "../components/Testimonial";
import Role from "../components/Work/Role";

// images
import IntroIllustration from "../public/images/undraw_dorkodu-work-culture.png";
import { WorkRole } from "../types/dorkodu";
import DescriptiveList from "../components/DescriptiveList";
import DescriptiveItem from "../components/DescriptiveItem";
import CardDeck from "../components/CardDeck";

const meta = {
  title: "work @ dorkodu",
  description: `join the revolution!`,
  keywords: `work @ dorkodu, careers at dorkodu, careers dorkodu, dorkodu jobs, work at dorkodu`,
  url: "/",
  image: {
    src: "/public/images/dorkodu-single.png",
    alt: "dorkodu logo with single letter.",
  },
};

const image = {
  intro: IntroIllustration,
};

const style = {
  hashtag: css`
    color: ${tokens.color.blue(48)};
    font-size: 1.15rem;
    font-weight: 500;
    padding: 0;
    margin: 0 !important;
  `,
  arrowList: css`
    position: relative;
    list-style: none;
    margin: 0 !important;
    padding-left: 1.5em;
    font-size: 1.25rem;

    li:before {
      content: "⇢";
      position: absolute;
      left: 0;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.5rem;
      color: ${tokens.color.gray(75)};
    }
  `,
  p: {
    mission: css`
      font-size: 1.25rem;
      margin: 0;
      font-weight: 400;
    `,
  },
};

const Work: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Showcase>
        <Hero
          title="work"
          tagline="join the revolution!"
          statement="dorkodu is a foundation built for empowering the human
          civilization. we need extraordinary, passionate and hard-working people for this mission."
        >
          <p css={style.hashtag}>
            #software #ui/ux #design #graphics #people #marketing #data #finance
            #legal #operations #economics #legal
          </p>
          <ButtonContainer>
            <Button type="fill" link="#story">
              explore openings
            </Button>
            <Button type="tonal" link="/business">
              sponsor!
            </Button>
          </ButtonContainer>
        </Hero>
        <Polaroid source={image.intro} />
      </Showcase>

      <Showcase>
        <Page.Index
          items={[
            ["#lorem", "lorem"],
            ["#lorem", "lorem ipsum"],
            ["#lorem", "about us"],
            ["#lorem", "open roles"],
            ["#lorem", "some boring stuff"],
          ]}
        />
        <article>
          <h2>opportunities at dorkodu</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            illo sapiente odio nesciunt magnam iure eaque, nemo, blanditiis rem
            impedit placeat optio? Nulla, sequi labore!
          </p>
        </article>
      </Showcase>

      <section>
        <article>
          <h2>open roles</h2>
          <p></p>
        </article>
      </section>

      <CardDeck columns={2}>
        <Role role={roles.SoftwareEngineer} />
        <Role role={roles.WebDeveloper} />
      </CardDeck>

      <section>
        <article>
          <h3>let&apos;s work together!</h3>
          <p>
            at dorkodu, we understand that our worldwide success can only come
            from our diverse workforce.
          </p>
          <Polaroid source={image.intro} description="our team & culture." />
          <p>
            dorkodians relish the freedom to create the next generation of
            technologies in an environment designed to foster collaboration,
            creativity, health and happiness.
          </p>
          <Polaroid source={image.intro} description="our team & culture." />

          <p>
            building &quot;insanely great&quot; products depends on great
            people.
          </p>
          <p>
            dorkodu is where individual imaginations gather together, committing
            to the vaoues that lead to great work.
          </p>
          <p>
            here you will do more than join something, you will add something.
          </p>
          <p></p>
        </article>
      </section>

      <section>
        <article>
          <h2>opportunity is knocking...</h2>
          <p>
            Dorkodu is a startup based in <u>Istanbul</u>. We believe that
            Dorkodu has the potential to help billions of people across the
            globe to get wiser. We create awesome products to pursue our
            mission. We started off as a small team, but now weʼre growing
            rapidly.
          </p>

          <p
            css={css`
              text-align: center !important;
              max-width: 26rem;
              margin: 0 auto;
              padding-right: 1rem;
            `}
          >
            <strong>
              So anyone who joins now can see the future before even outsiders
              can dream about it.
            </strong>
          </p>

          <p
            css={css`
              text-align: center !important;
              max-width: 32rem;
              margin: 0 auto;
              padding-right: 1rem;
            `}
          >
            At Dorkodu, our strategy is simple. We hire the{" "}
            <strong>most knowledgable and passionate</strong> people we can
            find.
          </p>

          <p>
            We place great emphasis on maintaining a humble and intellectually
            honest environment where everyoneʼs opinion is respected and
            peopleʼs contributions are acknowledged and rewarded.
          </p>
        </article>

        <article>
          <h2>Why Dorkodu?</h2>
          <ul>
            <li>
              <p>
                Because you need a <u>purpose</u> at work.
                <br />
                <strong>
                  <u>Because you want do something that matters!</u>
                </strong>
              </p>
            </li>
            <li>
              <p>
                Because you understand that{" "}
                <strong>
                  <u>
                    assuming responsibility is the only way to grow and develop
                    yourself.
                  </u>
                </strong>
              </p>
              <p>
                You don’t grow while you watch sitcoms and chill on your sofa.
                This is true for both your career and your life.
              </p>
            </li>
            <li>
              <p>
                Because you want to{" "}
                <u>
                  <strong>
                    be a part of an awesome team of top-performing individuals.
                  </strong>
                </u>
                You understand that an entourage of self-driven people is the
                best gift for your future.
              </p>
            </li>
            <li>
              <p>
                Because you know to{" "}
                <strong>
                  <u>never surrender an opportunity for short-term security.</u>
                </strong>
                You can always get a cozy secure job, but a chance to join the
                revolution is rare.
              </p>
            </li>
          </ul>

          <h3>What we are looking for...</h3>
          <p>
            Dorkodu is a type of job where{" "}
            <u>
              you are pushed in cold water and you have to learn to swim by
              yourself
            </u>
            . Your personality and your traits matter as much as your technical
            expertise.
          </p>
          <ul>
            <li>
              <p>
                We are looking for an <strong>independent</strong>,{" "}
                <strong>responsible person.</strong>
              </p>
              <p>
                There is no time for micro-management. We expect you to be able
                to carry your own weight and be a reliable partner.
              </p>
            </li>
            <li>
              <p>
                We are looking for a <strong>fast learner</strong>.
              </p>
              <p>
                We may need to use technologies that you never used before. That
                should not scare, but excite you.
              </p>
              <p>
                In most cases we may not even know what we need and you may have
                to propose something.
              </p>
            </li>
            <li>
              <p>
                We are looking for you to <strong>get stuff done</strong>.
              </p>
              <p>
                We work in weekly sprints because we believe in consistent
                delivery over big lengthy releases.
              </p>
            </li>
            <li>
              <p>
                We want you to <strong>be proactive</strong>.
              </p>
              <p>
                We appreciate <u>conviction way more than consensus</u>.
              </p>
              <p>
                Words are nice, opinions are cute; but proactivity in action is
                golden.
              </p>
            </li>
            <li>
              <p>
                We want you to <strong>be an over-communicator</strong>.
              </p>
              <p>
                People here work remote and it’s up to you to show your work,
                explain your ideas or highlight problems.
              </p>
            </li>
            <li>
              <p>
                We want you to <strong>be a partner for your workmates</strong>.
              </p>
              <p>
                Provide guidance and help your workmates when they get stuck.
              </p>
            </li>
          </ul>

          <h3>We are a small team, so…</h3>
          <ul>
            <li>
              <p>
                <strong>
                  Passion for the problem is our <i>nitro</i>.
                </strong>
                Every day is a struggle, but we keep an eye on the prize. We are
                passionate about helping people learn and improve themselves and
                that’s what keeps us going.
              </p>
            </li>
            <li>
              <p>
                <strong>We find a way or a make a way.</strong>
                We focus on difficult problems and need to solve them, for the
                future of humankind.
              </p>
            </li>
            <li>
              <p>
                <strong>
                  We thrive in uncertainty, as we have more questions than
                  answers.
                </strong>
                Not problems, but opportunities to learn new things.
              </p>
            </li>
          </ul>

          <h3>Benefits</h3>
          <ul>
            <li>
              <p>
                <strong>Be an early “workmate”.</strong>
              </p>
              <p>
                Join our high-growth startup to learn new skills and fast track
                your career growth.
                <strong>Grow to be a company leader in the future.</strong>
                Get management opportunities and run your team, even your
                project.
              </p>
            </li>
            <li>
              <p>
                <strong>You can make your own schedule.</strong>
              </p>
              <p>
                <em>(As long as things happen on time and on spec.)</em>
              </p>
            </li>
            <li>
              <p>
                <strong>Remote-first:</strong> We don’t care when and where you
                work from.
              </p>
            </li>
            <li>
              <p>
                Potential for <strong>stock options</strong> package.
              </p>
            </li>
          </ul>
        </article>
      </section>

      <section>
        <h2>
          <span>hello, again.</span>&nbsp;
          <Icon icon="fluent-emoji-flat:waving-hand-light" size={36} />
        </h2>
        <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
          <p css={style.p.mission}>
            <ParagraphTagline>our purpose</ParagraphTagline>
            <b>we liberate the humankind. </b>
            <br />
            we work to...
          </p>
          <ul css={style.arrowList}>
            <li>help people find and follow their true purpose.</li>
            <li>create a free and happy life experience for everyone.</li>
            <li>build the utopian dream of heaven on earth.</li>
          </ul>
          <p css={style.p.mission}>
            <b>...with our meaningful products & technology.</b>
          </p>
        </Bulletpoint>
        <Bulletpoint icon="twemoji:bullseye">
          <p css={style.p.mission}>
            <ParagraphTagline>our mission</ParagraphTagline>
            we combine gamification, human-friendly design and our superior
            technology; to create masterpiece products which...
          </p>
          <ul css={style.arrowList}>
            <li>empower human brilliance.</li>
            <li>.</li>
          </ul>
        </Bulletpoint>
        <SectionRuler />
      </section>
      <section>
        <article>
          <h3>our company is built on community.</h3>
          <p>
            dorkodu is organized for creativity; by functional specialities
            rather than business units. we’re artists leading artists. in any
            area; technical experts, unique thinkers, feelers with empathy. best
            designers lead design; best software artisans lead software.
          </p>
          <p>this makes dorkodu different from other archaic tech companies.</p>
          <p>
            we prefer to recruit our own talents. if you have prior technical
            experience, that’s awesome! but you have to learn to think “the
            dorkodian way”.
            <b>we are here to help you actualize yourself.</b>
          </p>
          <p>
            find yourself a purpose. do the work you are passionate about. build
            your character. believe in your values. work within your principles.
            make your dreams come true.
          </p>
          <p>
            dorkodu is unique because of our approach to work:
            <b>
              folks who has more experience, intuition and passion always makes
              the right decisions.
            </b>
            we don’t like managers. we love creative people, who think, design
            and build. a craftsperson can easily learn management, marketing,
            sales, finance or any other formal stuff.
          </p>
          <p>
            leaders at dorkodu combine their expertise with important
            characteristics: focus on the details without losing the sight of
            the bigger picture. with a willingness to collaboratively debate
            during collective decision-making. for people here, it’s liberating
            to work with experts who offer relevant guidance and mentoring. this
            approach to leadership is a commitment to collaboration that leads
            to innovation.
          </p>
          <p>
            dorkodu is an equal opportunity employer. employment here is based
            solely upon one’s individual merit and qualifications directly
            related to professional competence. we don’t discriminate on the
            basis of race, color, religion, national origin, ancestry, pregnancy
            status, sex, age, marital status, disability, medical condition,
            sexual orientation, gender identity, or any other characteristics
            protected by law.
          </p>
        </article>
        <Testimonial
          name="doruk eray"
          title="founder & chief"
          quote="dorkodu is where you'll work with others who share your passion. where business serves expertise, where a healthy respect for courage and original thinking  
        inspires you to bring your best to what we do together."
        />
      </section>
      <Hero
        title="life at dorkodu"
        tagline=""
        statement="explore a collaborative culture of inclusion, growth and originality;
        supported by resources that make a difference in your life"
      />

      <Showcase></Showcase>
    </>
  );
};

export default Work;

const roles: Record<string, WorkRole> = {
  SoftwareEngineer: {
    title: "Software Engineer",
    domain: "Technology",
    tags: ["software", "engineering", "backend"],
    summary: `
    Join us,
    Help build the next-generation technology behind Dorkodu's products.
    `,
    location: "Remote/Istanbul",
    type: "Rookie",
    responsibility: [
      `<b>Design, develop and test dorkodu's software components.</b>
       Maintain our codebase, review contributuions and get them ready for production.`,
      `Code complex software using <b>modern web tech stack</b>.`,
      `<b>Data storage</b> — Use database, file system, cache; ensure high performance with efficiency. Implement security and data protection. `,
      `<b>Web API's</b> — Engineer our open web services for maximum performance, developer experience and scale.`,
      `Collaborate with people from Product and Business clans for internal needs.`,
    ],
    requirements: [
      "<b>Strong portfolio</b> featuring your open-source work or own ideas, knowledge mixed into projects.",
      `<b>2+</b> years of experience in building software using <i>modern tech-stack</i> & <i>engineering practices</i>.`,
      "<b>1+</b> years of experience in web platform.",
      `<b>High education</b> (≠ school) <b>or equivalent experience</b> in a technical field; with passion for <u>inventiveness</u>.`,
      `Experience with <b>git</b> and <b>*nix</b> environments.`,
      `You are good at <b>typescript</b>.`,
      `Experience with <b>more than one programming paradigm</b> <em>(functional, OOP, reactive etc.)</em>
       and <b>language</b> <em>(like C/C++, Go, Haskell, Rust, C#, Java, Python etc.)</em>`,
      `Understanding of <b>Computer Science</b> and the <b>philosophy</b> behind software engineering.
       You <b>digested theory</b> <em>(data structures & algorithms etc.)</em> and can apply them in your favorite language.`,
      `You enjoy technical challenges and <b>inventing new stuff.</b>`,
      `<b><u>BONUS</u>;</b> cloud, blockchain, crypto, decentralized web, edge-computing, data science, AI/ML.`,
    ],
  },
  WebDeveloper: {
    title: "Web Developer",
    domain: "Product",
    tags: ["product", "web", "frontend"],
    summary: `Dorkodu needs an experienced Full-Stack Web Developer who will bring new product ideas to life by developing progressive web apps.`,
    location: "Remote/Istanbul",
    type: "Rookie",
    responsibility: [
      `<b>Design, develop and test dorkodu's web software & design components.</b>
       Maintain our web platform code, review contributuions and get them ready for production.`,
      `code complex frontends using <b>modern web tech stack</b>.`,
      `Take UI/UX designs and turn them into something alive, a prototype web app frontend.`,
      `Involve in development and prototyping of our cross-platform unique design system components using web stack.`,
      `Integrate frontend and backend code, ensuring design & function integrity.`,
      `Work closely with creative people from 'art' clan.`,
    ],
    requirements: [
      `With either a <b>solid work background</b> or a <b>strong portfolio</b> featuring your open-source work/self-started projects.`,
      `<b>1+</b> years of experience in building software using <i>modern tech-stack</i> & <i>engineering practices</i>.`,
      `<b>2+</b> years of experience in web platform.`,
      `Are you fluent in acronyms? <b>HTML, CSS, JS/TS, SPA, PWA...</b> Can you make them work together with your eyes closed?`,
      `This role is focused on frontend, but a little backend experience is needed.`,
      `Experience with <b>Git</b> and <b>*nix</b> environments.`,
      `You are good at <b>TypeScript</b> and <b>CSS</b>.`,
      `Experience with <b>React, Vite, Next.js, Zustand/Redux</b> and a <b>CSS methodology</b> <em>(Emotion, Tailwind, SCSS, Styled-Components etc.)</em>`,
      `Knowledge of <b>a major programming language</b>
      <em>(like C/C++, Go, Haskell, Rust, C#, Java, Python etc.)</em>`,
      `Understanding of <b>software engineering philosophies</b>.`,
      `You enjoy <b>tinkering with challenges</b>, e.g. implementing sophisticated user interfaces.`,
      `<b><u>BONUS</u>;</b> UI/UX design, graphics, new user platforms like VR/AR, advanced web technologies, open-source etc.`,
    ],
  },
  WebDeveloper: {
    title: "Web Developer",
    domain: "Product",
    tags: ["product", "web", "frontend"],
    summary: `Dorkodu needs an experienced Full-Stack Web Developer who will bring new product ideas to life by developing progressive web apps.`,
    location: "Remote/Istanbul",
    type: "Rookie",
    responsibility: [
      `<b>Design, develop and test dorkodu's web software & design components.</b>
       Maintain our web platform code, review contributuions and get them ready for production.`,
      `code complex frontends using <b>modern web tech stack</b>.`,
      `Take UI/UX designs and turn them into something alive, a prototype web app frontend.`,
      `Involve in development and prototyping of our cross-platform unique design system components using web stack.`,
      `Integrate frontend and backend code, ensuring design & function integrity.`,
      `Work closely with creative people from 'art' clan.`,
    ],
    requirements: [
      `With either a <b>solid work background</b> or a <b>strong portfolio</b> featuring your open-source work/self-started projects.`,
      `<b>1+</b> years of experience in building software using <i>modern tech-stack</i> & <i>engineering practices</i>.`,
      `<b>2+</b> years of experience in web platform.`,
      `Are you fluent in acronyms? <b>HTML, CSS, JS/TS, SPA, PWA...</b> Can you make them work together with your eyes closed?`,
      `This role is focused on frontend, but a little backend experience is needed.`,
      `Experience with <b>Git</b> and <b>*nix</b> environments.`,
      `You are good at <b>TypeScript</b> and <b>CSS</b>.`,
      `Experience with <b>React, Vite, Next.js, Zustand/Redux</b> and a <b>CSS methodology</b> <em>(Emotion, Tailwind, SCSS, Styled-Components etc.)</em>`,
      `Knowledge of <b>a major programming/scripting language</b>
      <em>(like Go, PHP, C#, Java, Python etc.)</em>`,
      `Understanding of <b>software engineering philosophies</b>.`,
      `You enjoy <b>tinkering with challenges</b>, e.g. implementing sophisticated user interfaces.`,
      `<b><u>BONUS</u>;</b> UI/UX design, graphics, new user platforms like VR/AR, advanced web technologies, open-source etc.`,
    ],
  },
};
