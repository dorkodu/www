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
        <Role role={roles.ProductDesigner} />
      </section>

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
  ProductDesigner: {
    title: "product designer",
    domain: "trekie",
    tags: ["design", "product", "messaging"],
    summary:
      "We are looking for an experienced, creative and passionate Product Designer to play a key role in our engineering and art work so you should be able to write a little code to prototype what you design.",
    location: "remote",
    type: "full time",
    responsibility: [
      "Be at the intersection of art and engineering to design and prototype new features for our unique products.",
      "Design and ship products of the highest quality with the clean, simple and awesome style for which Dorkodu should be known.",
    ],
    requirements: [
      "Strong portfolio featuring your design samples or self-launched products.",
      "3+ years of experience building web applications.",
    ],
  },
};

/*

<template>
  <main>
    <Break />

    

      



    <article>
      <h2>
        <span>hello, again.</span>&nbsp;
        <Icon name="fluent-emoji-flat:waving-hand-light" size="36" />
      </h2>
      <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">my purpose;</span>
          <br><b>liberate the human.</b>
        </p>
      </Bulletpoint>
      <Bulletpoint icon="twemoji:bullseye">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">my mission;</span>
          <br>create a free and happy life experience for everyone,
          <br>build the utopian dream of heaven on earth,
          <br><b>...with meaningful technology.</b>
        </p>
      </Bulletpoint>
      <SectionRuler />
    </article>

    <article>
      <h4> why?</h4>
      <p>
        simple. <u>i want to live a free, happy and meaningful life.</u><br />
        i believe this is a fundemental human right; a livable world & a life worth living.
        so we need to come together, and create this utopic dream life for everyone.
      </p>
      <h4>how?</h4>
      <p>i am passionate in products, design and software.
        i am an autodidact (self-taught) so i teach myself the arts of my work:
        <b>
          gamification,
          web 3.0,
          knowledge,
          economics,
          human nature,
          industrial design
        </b>
        and
        <b>artificial intelligence</b>.
      </p>
      <p>
        i want to achieve a meaningful life, be remembered as an inventor, innovator, artist, a cult leader;
        or in a single word, a <u><b>protagonist</b></u> in the story of human.
      </p>
    </article>

    <Break />
    <Showcase>
      <template #main>
        <DescriptiveList title="know thyself."
          message="you will probably ask me these common questions. so here is, what i think about myself and life.">
          <DescriptiveItem title="who i am?"
            description="thinker, leader, artist, inventor, designer, polymath, idol, revolutionist, entrepreneur.">
            <Icon name="fluent-emoji-flat:boy-light" size="36" />
          </DescriptiveItem>
          <DescriptiveItem title="what i love to do?"
            description="think, design, code, learn, build, socialize, talk, think, feel... any type of creative activity.">
            <Icon name="twemoji:glowing-star" size="36" />
          </DescriptiveItem>
          <DescriptiveItem title="... for whom?" description="myself, and then everyone.">
            <Icon name="twemoji:people-hugging" size="36" />
          </DescriptiveItem>
          <DescriptiveItem title="why?"
            description="this is my mission, purpose of life. i always experience the human authenticity, being in the flow and losing sense of time and space.">
            <Icon name="twemoji:growing-heart" size="36" />
          </DescriptiveItem>
        </DescriptiveList>
      </template>
      <template #side>
        <Picture source="/images/dancing.png" title="i love being in the zone ♓️" />
      </template>
    </Showcase>

    <Break />
*/
