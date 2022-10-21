import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { light } from "../styles/theme";
import Page from "./Page";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ThemeProvider theme={light}>
        <Page.Header />
        <main>{children}</main>
        <Page.Footer />
      </ThemeProvider>
    </>
  );
}
