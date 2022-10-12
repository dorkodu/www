import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import { ui } from "../styles/prism";

interface TestimonialProps {
  quote: string;
  name: string;
  title?: string;
}

const Testimonial: FunctionComponent<TestimonialProps> = ({
  name,
  title,
  quote,
}) => {
  return (
    <Root>
      <Container>
        <Icon
          icon="tabler:quote"
          css={css`
            display: inline-block;
            margin-bottom: 1rem;
            margin-right: 1rem;
            color: ${ui.color.neutral(80)};
            width: 4rem;
            height: 4rem;
          `}
        />
        <Message>{quote}</Message>
        <Divider />
        <Name>{name}</Name>
        {title && <Title>{title}</Title>}
      </Container>
    </Root>
  );
};

export default Testimonial;

const Root = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  max-width: 48rem;
`;

const Message = styled.p`
  font-size: 1.15rem;
  line-height: 1.6rem;
  color: ${ui.color.neutral(20)};
  padding: 0;
  margin: 0;
`;

const Title = styled.p`
  padding: 0;
  margin: 0.25rem auto;
  color: ${ui.color.neutral(70)};
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-align: center;
  max-width: 24rem;
`;

const Divider = styled.span`
  display: inline-block;
  margin: 1.5rem 0 1rem;
  background-color: ${ui.color.primary(50)};
  width: 4.8rem;
  height: 0.4rem;
  border-radius: 1rem;
`;

const Name = styled.h4`
  padding: 0;
  margin: 0.25rem auto;
  color: ${ui.color.neutral(10)};
  font-size: 1.35rem;
  font-weight: 700;
  text-align: center;
  max-width: 16rem;
`;

const Container = styled.div`
  text-align: center;
  width: 100%;
`;
