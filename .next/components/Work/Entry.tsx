import { FunctionComponent } from "react";
import { WorkRole } from "../../types/dorkodu";

const Entry: FunctionComponent<{
  role: WorkRole;
}> = ({ role }) => {
  return (
    <>
      <div>
        <h4>{role.title}</h4>
        <p>{role.domain}</p>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Entry;
