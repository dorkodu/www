import { ScrollReveal } from "@/components/ui/animated";
import { Card } from "@/components/ui/card";

const tldrPoints = [
  "I design products, build software and run business.",
  { text: "My life's mission is to ", bold: "make human civilization +1% better", suffix: "." },
  { text: "I founded ", link: { text: "Dorkodu", href: "https://dorkodu.com" }, suffix: ", a tech startup to liberate the humankind." },
  { text: "I recently joined ", link: { text: "Boğaziçi University", href: "https://bogazici.edu.tr" }, suffix: " as a student/researcher." },
  { text: "I sing, write songs and play guitar @ ", link: { text: "Terraspark", href: "#" }, suffix: "." },
  "My childhood dream was to be an inventor.",
];

const faqs = [
  {
    question: "Why?",
    answer: [
      "I want to live a free, happy and meaningful life. I believe this is a fundamental human right; a livable world & a life worth living.",
      "So we need to come together, and create this utopic dream life for everyone.",
    ],
  },
  {
    question: "How?",
    answer: [
      "I am passionate in designing products and building software. I am an autodidact (self-taught) so I teach myself the arts of my work.",
      { text: "I want to fulfill my purpose in this life, be remembered as an ", highlights: ["inventor", "innovator", "artist", "cult leader"], suffix: "; or in a single word, a ", finalHighlight: "protagonist", finalSuffix: " in the story of human." },
    ],
  },
];

const idols = [
  { name: "Aaron Swartz", image: "/images/idols/aaron.jpg" },
  { name: "Mustafa Kemal Atatürk", image: "/images/idols/ataturk.jpg" },
  { name: "Bob Dylan", image: "/images/idols/dylan.jpg" },
  { name: "Pink Floyd", image: "/images/idols/floyd.jpg" },
  { name: "Isaac Newton", image: "/images/idols/newton.jpg" },
  { name: "Dieter Rams", image: "/images/idols/rams.jpg" },
  { name: "Steve Jobs", image: "/images/idols/steve.jpg" },
  { name: "Syd Barrett", image: "/images/idols/syd.jpg" },
  { name: "Tim Berners-Lee", image: "/images/idols/tim.jpg" },
];

export function StoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/scott-webb-3LsocYqXWpM-unsplash.webp"
            alt=""
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <img
                src="/images/doruk-student.png"
                alt="Doruk Eray"
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg"
              />
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  My Story
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  A summary of my life and personality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I give an extraordinary vibe. A nerd inventor who loves design and art, also writes songs and storms the stage, tells inspiring words like a cult leader.
                </p>
                <p className="text-muted-foreground mt-3">
                  My friends say <span className="font-semibold text-foreground">I got hero's backstory</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TL;DR Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal delay={100}>
            <Card className="p-6 md:p-8 border-l-4 border-l-link">
              <h2 className="text-2xl font-bold text-foreground mb-4">TL;DR</h2>
              <ul className="space-y-2">
                {tldrPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-link mt-1">•</span>
                    <span>
                      {typeof point === "string" ? (
                        point
                      ) : (
                        <>
                          {point.text}
                          {point.bold && <strong className="text-foreground">{point.bold}</strong>}
                          {point.link && (
                            <a
                              href={point.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-link hover:text-link-hover underline"
                            >
                              {point.link.text}
                            </a>
                          )}
                          {point.suffix}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal delay={150}>
            <h2 className="text-2xl font-bold text-foreground mb-6">FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  {faq.answer.map((paragraph, j) => (
                    <p key={j} className="text-muted-foreground mb-2 leading-relaxed">
                      {typeof paragraph === "string" ? (
                        paragraph
                      ) : (
                        <>
                          {paragraph.text}
                          {paragraph.highlights?.map((h, k) => (
                            <span key={k}>
                              <strong className="text-foreground">{h}</strong>
                              {k < paragraph.highlights!.length - 1 && ", "}
                            </span>
                          ))}
                          {paragraph.suffix}
                          {paragraph.finalHighlight && (
                            <strong className="text-foreground">{paragraph.finalHighlight}</strong>
                          )}
                          {paragraph.finalSuffix}
                        </>
                      )}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Hero's Journey Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal delay={200}>
            <h2 className="text-2xl font-bold text-foreground mb-6">The Hero's Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I was a curious and artistic child, and my mom did teach me how to read and write when I was <strong className="text-foreground">3</strong>. I loved tinkering with gadgets, to understand how they work and how to build my own things.
              </p>
              <p>
                <strong className="text-foreground">I've always dreamed to be an inventor since then.</strong>
                <br />
                <span className="text-sm">This was the start in my life.</span>
              </p>
              <p>
                When I started elementary school, I spent my whole time reading about history and picturing the moments, drawing battle scenes, maps, events which I just read. This was exciting until I met the dark face of human.
              </p>

              {/* Bob Dylan Quote */}
              <blockquote className="border-l-4 border-link/50 pl-4 py-2 my-6 italic text-muted-foreground">
                <p className="mb-2">
                  "For the loser now, will be later to win
                  <br />
                  For the times they are a-changin'"
                </p>
                <cite className="text-sm not-italic text-foreground">— Bob Dylan</cite>
              </blockquote>

              <p>
                I learned to code when I was <strong className="text-foreground">10</strong>, and this was a milestone in my journey. You can build anything you want, and let everyone use it. What you can do is limited only by your skills and imagination.
              </p>
              <p>
                My secondary school years were spent on <strong className="text-foreground">a search for meaning for my life</strong>. Personal projects and <strong className="text-foreground">technical/artistic experimentation</strong>. Just curiosity.
              </p>
              <p>
                Dorkodu was born when I first branded all my work under an umbrella name. I was in secondary school back then. Simple formula: <strong className="text-foreground">Doruk + Code = Dorkodu</strong>.
              </p>
              <p>
                After a boring but successful exam year, I entered{" "}
                <a href="https://en.wikipedia.org/wiki/Vefa_High_School" target="_blank" rel="noopener noreferrer" className="text-link hover:text-link-hover underline">
                  Vefa Lisesi
                </a>
                , a historical high school in Istanbul. There also I met my close friends <strong className="text-foreground">Berk</strong> and <strong className="text-foreground">Emir</strong> who joined me with the foundations of our startup <strong className="text-foreground">Dorkodu</strong> and our rock band{" "}
                <a href="#" className="text-link hover:text-link-hover underline">
                  Terraspark
                </a>
                .
              </p>
              <p>
                I switched to the Web as a platform for developing software. Eureka! A moment of enlightenment. Then I discovered the internet's unifying power for our civilization.
              </p>
              <p className="italic">I thought... Maybe there is a room for improvement.</p>
              <p>
                I see <strong className="text-foreground">gamification</strong> as a promising method we can use to fix broken parts of human systems and productivity; <strong className="text-foreground">we can bring meaning back to technology</strong>.
              </p>
              <p>This is what I dedicated the first chapter of my career to.</p>
              <p>
                You can visit{" "}
                <a href="https://dorkodu.com" target="_blank" rel="noopener noreferrer" className="text-link hover:text-link-hover underline">
                  Dorkodu's website
                </a>{" "}
                to learn more about who we are and what we do.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Special Thanks Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal delay={250}>
            <h2 className="text-2xl font-bold text-foreground mb-2">Special Thanks</h2>
            <p className="text-muted-foreground mb-8">These are my heros. I owe them my life.</p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {idols.map((idol) => (
                <div
                  key={idol.name}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl"
                >
                  <img
                    src={idol.image}
                    alt={idol.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                    {idol.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
