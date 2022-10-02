import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { light } from "../styles/theme";


export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={light}>
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
