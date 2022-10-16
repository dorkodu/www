import { css } from "@emotion/react";
import { Icon } from "@iconify-icon/react";
import { FunctionComponent } from "react";
import { WorkRole } from "../../types/dorkodu";

const Role: FunctionComponent<{
  role: WorkRole;
}> = ({ role }) => {
  return (
    <>
      <div>
        <div>
          <h3>{role.title}</h3>
          <p>{role.domain}</p>
          <p>
            {role.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </p>
          <div>
            <p>
              <Icon icon="tabler:location" width={32} height={32} />
              {role.location}
            </p>
            <p>
              <Icon icon="tabler:location" width={32} height={32} />
              {role.type}
            </p>
          </div>
        </div>
        <div>
          <h4>summary</h4>
          <p>{role.summary}</p>
          <h4>responsibiltiy</h4>
        </div>
      </div>
    </>
  );
};

export default Role;

const style = {
  root: css``,
  title: css``,
};
