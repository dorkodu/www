import { css } from "@emotion/react";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import { ui } from "../../styles/prism";

interface IndexProps {
  items: [string, string][];
}

const Index: FunctionComponent<IndexProps> = ({ items }) => {
  return (
    <div css={style}>
      <h3>
        <Icon
          icon="material-symbols:link-rounded"
          className="icon"
          width={36}
          height={36}
        />
        <span>Index</span>
      </h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item[0]}>{item[1]}</a>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Index;

const style = css`
  display: flex;
  flex-direction: column;
  min-width: 18rem;
  max-width: 25rem;
  margin: 1rem auto;
  padding: 1rem;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.65rem;
    font-weight: 700;

    .icon {
      color: ${ui.color.neutral(65)};
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    position: relative;
    list-style: none;
    padding-left: 1.5em;
    font-size: 1.25rem;

    li:before {
      content: "↳";
      position: absolute;
      left: 0;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.5rem;
      color: ${ui.color.secondary(80)};
    }

    li {
      a {
        font-weight: 600;
        font-size: 1.25rem;
        color: ${ui.color.secondary(45)};

        &:hover {
          color: ${ui.color.secondary(70)};
          text-decoration: underline;
        }
      }
    }
  }
`;
