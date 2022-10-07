import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { tokens, ui } from "../../styles/prism";

const Footer: FunctionComponent = () => {
  return (
    <Root>
      <Wrapper>
        <UpperSection>
          <Brand>
            <div className="logo">
              <svg
                version="1.1"
                viewBox="0 0 64.58 16.145"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(0 -200.21)">
                  <g transform="translate(23.05 .042484)"></g>
                  <g transform="translate(16.201 -2.8135)">
                    <g transform="translate(-5.9635 -17.109)">
                      <g transform="matrix(.83699 0 0 .83699 8.3723 213.3)">
                        <g transform="translate(-1.2052 -201.77)">
                          <g transform="matrix(1.0023 0 0 1.0032 -1.9894 5.1618)"></g>
                          <g transform="translate(23.05 .042484)"></g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g transform="matrix(1.0195 0 0 1.0195 89.78 94.402)">
                    <g transform="translate(-1.9577 5.1403)">
                      <g transform="translate(-6.2036 -17.109)">
                        <g transform="matrix(.83699 0 0 .83699 26.656 44.464)"></g>
                        <g transform="matrix(.83892 0 0 .8397 1.6492 19.92)"></g>
                      </g>
                    </g>
                  </g>
                  <g transform="matrix(.06458 0 0 .06458 0 200.21)" fill="#fff">
                    <path
                      d="m164.23 13.09c-5.6777-0.09514-11.556 3.2332-14.09 11.012-2.7813 8.5386-5.437 17.098-7.5606 23.174-5.376 16.571-10.378 33.167-15.963 49.639-27.705-9.9477-62.06-4.862-81.205 18.953-24.476 27.763-22.278 73.699 4.6641 99.051 28.364 29.927 81.931 25.377 106.45-7.2578 20.345-23.642 29.066-55.347 50.939-77.723 20.343-16.521 54.552-10.426 66.182 13.668 14.002 26.909-5.6463 62.007-36.525 61.877-16.156 0.63487-21.086-7.1092-32.893-11.145-13.976-4.3856-27.904 13.668-13.549 26.014 32.325 24.323 80.874 17.943 103.07-15.025 21.861-29.278 16.492-74.087-11.502-97.516-29.509-27.164-80.839-20.666-104.16 11.525-19.757 23.432-28.392 54.549-49.961 76.525-20.345 16.518-54.551 10.425-66.182-13.67-14.673-25.753 6.2618-60.962 36.377-61.18 13.369-0.13936 21.6 5.3459 32.248 9.0449 16.614 4.5229 18.53-7.7487 22.395-19.016 8.6065-26.511 15.513-52.36 23.809-78.803 3.626-11.557-4.2448-19.009-12.543-19.148zm270.62 0.1875c-6.3946 0.0811-12.946 3.9675-15.133 12.127l-51.354 189.78c-5.5178 20.27 22.89 28.433 29.287 7.9238l50.951-189.93c3.4775-12.978-4.9889-20.013-13.752-19.902zm406.53 0.45117c-6.7406-0.06194-12.923 4.6316-15.092 11.709l-22.154 72.303c-25.155-11.72-57.185-8.9552-78.396 11.527-27.888 23.568-32.998 68.413-10.988 97.568 21.672 33.313 70.891 35.742 103.35 14.191 12.855-8.9605 5.6599-30.584-12.068-25.836-11.716 5.0186-18.497 11.553-34.941 11.547-29.369-0.011-49.639-33.214-37.355-59.086 10.672-26.3 42.512-32.679 65.541-19.414 21.368 12.789 25.823 32.846 39.592 59.18 15.939 30.485 33.635 47.743 64.604 47.998 36.882 0.42737 61.669-20.482 67.043-58.494 1.3078-22.184 1.1647-44.445 1.5371-66.666 0.14556-9.3597-6.2388-17.002-14.314-17.131-8.0757-0.12388-14.146 7.3003-14.291 16.66l-1.4746 55.182c-0.36141 5.0592-0.64469 10.567-3.0957 18.742-10.281 23.5-38.159 29.422-58.432 12.299-22.98-21.62-26.869-59.045-50.203-82.67l23.676-80.422c2.5703-8.3884-0.66187-16.385-8.7559-18.646-1.2646-0.35305-2.531-0.52822-3.7793-0.53906zm-464.21 77.092c-30.919 0.18656-46.433 22.688-52.635 45.359-6.9555 25.427-10.348 53.968-30.406 73.256-12.486 14.26 7.7497 37.97 26.625 17.621 26.607-26.592 22.437-68.509 39.506-95.154 8.7624-13.618 25.344-6.3768 31.865-17.668 6.1147-12.022-2.1097-23.214-13.471-23.404-0.49856-0.0084-0.9936-0.01273-1.4844-0.0098zm113.95 0.79297c-3.6626 0.01306-7.3568 0.23756-11.07 0.63477-37.922 3.8021-65.382 43.103-59.561 80.027 4.138 36.301 35.655 63.409 75.941 61.811 29.347-1.2589 52.648-22.583 66.141-47.133 12.944-19.167 21.004-42.783 39.393-57.686 21.623-14.64 54.542-6.0484 64.619 18.498 12.07 25.972-7.7973 59.178-38.727 58.479-15.085 1.0158-21.917-7.1449-33.039-11.273-15.54-4.351-26.103 14.172-13.277 24.971 27.361 23.037 80.592 20.326 103.23-12.303 22.249-28.973 17.508-73.86-10.186-97.656-29.148-27.631-80.549-21.72-104.32 10.123-20.052 23.159-29.136 54.167-50.977 75.852-21.058 16.695-55.977 9.1923-66.719-15.953-12.845-25.98 6.8174-58.948 37.822-59.443 18.408-0.51719 22.204 6.4138 33.258 11.125 15.583 5.035 24.611-14.365 12.258-25.281-13.642-10.944-28.916-14.848-44.787-14.791z"
                      color="#000000"
                      stroke-width="0"
                    />
                    <path
                      d="m164.23 13.09c-5.6777-0.09514-11.556 3.2332-14.09 11.012-2.7813 8.5385-5.437 17.098-7.5606 23.174-5.376 16.571-10.378 33.167-15.963 49.639-27.705-9.9477-62.06-4.862-81.205 18.953-24.476 27.763-22.278 73.699 4.6641 99.051 28.364 29.927 81.931 25.377 106.45-7.2578 20.345-23.642 29.066-55.347 50.939-77.723 20.343-16.521 54.552-10.426 66.182 13.668 14.002 26.909-5.6464 62.007-36.525 61.877-16.156 0.63487-21.086-7.1092-32.893-11.145-13.976-4.3856-27.904 13.668-13.549 26.014 32.325 24.323 80.874 17.943 103.07-15.025 21.861-29.278 16.492-74.087-11.502-97.516-29.509-27.164-80.839-20.666-104.16 11.525-19.757 23.432-28.392 54.549-49.961 76.525-20.345 16.518-54.551 10.425-66.182-13.67-14.673-25.753 6.2618-60.962 36.377-61.18 13.369-0.13936 21.6 5.3459 32.248 9.0449 16.614 4.5229 18.53-7.7487 22.395-19.016 8.6065-26.511 15.513-52.361 23.809-78.803 3.626-11.557-4.2448-19.009-12.543-19.148zm270.62 0.1875c-6.3946 0.0811-12.946 3.9676-15.133 12.127l-51.354 189.78c-5.5178 20.27 22.89 28.433 29.287 7.9238l50.951-189.93c3.4775-12.978-4.9889-20.013-13.752-19.902zm406.53 0.45117c-6.7406-0.06194-12.923 4.6316-15.092 11.709l-22.154 72.303c-25.155-11.72-57.185-8.9551-78.396 11.527-27.888 23.568-32.998 68.413-10.988 97.568 21.672 33.313 70.891 35.742 103.35 14.191 12.855-8.9605 5.6599-30.584-12.068-25.836-11.716 5.0186-18.497 11.553-34.941 11.547-29.369-0.011-49.639-33.214-37.355-59.086 10.672-26.3 42.512-32.679 65.541-19.414 21.368 12.789 25.823 32.846 39.592 59.18 15.939 30.485 33.635 47.743 64.604 47.998 36.882 0.42737 61.669-20.482 67.043-58.494 1.3078-22.184 1.1647-44.445 1.5371-66.666 0.14556-9.3597-6.2388-17.002-14.314-17.131-8.0757-0.12388-14.146 7.3003-14.291 16.66l-1.4746 55.182c-0.36141 5.0591-0.64469 10.567-3.0957 18.742-10.281 23.5-38.159 29.422-58.432 12.299-22.98-21.62-26.87-59.045-50.203-82.67l23.676-80.422c2.5703-8.3883-0.66188-16.385-8.7559-18.646-1.2646-0.35305-2.531-0.52822-3.7793-0.53906zm-464.21 77.092c-30.919 0.18656-46.433 22.688-52.635 45.359-6.9555 25.427-10.348 53.968-30.406 73.256-12.486 14.26 7.7497 37.969 26.625 17.621 26.607-26.592 22.437-68.509 39.506-95.154 8.7624-13.618 25.344-6.3769 31.865-17.668 6.1147-12.022-2.1097-23.214-13.471-23.404-0.49856-0.0084-0.9936-0.01273-1.4844-0.0098zm113.95 0.79297c-3.6626 0.01306-7.3568 0.23756-11.07 0.63477-37.922 3.8021-65.382 43.103-59.561 80.027 4.138 36.301 35.656 63.409 75.941 61.811 29.347-1.2589 52.648-22.583 66.141-47.133 12.944-19.167 21.004-42.783 39.393-57.686 21.623-14.64 54.542-6.0484 64.619 18.498 12.07 25.972-7.7974 59.178-38.727 58.479-15.085 1.0158-21.917-7.1449-33.039-11.273-15.54-4.351-26.103 14.172-13.277 24.971 27.361 23.037 80.592 20.326 103.23-12.303 22.249-28.973 17.508-73.86-10.186-97.656-29.148-27.631-80.549-21.72-104.32 10.123-20.052 23.159-29.136 54.167-50.977 75.852-21.058 16.695-55.977 9.1922-66.719-15.953-12.845-25.98 6.8175-58.948 37.822-59.443 18.408-0.51719 22.204 6.4138 33.258 11.125 15.583 5.035 24.611-14.365 12.258-25.281-13.642-10.944-28.916-14.848-44.787-14.791z"
                      color="#000000"
                      stroke-width="0"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <p>we liberate the humankind with our meaningful technology.</p>
            <nav>
              <a href="https://twitter.com/dorkodu">
                <Icon icon="tabler:brand-twitter" />
              </a>
              <a href="https://github.com/dorkodu">
                <Icon icon="tabler:brand-github" />
              </a>
              <a href="https://instagram.com/dorkodu">
                <Icon icon="tabler:brand-instagram" />
              </a>
              <a href="mailto:hey@dorkodu.com">
                <Icon icon="tabler:mail-opened" />
              </a>
            </nav>
          </Brand>

          <Nav>
            <div>
              <h4>company</h4>
              <nav>
                <Link href="/" rel="dofollow">
                  about
                </Link>
                <Link href="/work" rel="dofollow">
                  work
                </Link>
                <Link href="/business" rel="dofollow">
                  business
                </Link>
              </nav>
            </div>

            <div>
              <h4>resources</h4>
              <nav>
                <a href="/resources/terms">terms</a>
                <a href="/resources/privacy">privacy</a>
                <a href="/community">community</a>
                <a href="/press">press</a>
              </nav>
            </div>

            <ContactInfo>
              <h4>contact</h4>
              <p>
                <Icon icon="tabler:mail-opened" />
                <span>hey@dorkodu.com</span>
              </p>
              <p>
                <Icon icon="tabler:map-pin" />
                <span>istanbul, tr</span>
              </p>
            </ContactInfo>
          </Nav>
        </UpperSection>
        <SubSection>
          <Copyright>
            <p className="statement">
              <b>&copy; 2022</b> — the dorkodu company.
            </p>
          </Copyright>
        </SubSection>
      </Wrapper>
    </Root>
  );
};

export default Footer;

const Wrapper = styled.div`
  padding: 1.5rem 1rem;
  max-width: ${ui.layout.breakpoint};
`;

const UpperSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
`;

const SubSection = styled.div`
  border-top: 2px solid ${tokens.color.gray(80)};
  margin-top: 1.5rem;
`;

const Brand = styled.div`
  margin: 0 0.5rem;
  padding: 0.5rem;

  .logo {
    display: flex;

    > svg {
      width: auto;
      height: 3.6rem;

      g {
        fill: ${tokens.color.gray(70)};
      }
    }
  }
`;

const Nav = styled.nav`
  padding: 0.5rem;
  padding-left: 1rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  h4 {
    display: inline-block;
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    border-bottom: 0.35rem solid ${tokens.color.gray(80)};
    border-radius: 3px;
    color: ${tokens.color.gray(10)};
  }

  a {
    display: inline-block;
    font-size: 1.15rem;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    color: ${tokens.color.gray(10)};

    &:hover {
      color: ${tokens.color.gray(50)};
      text-decoration: underline;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 0.25rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    color: ${tokens.color.gray(50)};
    font-weight: 600;
    margin-bottom: 0.5rem;

    svg {
      width: 1.75rem !important;
      height: 1.75rem !important;
      color: ${tokens.color.gray(70)};
    }
  }
`;

const Copyright = styled.div`
  padding: 1rem 0.5rem;

  p {
    display: inline-block;
    line-height: 120%;
    margin: 0.3rem 0;
    font-size: 1.2rem;
    color: ${tokens.color.gray(50)};
    font-weight: 500;

    &.statement {
      float: left;
    }
  }
`;

const Root = styled.footer`
  width: 100%;
  background-color: ${tokens.color.gray(90)};
  border-top: 1rem solid ${tokens.color.gray(95)};

  & > p {
    margin-top: 1rem;
    font-size: 1.15rem;
    line-height: 1.2rem;
    max-width: 25rem;
    font-weight: 450;
    color: ${tokens.color.gray(45)};
    float: none !important;
  }

  nav {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.75rem;
    align-items: center;

    a {
      width: 2.25rem;
      height: 2.25rem;

      svg {
        stroke-width: 2.5;
        color: ${tokens.color.gray(60)};
        width: 100%;
        height: 100%;
      }

      &:hover {
        svg {
          color: ${tokens.color.gray(70)};
        }
      }
    }
  }

  @media (min-width: ${tokens.viewpoint.mobile.XL}) {
    ${Wrapper} {
      width: 80%;
      margin: 0 auto;
      padding-left: 0;
      padding-right: 0;
    }

    ${Brand} {
      .__logo {
        justify-content: flex-start;
      }

      p {
        margin-left: 0;
        margin-right: 0;
        text-align: left;
        max-width: 25rem;
      }
    }

    ${Nav} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${ContactInfo} {
      a {
        justify-content: flex-start;
      }
    }
  }

  @media (min-width: ${tokens.viewpoint.tablet}) {
    ${Nav} {
      grid-template-columns: minmax(0, 2fr) minmax(0, 2fr) minmax(0, 3fr);
    }
  }

  @media (min-width: ${tokens.viewpoint.desktop.S}) {
    ${Nav} {
      grid-column: span 2 / span 2;
    }

    ${UpperSection} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;
