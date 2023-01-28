import { css } from "@emotion/react";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import {
  ArrowList,
  Badge,
  IconTitle,
  ParagraphTagline,
} from "../../styles/elements";
import { tokens, ui } from "../../styles/prism";
import Bulletpoint from "../Bulletpoint";
import Button from "../Button";
import CardDeck from "../CardDeck";

// images
import { Project } from "../../types/dorkodu";
import Hero from "../Hero";
import { contactInfo } from "./data";
import Member from "../Member";

export const JoinUsBanner = () => {
  const style = {
    JoinUsBanner: css`
      padding: 1.5rem;
      border-radius: 1.5rem;
      background-color: ${ui.color.primary(48)};
    `,
    wrapper: css`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0 auto;
      max-width: 30rem;

      * {
        margin: 0;
      }
    `,
    icon: css`
      color: ${ui.color.primary(90)};
      display: flex;
      justify-content: center;
    `,
    title: css`
      color: #ffffff;
      font-weight: 700;
      font-size: 1.85rem;
    `,
    message: css`
      color: #ffffff;
      font-weight: 450;
      text-align: center;

      font-size: 1.35rem;
    `,
    buttons: css`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
    `,
  };

  return (
    <article css={style.JoinUsBanner}>
      <div css={style.wrapper}>
        <div css={style.icon}>
          <Icon icon="icon-park-twotone:yep" width={64} height={64} />
        </div>
        <h3 css={style.title}>world needs you.</h3>
        <p css={style.message}>
          are you passionate at your craft?&nbsp;
          <b>dorkodu</b> is the best place for the next generation of work.
        </p>
        <div css={style.buttons}>
          <Button link="/work" type="tonal">
            <span>
              join us<i>!</i>
            </span>
          </Button>
        </div>
      </div>
    </article>
  );
};

export const ContactItem: FunctionComponent<{
  icon?: string;
  link: string;
  type: string;
  address: string;
  description?: string;
}> = ({ icon, link, type, address, description }) => {
  const style = {
    self: css`
      display: flex;
      max-width: 250px;
      gap: 1rem;
      font-size: 1.25rem;
    `,
    icon: css`
      color: ${ui.color.neutral(75)};
    `,
    link: css`
      font-weight: 600;
      font-size: 1.35rem;

      a {
        color: ${ui.color.secondary(50)} !important;
        text-decoration: underline;
        padding-bottom: 0.25rem;

        &:hover {
          color: ${ui.color.secondary(65)} !important;
        }
      }
    `,
    body: css`
      span {
        display: block;
        line-height: 1.25;
      }
    `,
  };

  return (
    <div css={style.self}>
      {icon && <Icon icon={icon} css={style.icon} width={40} height={40} />}
      <div css={style.body}>
        <span css={style.link}>
          <a href={link}>{type}</a>
        </span>
        <span style={{ lineHeight: 1.3 }}>
          <b>{address}</b>

          {description && (
            <>
              <br />
              {description}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export const SectionRuler: FunctionComponent = () => (
  <div style={{ margin: "1rem auto", maxWidth: ui.layout.breakpoint }}>
    <hr
      style={{
        margin: `0 1rem`,
        padding: 0,
        borderBottom: `0.25rem dashed ${ui.color.neutral(90)}`,
      }}
    />
  </div>
);

export const IconHeading: FunctionComponent<{
  icon: string;
  style?: object;
  children: React.ReactNode;
}> = ({ icon, style, children }) => {
  const IconHeading = css`
    display: flex;
    margin: 0 0 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `;

  return (
    <h2 css={IconHeading}>
      <Icon
        icon={icon}
        style={style ?? { color: ui.color.primary(45) }}
        width={48}
        height={48}
      />
      <span>{children}</span>
    </h2>
  );
};

export const People: FunctionComponent = () => {
  // team members data
  const members = {
    doruk: {
      name: "doruk eray",
      title: "founder & chief",
      about:
        "cult leader, product polymath, lunatic craftsman. revolutionist. software, ui/ux, artwork, business.",
      avatar: "/images/doruk--green.png",
      icons: ["tabler:flag-3", "tabler:tools", "tabler:building-bank"],
    },
    berk: {
      name: "berk cambaz",
      title: "technologist",
      about:
        "founding engineer, swiss-knife, homebrew software, research & development, open source.",
      avatar: "/images/berk.png",
      icons: ["tabler:brand-open-source", "tabler:cpu", "tabler:code"],
    },
    berra: {
      name: "berra uslu",
      title: "rookie",
      about:
        "freelance creative. illustrator, visual arts. social justice warrior.",
      icons: ["tabler:brush", "tabler:palette"],
    },
    aziz: {
      name: "aziz öçmaz",
      title: "rookie",
      about:
        "gamification apprentice, graphics design, media. gnome chieftain.",
      icons: ["tabler:device-gamepad-2", "tabler:abacus"],
    },
  };

  const rookieWrapper = css`
    max-width: 25rem !important;
    margin: 0 auto !important;
  `;

  return (
    <section id="people">
      <IconHeading icon="icon-park-twotone:peoples-two">our people</IconHeading>
      <br />
      <Member member={members.doruk} />
      <Member member={members.berk} />
      <hr />
      <CardDeck columns={2}>
        <div css={rookieWrapper}>
          <Member member={members.berra} />
        </div>
        <div css={rookieWrapper}>
          <Member member={members.aziz} />
        </div>
      </CardDeck>
    </section>
  );
};

export const Mission = () => {
  const style = {
    largeParagraph: css`
      font-size: 1.25rem;
      margin: 0;

      em {
        font-style: normal;
        font-weight: 450;
      }
    `,
  };

  return (
    <section>
      <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
        <ParagraphTagline>
          <span>our purpose</span>
        </ParagraphTagline>
        <p css={style.largeParagraph}>we want to help people...</p>
        <ul css={ArrowList}>
          <li>find their true purpose & passion.</li>
          <li>actualize themselves.</li>
          <li>create a free and happy life experience for everyone.</li>
          <li>build the utopian dream of heaven on earth.</li>
        </ul>
      </Bulletpoint>
      <Bulletpoint icon="twemoji:bullseye">
        <ParagraphTagline>
          <span>our mission</span>
        </ParagraphTagline>
        <p css={style.largeParagraph}>
          we combine <em>gamification</em>, <em>human-centric design</em> and{" "}
          <em>our superior technology</em> to create products which{" "}
          <em>free the human spirit.</em>
        </p>
      </Bulletpoint>
    </section>
  );
};

export const OurWork = () => {
  const projects: Project[] = [
    {
      title: "trekie",
      tagline: "the social & gamified personal growth companion app",
      link: "/trekie",
      image: "/images/trekie-S.png",
      type: "product",
    },
    {
      title: "sage",
      tagline: "the marvelous data exchange protocol for web api's",
      link: "/sage",
      image: "/images/sage.png",
      type: "technology",
    },
    {
      title: "LIBRE",
      tagline: "open source @ dorkodu ",
      link: "https://libre.dorkodu.com",
      image: "/images/libre-compact-S.png",
      type: "community",
    },
  ];

  const localStyle = {
    container: css`
      display: flex;
      justify-content: center;
      gap: 1.5rem;

      flex-wrap: wrap;
      padding: 1rem;
    `,
    item: css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-basis: 20rem;
      gap: 0.25rem;

      * {
        margin: 0;
        padding: 0;
      }

      p {
        font-size: 1.25rem;
        text-align: center;
        color: ${ui.color.neutral(60)};
        font-weight: 500;
        line-height: 1.15;

        span {
          display: inline-block;
          color: ${ui.color.primary(35)};
          background-color: ${ui.color.primary(85)};
          padding: 0.25rem 0.5rem;
          margin: 0.25rem;
          border-radius: 0.5rem;
          font-size: 1rem !important;
        }
      }

      h4 {
        font-weight: 700;
        font-size: 1.65rem !important;
        margin-top: 0.5rem;
        color: ${ui.color.neutral(40)};
      }

      img {
        padding: 0 0.5rem;
      }

      hr {
        width: 100%;
      }
    `,

    mission: css`
      font-weight: 1.25rem;
    `,
  };

  return (
    <>
      <section id="our-work">
        <IconHeading icon="icon-park-twotone:mac-finder">our work</IconHeading>
      </section>
      <div css={localStyle.container}>
        {projects.map((project, index) => (
          <div css={localStyle.item} key={index}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.tagline}</p>
            <p>
              <span>{project.type}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export const TheDorkoduWay = () => {
  const style = {
    TheDorkoduWay: css`
      display: flex;
      flex-direction: column;
      max-width: 64rem;
      margin: 0 auto;
      padding: 1rem;
      gap: 1rem;

      * {
        text-align: center !important;
      }

      @media (min-width: ${tokens.viewpoint.desktop.S}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;

        * {
          padding: 0;
          margin: 0;
          text-align: left !important;
        }

        p {
        }
      }
    `,
    title: css`
      display: block;
      font-size: 2.05rem;
      color: ${ui.color.neutral(65)};
      line-height: 2.25rem;
      font-weight: 450;
      word-wrap: normal;
      margin: 0 auto;
      max-width: 32rem;

      i {
        font-style: normal;
        font-weight: 600;
        letter-spacing: -0.05rem;
      }

      .dorkodu {
        color: ${ui.color.primary(45)};
      }

      .tech {
        display: inline;
        color: ${tokens.color.blue(50)};
        line-height: 2.75rem;
      }

      .human {
        color: ${tokens.color.indigo(50)};
      }

      .ideal {
        color: ${tokens.color.gray(20)};
      }

      @media (min-width: ${tokens.viewpoint.desktop.S}) {
        width: 40%;
      }
    `,
    paragraph: css`
      font-size: 1.5rem;
      margin: 0 auto;
      max-width: 37rem;

      em,
      i {
        font-style: normal;
        display: inline;
      }

      em {
        font-weight: 550;
      }

      i {
        font-weight: 500;
      }

      @media (min-width: ${tokens.viewpoint.desktop.S}) {
        display: inline-block;
        width: 60%;
        height: fit-content;
      }
    `,
  };

  return (
    <div css={style.TheDorkoduWay} id="the-dorkodu-way">
      <h3 css={style.title}>
        <i className="dorkodu">dorkodu</i> stands for a&nbsp;
        <i className="ideal">higher ideal</i> of&nbsp;
        <i className="human">human</i> and <i className="tech">technology</i>.
      </h3>
      <p css={style.paragraph}>
        our culture is inspired by <i>emotions</i> which express&nbsp; the{" "}
        <i>vibe</i> of an authentic <em>life experience.</em>
      </p>
    </div>
  );
};

export const Motto = () => {
  const Motto = css`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 1rem 0 !important;
    background-color: ${ui.color.primary(85)};
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
      color: ${ui.color.primary(35)};
      letter-spacing: -0.025rem;
      margin: 0;
      text-align: center;

      i {
        font-style: normal;
        font-weight: 500;
        color: ${ui.color.primary(30)};
      }
    }
  `;

  return (
    <section id="motto">
      <div css={Motto}>
        <div style={{ display: "flex" }}>
          <Icon
            icon="icon-park-twotone:torch"
            width={56}
            height={56}
            style={{
              color: ui.color.primary(40),
              backgroundColor: ui.color.primary(75),
              padding: ".25rem",
              borderRadius: "1rem",
            }}
          />
        </div>
        <p>
          We are here to put the{" "}
          <i style={{ textDecoration: "underline" }}>meaning</i> back into the{" "}
          <i>products</i> and <i>technology</i> again.
        </p>
      </div>
    </section>
  );
};

export const Why = () => {
  const local = {};

  return (
    <>
      <div id="why"></div>
      <Hero
        title="why?"
        tagline="liberate the humankind"
        head={
          <Icon icon="icon-park-twotone:brain" width={48} css={Badge.DuoTone} />
        }
        center
      >
        <p
          css={css`
            font-size: 1.6rem;
            text-align: center;
            padding: 0;
            margin: 0;
            font-weight: 450;
          `}
        >
          with meaningful technology
        </p>
      </Hero>
    </>
  );
};

export const Story = () => {
  const local = {
    timelineList: css`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.25rem;
      line-height: 1.65rem;
      margin-left: 1.75rem !important;
      list-style-type: decimal-leading-zero;

      li {
        em {
          font-style: normal;
          font-weight: 450;
        }

        &::marker {
          color: ${ui.color.neutral(80)};
          font-weight: 600;
          font-size: 1.15rem;
        }

        span {
          display: block;
          color: ${ui.color.neutral(50)};
        }
      }

      @media (min-width: ${tokens.viewpoint.tablet}) {
        margin-left: 2.5rem !important;

        li::marker {
          font-weight: 750;
          font-size: 1.25rem;
        }
      }
    `,
  };

  return (
    <>
      <section id="story">
        <IconHeading icon="icon-park-twotone:book-one">our story</IconHeading>
        <br />
        <article>
          <ol css={local.timelineList}>
            <li>
              Our founders, <b>Doruk</b> and <b>Berk</b> are born in{" "}
              <b>2004.</b>
              <br />
              <em>Doruk</em> is an artistic kid and wants to be a leader &
              inventor.
            </li>
            <li>
              <em>Doruk</em> learns to code at <b>10</b>.
              <span>— he finally found his passion.</span>
            </li>
            <li>
              <b>Dorkodu</b>&apos;s seeds are planted during <b>2016</b>, when
              Doruk brands his all software under the name <i>dorkodu</i> (doruk
              + code).
              <span>
                — &quot;<b>doruk</b>&quot; means <i>peak</i> in <em>Turkish</em>
                .
              </span>
            </li>
            <li>
              <em>Doruk</em> entered <b>Vefa Lisesi.</b>
              <span>— a well-established high school in Istanbul.</span>
            </li>
            <li>
              <em>Doruk</em> and <b>Berk</b> meet at <em>Vefa</em> in{" "}
              <em>2018</em>, instant best friends!
              <span>
                — <em>Berk</em> starts coding, after being an{" "}
                <em>international e-sports wonderkid</em>.
              </span>
            </li>
            <li>
              <em>Doruk</em> and <em>Berk</em> starts working together.
              <span>
                — doruk is engineering on web, berk is a game creator.
              </span>
            </li>
            <li>
              <em>Doruk</em> realizes how they can mix his{" "}
              <em>design ideals</em> with their{" "}
              <em>revolutionary technology</em> to{" "}
              <u>
                <b>make the dream of utopian human life possible.</b>
              </u>
              <span>
                — now they found their <em>purpose</em>.
              </span>
            </li>
            <li>
              <b>dorkodu</b> becomes their full-time hustle.
            </li>
            <li>
              <em>dorkodu</em> wins{" "}
              <b>
                1<sup>st</sup>
              </b>{" "}
              place in a <em>national software contest</em> in <b>2020</b>.
              <span>
                — with <b>dorkodia</b>, an experimental social app for
                meditation & productivity.
              </span>
            </li>
            <li>
              <em>doruk and berk</em> publish their <em>open source</em>{" "}
              projects.
              <span>
                — complex <em>software libraries, protocols</em> and{" "}
                <em>frameworks</em>; even <em>pixelart.</em>
              </span>
            </li>
            <li>
              <em>dorkodu</em> focuses on <em>gamification</em>,{" "}
              <em style={{ textTransform: "uppercase" }}>AI</em> and{" "}
              <em>web 3.0</em>.
              <span>
                — we want to create a free, decentralized, civilized{" "}
                <b>utopian world</b> with <b>human-friendly</b>{" "}
                <em>technology</em> and <em>economy</em>.
              </span>
            </li>
            <li>
              <b>berra</b> and <b>aziz</b> join <em>the dorkodu revolution</em>{" "}
              as our first rookies.
              <span>— first redpills escaped the matrix.</span>
            </li>
            <li>
              <em>dorkodu</em>&apos;s mission is to{" "}
              <b>liberate the humankind!</b>
              <span></span>
            </li>
          </ol>
        </article>
      </section>
    </>
  );
};

export const ContactChannels = () => (
  <CardDeck columns={2}>
    {contactInfo.map((contact) => {
      return <ContactItem {...{ ...contact }} key={contact.type} />;
    })}
  </CardDeck>
);

export const Contact: FunctionComponent = () => {
  const Contact = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  `;

  return (
    <section css={Contact} id="contact">
      <div css={IconTitle}>
        <Icon icon="twemoji:postbox" width={48} height={48} />
        <div>
          <h4>contact us</h4>
          <p>
            For any question, problem, wish or suggestion; you can reach out via
            the related platform below.
          </p>
        </div>
      </div>
      <ContactChannels />
    </section>
  );
};
