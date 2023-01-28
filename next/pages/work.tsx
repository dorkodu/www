import { css } from "@emotion/react";
import type { NextPage } from "next";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Polaroid from "../components/Polaroid";
import { Badge, ButtonContainer, Showcase } from "../styles/elements";
import { tokens } from "../styles/prism";
import Page from "../components/Page";
import { Icon } from "@iconify-icon/react";

import Role from "../components/Work/Role";

import DescriptiveList from "../components/DescriptiveList";
import DescriptiveItem from "../components/DescriptiveItem";
import CardDeck from "../components/CardDeck";
import Card from "../components/Card";
import { IconHeading, SectionRuler } from "../components/Page/shared";

// images
import Illustration_PairProgramming from "../public/images/undraw_pair-programming.svg";
import { roles } from "../components/Page/data";

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
  intro: Illustration_PairProgramming,
};

const Work: NextPage = () => {
  return (
    <>
      <Page.Meta {...meta} />

      <Intro />

      <Showcase>
        <Page.Index
          items={[
            ["#about-us", "about us"],
            ["#why-dorkodu", "why dorkodu?"],
            ["#openings", "open roles"],
          ]}
        />
        <article>
          <h2>Work @ Dorkodu</h2>
          <p>
            <b>Dorkodu</b> is a startup based in <em>Istanbul</em>. We believe
            that Dorkodu has the potential to help billions of people{" "}
            <em>break free</em> and <em>fulfill their dreams</em>. We started
            off as a small team, but now we are growing rapidly.
          </p>
        </article>
      </Showcase>

      <section id="openings">
        <IconHeading icon="icon-park-twotone:mail-review">
          job openings
        </IconHeading>
        <br />
        <article>
          <p>
            If you are interested in having a role at Dorkodu and want to free
            the world with us,&nbsp;
            <b>check out the openings below, click job titles to see details</b>
            , and email us if you&apos;re interested.
          </p>
        </article>
        <SorryNoOpenings />
      </section>
    </>
  );
};

export default Work;

export const SorryNoOpenings = () => {
  const SorryNoOpenings = css`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 1rem 0 !important;
    background-color: ${tokens.color.orange(85)};
    border-radius: 1rem;
    gap: 0.5rem;

    @media (min-width: ${tokens.viewpoint.mobile.XL}) {
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem !important;
    }

    p {
      width: calc(100% - 5rem);
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 450;
      color: ${tokens.color.orange(35)};
      letter-spacing: -0.025rem;
      margin: 0;
      text-align: center;

      i {
        font-style: normal;
        font-weight: 500;
        color: ${tokens.color.orange(30)};
      }
    }
  `;

  return (
    <section id="SorryNoOpenings">
      <div css={SorryNoOpenings}>
        <div style={{ display: "flex" }}>
          <Icon
            icon="fluent-emoji-flat:smiling-face-with-tear"
            width={64}
            height={64}
          />
        </div>
        <div></div>
        <p>
          <b>sorry.</b> we are currently not hiring.
        </p>
      </div>
    </section>
  );
};

const Intro = () => (
  <Showcase>
    <Hero
      title="work"
      tagline="join the revolution!"
      statement="dorkodu is a foundation built for liberating the humankind. we need extraordinary, passionate and hard-working people for this mission."
    >
      <ButtonContainer style={{ margin: 0 }}>
        <Button type="fill" link="#openings">
          explore openings
        </Button>
        <Button type="tonal" link="/business">
          sponsor<i>!</i>
        </Button>
      </ButtonContainer>
    </Hero>
    <Polaroid source={image.intro} />
  </Showcase>
);

const Openings = () => (
  <>
    <article id="openings">
      <div style={{ margin: "0 auto" }}></div>
    </article>

    <CardDeck columns={2}>
      <Card
        title="Business"
        head={
          <svg css={Badge.DuoTone} viewBox="0 0 24 24">
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 21h18M3 10h18M5 6l7-3l7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"
            ></path>
          </svg>
        }
        message={`
          Business branch is responsible for maintaining and growing our
          company, marketing our products, generating new users and revenue
          streams, add value to the Dorkodu brand.
          `}
      >
        <ul>
          <li>
            <a href="#business-developer">Business Developer</a>
          </li>
          <li>
            <a href="#marketer">Marketing Specialist</a>
          </li>
          <li>
            <a href="#growth-hacker">Growth Hacker</a>
          </li>
          <li>
            <a href="#operations">Operations Specialist</a>
          </li>
          <li>
            <a href="#pr">PR Specialist</a>
          </li>
          <li>
            <a href="#postmaster">Postmaster</a>
          </li>
          <li>
            <a href="#lawyer">Brand and Company Lawyer</a>
          </li>
        </ul>
      </Card>
      <Card
        title="Business"
        head={
          <svg css={Badge.DuoTone} viewBox="0 0 24 24">
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 21h18M3 10h18M5 6l7-3l7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"
            ></path>
          </svg>
        }
        message={`
          Business branch is responsible for maintaining and growing our
          company, marketing our products, generating new users and revenue
          streams, add value to the Dorkodu brand.
          `}
      >
        <ul>
          <li>
            <a href="#business-developer">Business Developer</a>
          </li>
          <li>
            <a href="#marketer">Marketing Specialist</a>
          </li>
          <li>
            <a href="#growth-hacker">Growth Hacker</a>
          </li>
          <li>
            <a href="#operations">Operations Specialist</a>
          </li>
          <li>
            <a href="#pr">PR Specialist</a>
          </li>
          <li>
            <a href="#postmaster">Postmaster</a>
          </li>
          <li>
            <a href="#lawyer">Brand and Company Lawyer</a>
          </li>
        </ul>
      </Card>
    </CardDeck>

    <DescriptiveList>
      <DescriptiveItem
        title="Business"
        description={`
          Business branch is responsible for maintaining and growing our
          company, marketing our products, generating new users and revenue
          streams, add value to the Dorkodu brand.
          `}
        badge=""
      ></DescriptiveItem>
    </DescriptiveList>

    <br />
    <SectionRuler />
    <br />

    <CardDeck columns={2}>
      <Role role={roles.SoftwareEngineer} />
      <Role role={roles.WebDeveloper} />
      <Role role={roles.ProductDesigner} />
      <Role role={roles.GraphicsArtist} />
      <Role role={roles.ExperienceDesigner} />
    </CardDeck>
  </>
);

const WhyWorkAtDorkodu = () => (
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
          You don’t grow while you watch sitcoms and chill on your sofa. This is
          true for both your career and your life.
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
          You understand that an entourage of self-driven people is the best
          gift for your future.
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
        you are pushed in cold water and you have to learn to swim by yourself
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
          There is no time for micro-management. We expect you to be able to
          carry your own weight and be a reliable partner.
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
          In most cases we may not even know what we need and you may have to
          propose something.
        </p>
      </li>
      <li>
        <p>
          We are looking for you to <strong>get stuff done</strong>.
        </p>
        <p>
          We work in weekly sprints because we believe in consistent delivery
          over big lengthy releases.
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
          People here work remote and it’s up to you to show your work, explain
          your ideas or highlight problems.
        </p>
      </li>
      <li>
        <p>
          We want you to <strong>be a partner for your workmates</strong>.
        </p>
        <p>Provide guidance and help your workmates when they get stuck.</p>
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
          We focus on difficult problems and need to solve them, for the future
          of humankind.
        </p>
      </li>
      <li>
        <p>
          <strong>
            We thrive in uncertainty, as we have more questions than answers.
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
          Join our high-growth startup to learn new skills and fast track your
          career growth.
          <strong>Grow to be a company leader in the future.</strong>
          Get management opportunities and run your team, even your project.
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
          <strong>Remote-first:</strong> We don’t care when and where you work
          from.
        </p>
      </li>
      <li>
        <p>
          Potential for <strong>stock options</strong> package.
        </p>
      </li>
    </ul>
  </article>
);

<section>
  <article>
    <h3>let&apos;s work together!</h3>
    <p>
      at dorkodu, we understand that our worldwide success can only come from
      our diverse workforce.
    </p>
    <Polaroid source={image.intro} description="our team & culture." />
    <p>
      dorkodians relish the freedom to create the next generation of
      technologies in an environment designed to foster collaboration,
      creativity, health and happiness.
    </p>
    <Polaroid source={image.intro} description="our team & culture." />

    <p>building &quot;insanely great&quot; products depends on great people.</p>
    <p>
      dorkodu is where individual imaginations gather together, committing to
      the vaoues that lead to great work.
    </p>
    <p>here you will do more than join something, you will add something.</p>
    <p></p>
  </article>
</section>;
