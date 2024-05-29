import { INote } from "@/components/note";
import { Text } from "@mantine/core";

export const notes: INote[] = [
  {
    slug: "life-is-beautiful",
    title: "Life is beautiful",
    description: "This is my first message to humankind.",
    author: {
      name: "Doruk Eray",
      username: "@dorukeray",
      imageURL: "/images/doruk-pixel.png",
    },
    publishedAt: new Date(1693254764600),
    content: (
      <Text>
        Life is beautiful.
        <br />
        I am not here to convince you for that.
        <br />
        <br />
        I just want to make sure our civilization continues to live forever.
        Against all odds; our stupidity, toxic and parasitic attitude, all lies
        told, milleniums worth of suffering.
        <br />
        <br />
        For you, this misery will eventually end one day, my friend.
        <br />
        Wait, but why?
        <br />
        <br />
        We love each other, care for one another, believe in a better tomorrow.
        Sunshine, sounds of waves on a sea, smell of flowers, or a freshly baked
        bread. Looking at a humanbeing in the eye, seeing the smile of your
        loved-one. This makes our lives beautiful.
        <br />
        <br />
        But life is ephemeral; someday you will perish into the night, slowly
        fade away with the dying of daylight.
        <br />
        <br />I don't want to.
        <br />
        <br />
        This keeps me alive each day.
        <br />A burning desire to change my destiny, with the course of history.
      </Text>
    ),
    tags: ["journal"],
  },
];
