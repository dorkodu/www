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
          icon="tabler:blockquote"
          css={{ color: ui.color.neutral(80) }}
          width={60}
          height={60}
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
  max-width: 36rem;
  margin: 0 auto;
`;

const Message = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${ui.color.neutral(20)};
  padding: 0;
  margin: 0.5rem 0;
`;

const Title = styled.p`
  padding: 0;
  margin: 0;
  color: ${ui.color.neutral(60)};
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 550;
  max-width: 24rem;
`;

const Name = styled.h4`
  padding: 0;
  margin: 0;
  color: ${ui.color.neutral(10)};
  font-size: 1.35rem;
  font-weight: 750;
  max-width: 16rem;
`;

const Divider = styled.span`
  display: inline-block;
  margin: 0.75rem 0;
  background-color: ${ui.color.primary(50)};
  width: 5rem;
  height: 0.45rem;
  border-radius: 1rem;
`;

const Container = styled.div`
  width: 100%;
`;
