export type FAQ = {
  q: string;
  a: React.ReactNode;
};

export const faqs: FAQ[] = [
  {
    q: "What is Dorkodu?",
    a: "We are an indie tech company. We create social and gamified apps for helping you fulfill your life.",
  },
  {
    q: `What does "Dorkodu" mean? Where does the name come from?`,
    a: (
      <>
        We made it up: <b>Doruk + Berk + Code</b>. Add some alliteration.
      </>
    ),
  },
  {
    q: "How much it costs?",
    a: "It is free to create a Dorkodu account, and will always be.",
  },
  {
    q: "What does Dorkodu company do?",
    a: "We build products and technology for helping you",
  },
  {
    q: `What does "dream fulfillment technology company" mean?`,
    a: (
      <>
        This is a simple statement which explains our purpose.
        <br />
        We are here to make all your dreams possible, help you make them come true, with the help of meaningful, humane
        technology and our apps, which are tools for your mind.
      </>
    ),
  },
  {
    q: `How to install Dorkodu's mobile apps?`,
    a: (
      <>
        <b>
          <i>Proudly</i>, we don't release our apps on big-tech monopoly app stores.
        </b>
        <ul>
          <li>You can install Dorkodu apps by opening them on web.</li>
          <li>Your browser will suggest you to install it.</li>
          <li>Add the app to your home screen, and enjoy the show!</li>
        </ul>
      </>
    ),
  },
];
