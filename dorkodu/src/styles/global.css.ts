import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  height: "100%",
});

globalStyle("body", {
  overflowY: "scroll",
  overscrollBehavior: "contain",
});

globalStyle("#root", {
  height: "100%",
});