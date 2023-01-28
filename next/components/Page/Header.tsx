import { FunctionComponent } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import { tokens, ui } from "../../styles/prism";

const Header: FunctionComponent = () => {
  return (
    <Root>
      <Container>
        <Logo href="/">
          <img src="/images/dorkodu.svg" alt="dorkodu" title="dorkodu" />
        </Logo>
        <Nav.Body>
          <Link href="/" rel="dofollow">
            <Icon icon="twemoji:open-book" width={32} height={32} />
            <span>about</span>
          </Link>
          <Link href="/work" rel="dofollow">
            <Icon icon="twemoji:floppy-disk" width={30} height={30} />
            <span>work</span>
          </Link>
          <Link href="/business" rel="dofollow">
            <Icon icon="noto:dollar-banknote" width={32} height={32} />
            <span>business</span>
          </Link>
        </Nav.Body>
      </Container>
    </Root>
  );
};

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${ui.layout.breakpoint};
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: ${tokens.viewpoint.desktop.S}) {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }
`;

const Logo = styled.a`
  img {
    display: block;
    width: 20rem;
    height: auto;
    padding: 1rem;
    margin: 0 auto;
  }

  @media (min-width: ${tokens.viewpoint.tablet}) {
    img {
      width: 25rem;
    }
  }

  @media (min-width: ${tokens.viewpoint.desktop.S}) {
    img {
      width: 28rem;
    }
  }
`;

const Nav = {
  Body: styled.nav`
    display: flex;
    font-size: 1rem;
    line-height: 1.25rem;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      border-radius: 1rem;
      line-height: 1.5;
      font-size: 1.25rem;
      font-weight: 600;
      color: ${ui.color.neutral(50)};

      &:hover {
        background-color: ${ui.color.primary(90)};
        color: ${ui.color.primary(30)};
      }
    }

    @media (min-width: 425px) {
      flex-direction: row;
      align-items: center;
      gap: 0.25rem;
    }

    @media (min-width: ${tokens.viewpoint.desktop.S}) {
      width: calc(100% - 25rem);
      gap: 1rem;
      color: ${ui.color.neutral(60)};
    }
  `,
};

const Root = styled.header`
  padding: 0.64rem;

  @media (min-width: ${tokens.viewpoint.tablet}) {
    margin: 1rem auto;
  }
`;

export default Header;
